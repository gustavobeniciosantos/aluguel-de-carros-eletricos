// CarDetailsScreen.js
import React from 'react';
import { View, Text, Image, Button } from 'react-native';

export default function CarDetailsScreen({ route, navigation }) {
  const { car } = route.params;
  
  const carDetails = [
    { id: '1', color: 'Azul', MaxSpeed: '200km/h', door: '4' },
    { id: '2', color: 'Verde', MaxSpeed: '250km/h', door: '4' },
    { id: '3', color: 'Vermelho', MaxSpeed: '180km/h', door: '4' },
    ];

    const selectedCar = carDetails.find(carDetail => carDetail.id===car.id)

  const handleRent = () => {
    navigation.navigate('Purchase');
  };

  return (
    <View>
      <Image source={car.image} style={{ width: 150, height: 100 }} />
      <Text>{car.name}</Text>
      <Text>{selectedCar.color}</Text>
      <Text>{selectedCar.door}</Text>
      <Button title="Alugar" onPress={handleRent} />
    </View>
  );
}
