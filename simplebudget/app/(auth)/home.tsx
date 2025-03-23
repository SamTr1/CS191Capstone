import { View, Text, Button, SafeAreaView } from 'react-native';
import auth from '@react-native-firebase/auth';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MidBanner from './MidBanner';
import React from 'react';
import SwipeModalExample from '../pages/SwipeModalExample';

export default function Page() {
	const user = auth().currentUser;

	return (
		<>
			<SafeAreaProvider>
			<SafeAreaView
				style={{
				justifyContent: "center",
				alignItems: "center",
				backgroundColor: 'lightgrey',
				height: "100%",
				}}
			>
				{/* <TopBanner /> */}
				<MidBanner />
				<SwipeModalExample/>
			
			</SafeAreaView>
			</SafeAreaProvider>		
			<Button title="Sign out" onPress={() => auth().signOut()} />

		</>

	  );
};