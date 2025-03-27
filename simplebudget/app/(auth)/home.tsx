import auth from '@react-native-firebase/auth';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { BudgetContextProvider } from '../context/BudgetContext';
import BudgetApp from '../pages/BudgetApp';

export default function Page() {
	const user = auth().currentUser;
	return (
		<SafeAreaProvider>
			<SafeAreaView style={{ flex: 1 }}>
				<BudgetContextProvider>
					<BudgetApp />
			  		{/* <Settings /> */}
			  		{/* <Profile /> */}
				</BudgetContextProvider>
			</SafeAreaView>
		</SafeAreaProvider>
	);
};