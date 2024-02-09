import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <p></p>
      <p></p>
      <Text>Alô mundo!</Text>
      <p></p>
      <Image
        style={styles.logo}
        source={{
          uri: 'https://media1.tenor.com/m/NR0zlms_3XcAAAAd/computer-old-man.gif',
        }}
      />
      <StatusBar style="auto" />
      
    </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tinyLogo: {
    width: 100,
    height: 100,
  },
  logo: {
    width: 166,
    height: 158,
  },
 
});