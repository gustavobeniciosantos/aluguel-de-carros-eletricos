
import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default function LoginScreen({ navigation }) {
  const handleLogin = () => {
      navigation.navigate('SelectCar');
  };

  return (
    <View>
      <Text>Login Screen</Text>
      <TextInput placeholder="Username" />
      <TextInput placeholder="Password" secureTextEntry={true} />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}
