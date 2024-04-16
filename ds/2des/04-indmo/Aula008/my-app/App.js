import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Home from './screens/Home';
import Buscar from './screens/Buscar';
import Contato from './screens/Contato';

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="#a52a2a"
        inactiveColor="#3e2465"
        barStyle={{ backgroundColor: '#C1FFC1' }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <Ionicons name="home" color={color} size={26} />
            ),
          }}
        />
       
        <Tab.Screen
          name="Search"
          component={Buscar}
          options={{
            tabBarLabel: 'Pesquisar',
            tabBarIcon: ({ color }) => (
              <Ionicons name="search" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="About"
          component={Contato}
          options={{
            tabBarLabel: 'Contato',
            tabBarIcon: ({ color }) => (
              <Ionicons name="information-circle" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
      
    </NavigationContainer>
  );
}
