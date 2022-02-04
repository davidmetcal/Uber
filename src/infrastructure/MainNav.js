import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import MapScreen from '../screens/MapScreen';
import EatsScreen from '../screens/EatsScreen';

export const MainNav = () => {
	const Stack = createNativeStackNavigator();
	return (
		<Stack.Navigator>
			<Stack.Screen
				name='Home'
				component={HomeScreen}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name='MapScreen'
				component={MapScreen}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name='EatsScreen'
				component={EatsScreen}
				options={{ headerShown: false }}
			/>
		</Stack.Navigator>
	);
};
