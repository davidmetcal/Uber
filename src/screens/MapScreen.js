import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import Map from '../components/Map';
import { CardNav } from '../infrastructure/CardNav';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { useNavigation } from '@react-navigation/native';

const MapScreen = () => {
	const navigation = useNavigation();
	return (
		<View>
			<TouchableOpacity
				style={tw`absolute top-16 left-8 bg-gray-100 z-50 p-3 rounded-full shadow-lg`}
				onPress={() => navigation.navigate('Home')}
			>
				<Icon name='menu' />
			</TouchableOpacity>
			<View style={tw`h-1/2`}>
				<Map />
			</View>
			<View style={tw`h-1/2`}>
				<CardNav />
			</View>
		</View>
	);
};

export default MapScreen;

const styles = StyleSheet.create({});
