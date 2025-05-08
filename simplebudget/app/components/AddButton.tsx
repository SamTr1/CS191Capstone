import React, { useRef, useState } from 'react';
import {
  Animated,
  Modal,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import uuid from 'react-native-uuid';
import { useBudgetContext } from '../context/BudgetContext';

export const AddButton = () => {
  const { addBudgetItem, addIncomeItem, setTotalIncome } = useBudgetContext();
  const [fanOpen, setFanOpen] = useState(false);
  const [modalType, setModalType] = useState<'income' | 'expense' | null>(null);

  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('Needs');
  const [isRecurring, setIsRecurring] = useState(false);
  const [frequency, setFrequency] = useState<'Daily' | 'Weekly' | 'Bi-weekly' | 'Monthly' | 'Annually'>('Monthly');
  const [notes, setNotes] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'Cash' | 'Debit' | 'Credit'>('Cash');

  const fadeAnim = useRef(new Animated.Value(0)).current;

  const toggleFan = () => {
    setFanOpen(!fanOpen);
    Animated.timing(fadeAnim, {
      toValue: fanOpen ? 0 : 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const handleSubmit = () => {
    const cleanedName = name.trim().replace(/[<>{}[\]\/\\'";:|^%$#@!~`]/g, '').replace(/\s+/g, ' ');
    const parsedAmount = parseFloat(amount);
    const now = new Date().toISOString();

    if (!cleanedName || isNaN(parsedAmount)) return;

    if (modalType === 'expense') {
      addBudgetItem({
        id: uuid.v4().toString(),
        name: cleanedName,
        amount: parsedAmount,
        category,
        date: now,
        notes,
        paymentMethod,
      });
    }

    if (modalType === 'income') {
      addIncomeItem({
        id: uuid.v4().toString(),
        name: cleanedName,
        amount: parsedAmount,
        date: now,
        isRecurring,
        frequency: isRecurring ? frequency : undefined,
        notes,
      });
      setTotalIncome(prev => prev + parsedAmount);
    }

    closeModal();
  };

  const closeModal = () => {
    setModalType(null);
    setFanOpen(false);
    setName('');
    setAmount('');
    setCategory('Needs');
    setIsRecurring(false);
    setFrequency('Monthly');
    setNotes('');
    setPaymentMethod('Cash');
  };

  const renderModal = () => (
    <Modal visible={modalType !== null} transparent animationType="slide">
      <View style={styles.modalOverlay}>
        <View style={styles.modalView}>
          <Text style={styles.label}>{modalType === 'income' ? 'Source' : 'Name'}</Text>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={(text) => {
              const sanitized = text.replace(/[<>{}[\]\/\\'";:|^%$#@!~`]/g, '');
              setName(sanitized);
            }}
          />

          <Text style={styles.label}>Amount</Text>
          <TextInput
            style={styles.input}
            value={amount}
            onChangeText={(text) => {
              let cleaned = text.replace(/[^0-9.]/g, '');
              const parts = cleaned.split('.');
              if (parts.length > 2) return;
              if (parts[1]?.length > 2) parts[1] = parts[1].slice(0, 2);
              setAmount(parts.join('.'));
            }}
            keyboardType="decimal-pad"
          />

          {modalType === 'income' && (
            <>
              <View style={styles.row}>
                <Text style={styles.label}>Recurring?</Text>
                <Switch
                  value={isRecurring}
                  onValueChange={setIsRecurring}
                  trackColor={{ false: '#ccc', true: '#5A9E5D' }}
                  thumbColor={isRecurring ? '#fff' : '#f4f3f4'}
                />
              </View>

              {isRecurring && (
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollRow}>
                  {['Daily', 'Weekly', 'Bi-weekly', 'Monthly', 'Annually'].map((freq) => (
                    <TouchableOpacity
                      key={freq}
                      onPress={() => setFrequency(freq as any)}
                      style={[
                        styles.optionButton,
                        frequency === freq && styles.optionButtonSelected,
                      ]}
                    >
                      <Text
                        style={[
                          styles.optionText,
                          frequency === freq && styles.optionTextSelected,
                        ]}
                      >
                        {freq}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </ScrollView>
              )}
            </>
          )}

          {modalType === 'expense' && (
            <>
              <Text style={styles.label}>Category</Text>
              <View style={styles.optionsRow}>
                {['Needs', 'Wants', 'Savings'].map((option) => (
                  <TouchableOpacity
                    key={option}
                    onPress={() => setCategory(option)}
                    style={[
                      styles.optionButton,
                      category === option && styles.optionButtonSelected
                    ]}
                  >
                    <Text
                      style={[
                        styles.optionText,
                        category === option && styles.optionTextSelected
                      ]}
                    >
                      {option}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>

              <Text style={styles.label}>Payment Method</Text>
              <View style={styles.optionsRow}>
                {['Cash', 'Debit', 'Credit'].map((method) => (
                  <TouchableOpacity
                    key={method}
                    onPress={() => setPaymentMethod(method as any)}
                    style={[
                      styles.optionButton,
                      paymentMethod === method && styles.optionButtonSelected
                    ]}
                  >
                    <Text
                      style={[
                        styles.optionText,
                        paymentMethod === method && styles.optionTextSelected
                      ]}
                    >
                      {method}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>

              <Text style={styles.label}>Notes</Text>
              <TextInput
                style={styles.input}
                value={notes}
                onChangeText={setNotes}
                placeholder="Optional notes..."
              />
            </>
          )}

          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.submitText}>Add</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );

  return (
    <>
      {renderModal()}

      {fanOpen && (
        <>
          <Animated.View style={[styles.fanButton, { bottom: 160, opacity: fadeAnim }]}>
            <TouchableOpacity onPress={() => setModalType('income')} style={styles.subFab}>
              <Text style={styles.subText}>💰 Income</Text>
            </TouchableOpacity>
          </Animated.View>
          <Animated.View style={[styles.fanButton, { bottom: 110, opacity: fadeAnim }]}>
            <TouchableOpacity onPress={() => setModalType('expense')} style={styles.subFab}>
              <Text style={styles.subText}>🧾 Expense</Text>
            </TouchableOpacity>
          </Animated.View>
        </>
      )}

      <TouchableOpacity style={styles.fab} onPress={toggleFan}>
        <Text style={styles.fabText}>{fanOpen ? '×' : '＋'}</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  fab: {
    backgroundColor: '#5A9E5D',
    borderRadius: 30,
    height: 60,
    width: 60,
    position: 'absolute',
    bottom: 30,
    right: 30,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 100,
  },
  fabText: {
    color: 'white',
    fontSize: 30,
  },
  subFab: {
    backgroundColor: '#5A9E5D',
    borderRadius: 20,
    padding: 10,
    alignItems: 'center',
  },
  subText: {
    color: 'white',
    fontWeight: '600',
  },
  fanButton: {
    position: 'absolute',
    right: 35,
    zIndex: 99,
  },
  modalView: {
    backgroundColor: 'white',
    marginHorizontal: 20,
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  label: {
    fontWeight: 'bold',
    marginTop: 10,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
    paddingVertical: 5,
  },
  optionsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  scrollRow: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  optionButton: {
    padding: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#f2f2f2',
    margin: 4,
  },
  optionButtonSelected: {
    backgroundColor: '#5A9E5D',
    borderColor: '#5A9E5D',
  },
  optionText: {
    color: '#333',
  },
  optionTextSelected: {
    color: 'white',
    fontWeight: 'bold',
  },
  submitButton: {
    marginTop: 20,
    backgroundColor: '#5A9E5D',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  submitText: {
    color: 'white',
    fontWeight: 'bold',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
  },
});