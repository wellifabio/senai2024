import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import Contadorpassos from './Contadorpassos';
// import Acelerometro from './AccelerometerContador';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Contador" component={Contadorpassos} />
        {/* <Stack.Screen name="Acelerometro" component={Acelerometro} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}