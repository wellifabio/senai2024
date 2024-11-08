import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
    return (
        <View style={style.container}>
                <Text style = {style.title}>Contador de Passos</Text>
                <Button title = "Iniciar contador" onPress = {() => navigation.navigate('Contador')} />
                {/* <Button title = "Iniciar Acelerômetro" onPress = {() => navigation.navigate('Acelerometro')} /> */}
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20
    },
});