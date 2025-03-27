import React from 'react';

import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useBudgetContext } from '../context/BudgetContext';

const Profile = () => {
  const { user } = useBudgetContext();
  const userName =  'John Doe';
  const userPic = 'https://placehold.co/50';
  const budgetScore = 85;
  const friends = [
    {
      id: '1',
      name: 'Alice',
      profilePic: 'https://placehold.co/50',
      budgetScore: 92,
    },
    {
      id: '2',
      name: 'Bob',
      profilePic: 'https://placehold.co/50',
      budgetScore: 76,
    },
    {
      id: '3',
      name: 'Charlie',
      profilePic: 'https://placehold.co/50',
      budgetScore: 88,
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Top Section */}
      <View style={styles.topSection}>
        <Image source={{ uri: userPic }} style={styles.profileImage} />
        <Text style={styles.userName}>{userName}</Text>
      </View>

      {/* Middle Section */}
      <View style={styles.middleSection}>
        <Text style={styles.budgetLabel}>Budget Score</Text>
        <Text style={styles.budgetScore}>{budgetScore}</Text>
      </View>

      {/* Bottom Section */}
      <View style={styles.bottomSection}>
        <Text style={styles.friendsHeader}>Friends</Text>
        <FlatList
          data={friends}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.friendItem}>
              <Image source={{ uri: item.profilePic }} style={styles.friendPic} />
              <Text style={styles.friendName}>{item.name}</Text>
              <Text style={styles.friendScore}>{item.budgetScore}</Text>
            </View>
          )}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 40,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  topSection: {
    alignItems: 'center',
    marginBottom: 30,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  userName: {
    fontSize: 20,
    fontWeight: '600',
  },
  middleSection: {
    alignItems: 'center',
    marginBottom: 30,
  },
  budgetLabel: {
    fontSize: 16,
    color: '#777',
  },
  budgetScore: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#4CAF50',
  },
  bottomSection: {
    width: '90%',
  },
  friendsHeader: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
  },
  friendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
  },
  friendPic: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  friendName: {
    fontSize: 16,
    flex: 1,
  },
  friendScore: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Profile;