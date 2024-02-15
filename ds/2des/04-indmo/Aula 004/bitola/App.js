import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';

export default function App() {
  const [distancia, setDistancia] = new useState(0)
  const [corrente, setCorrente] = new useState(0)
  const [bitola110, setBitola110] = new useState(0)
  const [bitola220, setBitola220] = new useState(0)
  const calcular = () => {
    setBitola110(((2 * (distancia * corrente)) / 294.64).toFixed(2))
    setBitola220(((1.73 * (distancia * corrente)) / 510.4).toFixed(2))
  }
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cálculo de Bitola</Text>
      <Text style={styles.textos}>Distância em metros:</Text>
      <TextInput
        style={styles.inputs}
        value={distancia}
        onChangeText={(val) => { setDistancia(Number(val)) }}
      />
      <Text style={styles.textos}>Corrente em Amper:
      <Image
        style={styles.amper}
        source={require('./assets/amper.png')}
      />
      </Text>
      <TextInput
        style={styles.inputs}
        value={corrente}
        onChangeText={(val) => { setCorrente(Number(val)) }}
      />
      <Button
        style={styles.botao} title='Calcular'
        color='#000033'
        onPress={calcular}
      />
      <Image
        style={styles.formula}
        source={require('./assets/formula.jpg')}
      />
      <Text style={styles.textos}>Resultado 110V: {bitola110}</Text>
      <Text style={styles.textos}>Resultado 220V: {bitola220}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#330000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: '22px',
    color: '#fcc',
    fontWeight: 'bold',
  },
  textos: {
    fontSize: '18px',
    color: '#fee',
  },
  inputs: {
    borderBottomColor: '#ccc',
    borderBottomWidth: '1px',
    width: '90%',
    padding: '10px',
    color: '#fcc',
    fontSize: '16px',
  },
  formula:{
    width:'250px',
    height:'180px',
  },
  amper:{
    width:'30px',
    height:'20px',
  }
});
