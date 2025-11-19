import { SafeAreaView } from 'react-native-safe-area-context';
import { globalStyles } from '../../styles/global';
import { Text, Button } from 'react-native';
import { useState, useEffect } from 'react';
import { TextInput } from 'react-native-gesture-handler';
import { View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { ItemMoeda } from '../../src/components/ItemMoeda';

   export default function Exemplo1Screen() {

  const [listaMoedas, setListaMoedas] = useState([]);

  const [criptoSelecionada, setCriptoSelecionada] = useState(null);
  const [moedaSelecionada, setMoedaSelecionada] = useState(null);
  const [valorDigitado, setValorDigitado] = useState("");
  const [resultado, setResultado] = useState(null);

  const dinheiro = [
    { label: "Dólar (USD)", value: "usd" },
    { label: "Real (BRL)", value: "brl" },
    { label: "Euro (EUR)", value: "eur" }
  ];

  const URLcripto = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd';

  // carregando criptos
  useEffect(() => {
    fetch(URLcripto)
      .then(res => res.json())
      .then(data => setListaMoedas(data))
      .catch(err => console.log(err));
  }, []);

  const itensPicker = listaMoedas.map(item => ({
    label: item.name,
    value: item.id
  }));


  // -------------------------
  // FUNÇÃO DE CONVERSÃO
  // -------------------------
  const converter = () => {
    if (!criptoSelecionada || !moedaSelecionada || !valorDigitado) {
      alert("Selecione as moedas e digite um valor!");
      return;
    }

    const urlConversao =
      `https://api.coingecko.com/api/v3/simple/price?ids=${criptoSelecionada}&vs_currencies=${moedaSelecionada}`;

    fetch(urlConversao)
      .then(res => res.json())
      .then(data => {
        const preco = data[criptoSelecionada][moedaSelecionada];
        const calculado = Number(valorDigitado) * preco;
        setResultado(calculado);
      })
      .catch(err => console.log(err));
  };

  return (
    <SafeAreaView style={globalStyles.container}>

      <View style={globalStyles.placeholder}>
        <RNPickerSelect
          placeholder={{ label: "Selecione uma cripto...", value: null }}
          onValueChange={setCriptoSelecionada}
          items={itensPicker}
        />
        </View>
        
        <View style={globalStyles.placeholder}>
        {/* PICKER de MOEDA */}
        <RNPickerSelect
          placeholder={{ label: "Selecione a moeda...", value: null }}
          onValueChange={setMoedaSelecionada}
          items={dinheiro}
        />
        </View>
        <View style={globalStyles.placeholder}>
        {/* INPUT DO VALOR */}
        <TextInput
          keyboardType="numeric"
          placeholder="Digite o valor"
          value={valorDigitado}
          onChangeText={setValorDigitado}
        />
        </View>

        {/* BOTÃO DE CONVERTER */}
        <Button title="Converter" onPress={converter} />


      {/* RESULTADO */}
      {resultado !== null && (
        <Text style={globalStyles.texto}>
          Resultado: {resultado.toFixed(2)} {moedaSelecionada.toUpperCase()}
        </Text>
      )}

    </SafeAreaView>
  );
}
