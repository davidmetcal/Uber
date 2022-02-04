import { StyleSheet, Text, SafeAreaView, Image, View } from 'react-native';
import React, { useRef, useState } from 'react';
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from '@env';
import { useDispatch } from 'react-redux';
import { setOrigin, setDestination } from '../slices/navSlice';
import NavFavourites from '../components/NavFavourites';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
	const dispatch = useDispatch();
	const navigation = useNavigation();

	return (
		<SafeAreaView>
			<View style={tw`p-5`}>
				<Image
					source={{
						uri: 'https://links.papareact.com/gzs',
					}}
					style={{ height: 100, width: 100 }}
					resizeMode='contain'
				/>

				<GooglePlacesAutocomplete
					nearbyPlacesAPI='GooglePlacesSearch'
					placeholder='Where From?'
					debounce={400}
					styles={{
						container: {
							flex: 0,
						},
						textInput: {
							fontSize: 18,
						},
					}}
					query={{ key: GOOGLE_MAPS_APIKEY, language: 'en' }}
					enablePoweredByContainer={false}
					onPress={(data, details = null) => {
						dispatch(
							setOrigin({
								location: details.geometry.location,
								description: data.description,
							})
						);
						dispatch(setDestination(null));
						navigation.navigate('MapScreen');
					}}
					fetchDetails={true}
					returnKeyType={'search'}
				/>

				<NavOptions />
				<NavFavourites origin={true} />
			</View>
		</SafeAreaView>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({});
