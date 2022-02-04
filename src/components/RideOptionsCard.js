import {
	FlatList,
	Image,
	SafeAreaView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import React, { useState } from 'react';
import tw from 'tailwind-react-native-classnames';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectTravelTimeInformation } from '../slices/navSlice';

const data = [
	{
		id: 'Uber-X-123',
		title: 'Uber X',
		mutiplier: 1,
		image: 'https://links.papareact.com/3pn',
	},
	{
		id: 'Uber-X-456',
		title: 'Uber XL',
		mutiplier: 1.2,
		image: 'https://links.papareact.com/5w8',
	},
	{
		id: 'Uber-LUX-789',
		title: 'Uber LUX',
		mutiplier: 1.75,
		image: 'https://links.papareact.com/7pf',
	},
];

const RideOptionsCard = () => {
	const navigation = useNavigation();
	const [selected, setSelected] = useState(null);
	const travelTimeInformation = useSelector(selectTravelTimeInformation);

	const calcFare = mutiplier => {
		return (
			Math.floor(travelTimeInformation?.distance?.value * 0.1 * mutiplier) / 100
		);
	};

	return (
		<SafeAreaView style={tw`bg-white flex-grow`}>
			<View>
				<TouchableOpacity
					style={tw`bg-black w-6 rounded-full absolute top-5 left-5 z-50`}
					onPress={() => navigation.pop()}
				>
					<Icon name='chevron-left' type='fontawesome' color='white' />
				</TouchableOpacity>
				<Text style={tw`text-center py-5 text-xl`}>
					Select a Ride - {travelTimeInformation?.distance?.text}
				</Text>
			</View>
			<FlatList
				data={data}
				keyExtractor={item => item.id}
				renderItem={({ item: { id, title, mutiplier, image }, item }) => (
					<TouchableOpacity
						style={tw`flex-row items-center justify-between px-10 ${
							id === selected?.id && 'bg-gray-200'
						}`}
						onPress={() => setSelected(item)}
					>
						<Image
							source={{ uri: image }}
							style={{ height: 100, width: 100, resizeMode: 'contain' }}
						/>

						<View style={tw`-ml-6`}>
							<Text style={tw`text-xl font-semibold`}>{title}</Text>
							<Text>{travelTimeInformation?.duration?.text} Travel time</Text>
						</View>
						<Text style={tw`text-xl`}>${calcFare(mutiplier)}</Text>
					</TouchableOpacity>
				)}
			/>
			<View style={tw`mt-auto border-t border-gray-200`}>
				<TouchableOpacity
					disabled={!selected}
					style={tw`bg-black py-3 m-3 ${!selected && 'bg-gray-300'}`}
				>
					<Text style={tw`text-center text-white text-xl`}>
						Choose {selected?.title}
					</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
};

export default RideOptionsCard;

const styles = StyleSheet.create({});
