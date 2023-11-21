// SuccessScreen.js
import React from 'react';
import { View, Text } from 'react-native';

export default function SuccessScreen({ route }) {
  const { message, total, pickupDate, returnDate } = route.params;

  return (
    <View>
      <Text>{message}</Text>
      <Text>Valor do aluguel: R$ {total.toFixed(2)}</Text>
      <Text>Data de retirada: {pickupDate}</Text>
      <Text>Data de devolução: {returnDate}</Text>
    </View>
  );
}
