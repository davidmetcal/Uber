import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavCard from '../components/NavCard';
import RideOptionsCard from '../components/RideOptionsCard';

export const CardNav = () => {
	const Stack = createNativeStackNavigator();
	return (
		<Stack.Navigator>
			<Stack.Screen
				name='NavCard'
				component={NavCard}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name='RideOptionsCard'
				component={RideOptionsCard}
				options={{ headerShown: false }}
			/>
		</Stack.Navigator>
	);
};
