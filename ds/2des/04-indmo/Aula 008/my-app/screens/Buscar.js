import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Buscar = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pesquisa de conteúdo aqui!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 20,
  },
});

export default Buscar;
