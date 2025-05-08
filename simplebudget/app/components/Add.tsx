import React, { useState } from 'react';
import {
    Modal,
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import { useBudgetContext } from '../context/BudgetContext';

const Add = () => {
  const { addBudgetItem } = useBudgetContext();

  const [modalVisible, setModalVisible] = useState(false);
  const [label, setLabel] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState<'Need' | 'Want' | 'Saving'>('Need');

  const handleAdd = () => {
    if (label && amount) {
      addBudgetItem(label, parseFloat(amount), category);
      setLabel('');
      setAmount('');
      setModalVisible(false);
    }
  };

  return (
    <>
      <TouchableOpacity style={styles.addButton} onPress={() => setModalVisible(true)}>
        <Text style={styles.addText}>＋</Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType="slide" transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TextInput
              style={styles.input}
              placeholder="Item Label"
              value={label}
              onChangeText={setLabel}
            />
            <TextInput
              style={styles.input}
              placeholder="Amount"
              keyboardType="numeric"
              value={amount}
              onChangeText={setAmount}
            />
            <View style={styles.categoryRow}>
              {['Need', 'Want', 'Saving'].map((cat) => (
                <Pressable
                  key={cat}
                  style={[
                    styles.categoryButton,
                    category === cat && styles.categorySelected,
                  ]}
                  onPress={() => setCategory(cat as 'Need' | 'Want' | 'Saving')}
                >
                  <Text>{cat}</Text>
                </Pressable>
              ))}
            </View>
            <Pressable style={styles.saveButton} onPress={handleAdd}>
              <Text style={styles.saveButtonText}>Add Item</Text>
            </Pressable>
            <Pressable onPress={() => setModalVisible(false)}>
              <Text style={{ marginTop: 10, color: 'red' }}>Cancel</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  addButton: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    backgroundColor: '#007AFF',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  addText: {
    fontSize: 30,
    color: '#fff',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  modalContent: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
    borderRadius: 5,
  },
  categoryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 10,
  },
  categoryButton: {
    flex: 1,
    padding: 10,
    marginHorizontal: 5,
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
  },
  categorySelected: {
    backgroundColor: '#007AFF',
    borderColor: '#007AFF',
  },
  saveButton: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    width: '100%',
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Add;