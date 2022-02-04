import {
	FlatList,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import React from 'react';
import { Icon } from 'react-native-elements';
import tw from 'tailwind-react-native-classnames';
import { GOOGLE_MAPS_APIKEY } from '@env';
import { setDestination, setOrigin } from '../slices/navSlice';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

const data = [
	{
		id: '123',
		icon: 'home',
		location: 'Home',
		destination: 'Code Street, London, UK',
	},
	{
		id: '459',
		icon: 'briefcase',
		location: 'Work',
		destination: 'London Eye, London, UK',
	},
];

const NavFavourites = ({ origin }) => {
	const dispatch = useDispatch();
	const navigation = useNavigation();

	return (
		<FlatList
			data={data}
			keyExtractor={item => item.id}
			ItemSeparatorComponent={() => (
				<View style={[tw`bg-gray-200 h-1`, { height: 0.5 }]} />
			)}
			renderItem={({ item: { icon, location, destination }, item }) => (
				<TouchableOpacity
					style={tw`flex-row items-center p-5`}
					onPress={() => {
						fetch(
							`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(
								destination
							)}&key=${GOOGLE_MAPS_APIKEY}`
						)
							.then(res => res.json())
							.then(data => {
								dispatch(
									origin
										? setOrigin({
												description: destination,
												location: data.results[0].geometry.location,
										  })
										: setDestination({
												description: destination,
												location: data.results[0].geometry.location,
										  })
								);
								navigation.navigate(origin ? 'MapScreen' : 'RideOptionsCard');
							});
					}}
				>
					<Icon
						name={icon}
						style={tw`mr-4 rounded-full bg-gray-300 p-3`}
						type='ionicon'
						size={18}
						color='white'
					/>
					<View>
						<Text style={tw`font-semibold text-lg`}>{location}</Text>
						<Text style={tw`text-gray-500`}>{destination}</Text>
					</View>
				</TouchableOpacity>
			)}
		/>
	);
};

export default NavFavourites;

const styles = StyleSheet.create({});
