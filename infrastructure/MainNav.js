import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../src/screens/HomeScreen';
import MapScreen from '../src/screens/MapScreen';
import EatsScreen from '../src/screens/EatsScreen';

const MainNav = () => {
	const Stack = createNativeStackNavigator();
	return (
		<Stack.Navigator>
			<Stack.Screen
				name='Home'
				component={HomeScreen}
				options={{ headerShown: false }}
			/>
			<Stack.Screen name='MapScreen' component={MapScreen} />
			<Stack.Screen name='EatsScreen' component={EatsScreen} />
		</Stack.Navigator>
	);
};

export default MainNav;
