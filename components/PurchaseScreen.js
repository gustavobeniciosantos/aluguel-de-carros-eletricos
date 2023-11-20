
import React from 'react';
import { View, Text, Button } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useState } from 'react';

export default function PurchaseScreen({ navigation }) {
  const handlePurchase = () => {
    
    navigation.navigate('Success');
    
  };

const [pickupDate, setPickupDate] = useState(null);
const [returnDate, setReturnDate] = useState(null);
const [dateType, setDateType] = useState('');

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
    setDateType(dateType)
  };


  const handleConfirmRent = () => {
    const daysDifference = calculateTotalCost();
  
    if (selectedCar && daysDifference > 0) {
      const total = daysDifference * selectedCar.valorPorDia;
      setTotalCost(total);
  
      const message = `Carro alugado com sucesso!\nValor total: R$ ${total.toFixed(2)}\nData de retirada: ${pickupDate ? pickupDate.toDateString() : 'N/A'}`;
      setPopupMessage(message);
      setPopupVisible(true);
      setDetailsModalVisible(false);
    } else {
      console.log("teste")
    }
  };
  
  const onChange = (event, selectedDate) => {
    setShowDatePicker(false);
    // Verifique se o usuário selecionou uma data
    if (selectedDate) {
      // Defina a data no estado apropriado (pickupDate ou returnDate)
      // Você pode adicionar lógica adicional para diferenciar entre as datas se necessário
      if (dateType === 'pickup') {
        setPickupDate(selectedDate);
      } else if (dateType === 'return') {
        setReturnDate(selectedDate);
      }
    }
  };

  

  return (
    <View>
      <Text>Selecione as datas de retirada e devolução</Text>

      <Button title={`Retirada: ${pickupDate ? pickupDate.toDateString() : 'Selecionar Data'}`} onPress={() => showDatepicker('pickup')} />
      <Button title={`Devolução: ${returnDate ? returnDate.toDateString() : 'Selecionar Data'}`} onPress={() => showDatepicker('return')} />

      {showDatePicker && (
        <DateTimePicker
          value={new Date()}
          mode="date"
          display="default"
          onChange={onChange}
        />
    )}

      <Button title="Confirmar Compra" onPress={handlePurchase} />
    </View>
  );
}


