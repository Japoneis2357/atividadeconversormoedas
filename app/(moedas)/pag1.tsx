import { SafeAreaView } from 'react-native-safe-area-context';
import { globalStyles } from '../../styles/global';
import { Text } from 'react-native';
import { useState, useEffect } from 'react';
import { TextInput } from 'react-native-gesture-handler';
import { View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { ItemMoeda } from '../../src/components/ItemMoeda';

   const URL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd';

export default function Exemplo1Screen() {

  const [precoBitcoin, setPrecoBitcoin] = useState('');
  const [listaMoedas, setListaMoedas] = useState([]);

  useEffect(() => {
      const intervalo = setInterval(() => {
          fetch(URL)
              .then(res => res.json())
              .then(data => data.bitcoin.usd)
              .then(data => setPrecoBitcoin(data))
              .catch(err => console.log("ERRO:", err));

      }, 100000);

      return () => clearInterval(intervalo);
  }, []);

  // buscar lista de moedas
  useEffect(() => {
    fetch(URL)
      .then(res => res.json())
      .then(data => setListaMoedas(data))
      .catch(err => console.log(err));
  }, []);

  // montar lista para o Picker
  const itensPicker = listaMoedas.map((item) => ({
    label: item.name,
    value: item.id
  }));

  return (
    <SafeAreaView style={globalStyles.container}>

      <Text style={globalStyles.texto}>$ {precoBitcoin}</Text>

      <View style={globalStyles.placeholder}>
        <RNPickerSelect
          onValueChange={(value) => console.log(value)}
          items={itensPicker}
        />
      </View>

    </SafeAreaView>
  );
}
