import {
	SafeAreaView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import tw from 'tailwind-react-native-classnames';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from '@env';
import { useDispatch } from 'react-redux';
import { setDestination } from '../slices/navSlice';
import NavFavourites from './NavFavourites';
import { Icon } from 'react-native-elements';
import { useSelector } from 'react-redux';
import { selectDestination } from '../slices/navSlice';

const NavCard = () => {
	const navigation = useNavigation();
	const dispatch = useDispatch();
	const destination = useSelector(selectDestination);

	return (
		<SafeAreaView style={tw`bg-white flex-1`}>
			<Text style={tw`text-center py-5 text-xl`}>I'm the NavCard</Text>
			<View style={tw`border-t border-gray-200 flex-shrink`}>
				<GooglePlacesAutocomplete
					placeholder='Where to?'
					nearbyPlacesAPI='GooglePlacesSearch'
					debounce={400}
					styles={toInputBoxStyles}
					fetchDetails={true}
					enablePoweredByContainer={false}
					query={{ key: GOOGLE_MAPS_APIKEY, language: 'en' }}
					returnKeyType={'search'}
					onPress={async (data, details = null) => {
						await dispatch(
							setDestination({
								location: details.geometry.location,
								description: data.description,
							})
						);
						navigation.navigate('RideOptionsCard');
					}}
				/>
			</View>
			<NavFavourites origin={false} />
			<View
				style={tw`flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-100`}
			>
				<TouchableOpacity
					style={tw`flex flex-row bg-black w-24 px-4 py-3 rounded-full justify-between`}
					onPress={() => navigation.navigate('RideOptionsCard')}
					disabled={!destination}
				>
					<Icon name='car' type='font-awesome' color='white' size={16} />
					<Text style={tw`text-white text-center`}>Rides</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={tw`flex flex-row bg-white w-24 px-4 py-3 rounded-full justify-between`}
					onPress={() => navigation.navigate('EatsScreen')}
				>
					<Icon
						name='fast-food-outline'
						type='ionicon'
						color='black'
						size={16}
					/>
					<Text style={tw`text-black text-center`}>Eats</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
};

export default NavCard;

const toInputBoxStyles = StyleSheet.create({
	container: {
		backgroundColor: 'white',
		paddingTop: 20,
		flex: 0,
	},
	textInput: {
		backgroundColor: '#DDDDDF',
		borderRadius: 0,
		fontSize: 18,
	},
	textInputContainer: {
		paddingHorizontal: 20,
	},
	listView: {
		height: 900,
	},
});
