import React, {useEffect, useState} from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Magnetometer} from 'expo-sensors';
import Svg, {Circle, Line, Text} from 'react-native-svg';

const Stack = createNativeStackNavigator();

function CompassScreen() {
  const [magnetometerData, setMagnetometerData] = useState({});
  const [heading, setHeading] = useState(0);

  useEffect(() => {
    const subscription = Magnetometer.addListener(data => {
      setMagnetometerData(data);
     const x = data.x;
     const y = data.y;
     const angle = Math.atan2(y, x) * 180 / Math.PI;
     setHeading(angle>=0 ? angle : angle + 360);
    });
    return () => {
      subscription.remove();
    };
}, []);

return(
  <View style={styles.container}>
    <Svg height="300" width="300">
      <Circle cx="150" cy="150" r="140" stroke="black" strokeWidth="2" fill="lightblue" />
    <Line
    x1="150"
    y1="150"
    x2="150"
    y2="30"
    stroke="red"
    strokeWidth="4"
    transform={`rotate(${heading}, 150, 150)`}
    />
    <Text x="50%" y="10%" textAnchor='middle' fontSize="20" fill="black">N</Text>
    <Text x="90%" y="50%" textAnchor='middle' fontSize="20" fill="black">E</Text>
    <Text x="50%" y="90%" textAnchor='middle' fontSize="20" fill="black">S</Text>
    <Text x="10%" y="50%" textAnchor='middle' fontSize="20" fill="black">W</Text>
    </Svg>
    <Text style={styles.heading}> Direção: {heading.toFixed(2)}º</Text>
    </View>
);
}
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Bussola">
        <Stack.Screen name="Bussola" component={CompassScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 20,
  },
});