// SuccessScreen.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Imagem from '../assets/sucesso.png';

export default function SuccessScreen({ route }) {
  const styles = StyleSheet.create({
    container: {
      marginTop: 20,
      flex: 1,
      gap: 20,
      alignItems: 'center',
      width: '80%',
      marginHorizontal: 'auto',
    },
    text: {
      fontSize: 40,
      fontWeight: 'bold',
      color: 'black',
      textAlign: 'center',
    },
    
  }
  );

      //const { message, total, pickupDate, returnDate } = route.params;

  return (
    <View style={styles.container}>
      <Image source={Imagem} style={{ width: 350, height: 350 }} />
      <Text style={styles.text}>Aluguel realizado com sucesso!</Text>
      {/*<Text>{message}</Text>
      <Text>Valor do aluguel: R$ {total.toFixed(2)}</Text>
      <Text>Data de retirada: {pickupDate}</Text>
      <Text>Data de devolução: {returnDate}</Text>*/}
    </View>
  );
}
