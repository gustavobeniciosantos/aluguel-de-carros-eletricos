// SelectCarScreen.js
import React from 'react';
import Imagem from '../assets/E-tron.png';
import { View, Text, FlatList, Image, Button } from 'react-native';

const carsData = [
  { id: '1', name: 'Carro 1', image: Imagem, valorPorDia: 50},
  { id: '2', name: 'Carro 2', image: Imagem, valorPorDia: 60},
  { id: '3', name: 'Carro 3', image: Imagem, valorPorDia: 70},
];

export default function SelectCarScreen({ navigation }) {
  const handleCarSelection = (car) => {
    navigation.navigate('Purchase', { car });
  };

  const renderCarItem = ({ item }) => (
    <View>
      <Image source={item.image} style={{ width: 150, height: 100 }} />
      <Text>{item.name}</Text>
      <Button title="Ver Detalhes" onPress={() => handleCarSelection(item)} />
    </View>
  );

  return (
    <View>
      <Text>Select Car Screen</Text>
      <FlatList
        data={carsData}
        keyExtractor={(item) => item.id}
        renderItem={renderCarItem}
      />
    </View>
  );
}