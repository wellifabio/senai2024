//import { StatusBar } from 'expo-status-bar';
//import { StyleSheet, Text, View } from 'react-native';
import {NavigationContariner} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ScreenIMC from './components/FormIMC';
import LoginForm from './components/LoginForm';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      
      <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginForm}
        options={{title: 'Bem vindo'}} />

        <Stack.Screen
        name="telaIMC"
        component={ScreenIMC}
        options={{title: 'Calcule seu IMC'}} />

      </Stack.Navigator>

    </NavigationContainer>
  );
  }
    
