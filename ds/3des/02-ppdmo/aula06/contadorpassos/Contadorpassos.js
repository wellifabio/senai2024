import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Pedometer} from 'expo-sensors';
import {Permissions} from 'expo-permissions';

export default function Contadorpassos() {
    const [isPedometerAvailable, setIsPedometerAvailable] = useState('checking');
    const [currentStepCount, setCurrentStepCount] = useState(0);

    useEffect(() => {
        subscribePermition();
        subscribe();
    }, []);
   
    const subscribePermition = async () => {
        try {
            Permissions.askAsync(Permissions.Pedometer).then(result =>{
                console.log(result.status)
            });
        } catch (error) {
            console.log(error);
        }
    }
    const subscribe = () => {
        Pedometer.isAvailableAsync().then(result => {
            setIsPedometerAvailable(String(result));
            return Pedometer.watchStepCount(result => {
                setCurrentStepCount(result.steps);
            });
        });

    };

    return(
        <View style = {style.container}>
            <Text>{isPedometerAvailable}</Text>
            <Text style={style.title}>Contador de Passos</Text>
            <Text style={style.steps}>{currentStepCount}</Text>
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
    steps: {
        fontSize: 48,
        fontWeight: 'bold'
    }
});
