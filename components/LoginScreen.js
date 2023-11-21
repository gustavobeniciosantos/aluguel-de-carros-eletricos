

import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function LoginScreen({ navigation }) {
  const handleLogin = () => {
    navigation.navigate('SelectCar');
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      gap: 35,
      width: '80%',
      marginHorizontal: 'auto',
    },
    text: {
      fontSize: 40,
      fontWeight: 'bold',
      color: '#211e1f',
    },
    textButton:{
      fontSize: 25,
      fontWeight: 'bold',
      color: 'white',
    },
    input: {
      paddingTop: 20,
      paddingBottom: 20,
      paddingLeft: 140,
      paddingRight: 10,
      borderWidth: 1,
      borderColor: 'grey',
      borderRadius: 10,
    },
    button: {
      backgroundColor: '#51ADA8',
      paddingVertical: 10,
      width: '100%',
      borderRadius: 5,
      alignItems: 'center',
    },
    inputBox: {
      gap: 10,
      width: '100%',
    }
  });

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Faça seu login</Text>
      <View style={styles.inputBox}>
        <TextInput style={styles.input} placeholder="Username" />
        <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleLogin}><Text style={styles.textButton}>Login</Text></TouchableOpacity>
    </View>
  );
}
