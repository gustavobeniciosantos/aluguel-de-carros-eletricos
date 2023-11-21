// PurchaseScreen.js
import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function PurchaseScreen({ route, navigation }) {
  const { car } = route.params;
  const [pickupDate, setPickupDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);
  const [dateType, setDateType] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedCar, setSelectedCar] = useState(car);
  const [totalCost, setTotalCost] = useState(0);

  const calculateTotalCost = () => {
    if (pickupDate && returnDate) {
      const timeDifference = returnDate.getTime() - pickupDate.getTime();
      const daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));
      return daysDifference;
    }
    return 0;
  };
  

  const showDatepicker = (dateType) => {
    setShowDatePicker(true);
    setDateType(dateType);
  };

  const handleConfirmRent = () => {
    const daysDifference = calculateTotalCost();

    if (selectedCar && daysDifference > 0) {
      const total = daysDifference * selectedCar.valorPorDia;
      setTotalCost(total);

      const message = `Carro alugado com sucesso!`;

      navigation.navigate('Success', {
        message,
        total,
        pickupDate: pickupDate ? pickupDate.toDateString() : 'N/A',
        returnDate: returnDate ? returnDate.toDateString() : 'N/A',
      });
    } else {
      console.log('teste');
    }
  };

  const onChange = (event, selectedDate, type) => {
    setShowDatePicker(false);
    if (selectedDate) {
      if (type === 'pickup') {
        setPickupDate(selectedDate);
      } else if (type === 'return') {
        setReturnDate(selectedDate);
      }
    }
  };

  const handlePurchase = () => {
    navigation.navigate('Success');
    handleConfirmRent();
  };

  return (
    <View>
      <Text>{selectedCar.name}</Text>
      <Text>Valor por dia: R$ {selectedCar.valorPorDia.toFixed(2)}</Text>

      <Text>Selecione as datas de retirada e devolução</Text>

      <Button
        title={`Retirada: ${pickupDate ? pickupDate.toDateString() : 'Selecionar Data'}`}
        onPress={() => showDatepicker('pickup')}
      />
      <Button
        title={`Devolução: ${returnDate ? returnDate.toDateString() : 'Selecionar Data'}`}
        onPress={() => showDatepicker('return')}
      />

      {showDatePicker && (
        <DateTimePicker value={new Date()} mode="date" display="default" onChange={(event, selectedDate) => onChange(event, selectedDate, dateType)} />
      )}

      <Button title="Confirmar Compra" onPress={handlePurchase} />
    </View>
  );
}
