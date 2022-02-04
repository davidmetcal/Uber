import { SafeAreaView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const EatsScreen = () => {
	const navigation = useNavigation();
	return (
		<SafeAreaView>
			<TouchableOpacity
				style={tw`absolute top-10 left-10 bg-black rounded-full h-6 w-6 z-50`}
				onPress={() => navigation.pop()}
			>
				<Icon name='chevron-left' color='white' />
			</TouchableOpacity>
			<Text style={tw`text-center`}>Uber Eats</Text>
		</SafeAreaView>
	);
};

export default EatsScreen;

const styles = StyleSheet.create({});
