import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Animated, ImageBackground, Image } from 'react-native';
import * as Location from 'expo-location';
import { Magnetometer } from 'expo-sensors';
import { Audio } from 'expo-av';

export default function App() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [treasure, setTreasure] = useState({ latitude: 0, longitude: 0 });
  const [steps, setSteps] = useState(null);
  const [hint, setHint] = useState('');
  const [backgroundColor] = useState(new Animated.Value(0));
  const [watcher, setWatcher] = useState(null);
  const [magnetometerData, setMagnetometerData] = useState({});
  const [sound, setSound] = useState();

  // Função para converter radianos em graus
  const radToDeg = (rad) => (rad * 180) / Math.PI;

  // Função para calcular o ângulo de direção em relação ao tesouro
  const calculateDirection = (loc1, loc2) => {
    const deltaLon = loc2.longitude - loc1.longitude;
    const y = Math.sin(deltaLon) * Math.cos(loc2.latitude);
    const x =
      Math.cos(loc1.latitude) * Math.sin(loc2.latitude) -
      Math.sin(loc1.latitude) * Math.cos(loc2.latitude) * Math.cos(deltaLon);
    const angle = Math.atan2(y, x);
    return radToDeg(angle);
  };

  const calculateDistance = (loc1, loc2) => {
    const R = 6371e3;
    const lat1 = loc1.latitude * (Math.PI / 180);
    const lat2 = loc2.latitude * (Math.PI / 180);
    const deltaLat = (loc2.latitude - loc1.latitude) * (Math.PI / 180);
    const deltaLon = (loc2.longitude - loc1.longitude) * (Math.PI / 180);

    const a =
      Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) +
      Math.cos(lat1) * Math.cos(lat2) * Math.sin(deltaLon / 2) * Math.sin(deltaLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const distanceInMeters = R * c;
    const steps = distanceInMeters / 0.8;
    return steps;
  };

  const generateRandomTreasure = (currentLocation) => {
    const radius = 16;
    const angle = Math.random() * 2 * Math.PI;
    const offsetDistance = Math.random() * radius;

    const deltaLatitude = (offsetDistance / 6371000) * (180 / Math.PI);
    const deltaLongitude = (offsetDistance / 6371000) * (180 / Math.PI) / Math.cos(currentLocation.latitude * Math.PI / 180);

    const newTreasureLat = currentLocation.latitude + deltaLatitude * Math.sin(angle);
    const newTreasureLon = currentLocation.longitude + deltaLongitude * Math.cos(angle);

    setTreasure({ latitude: newTreasureLat, longitude: newTreasureLon });
  };

  const updateHint = (steps) => {
    if (steps < 5) {
      setHint('Tesouro encontrado! 🎉');
      playRandomMusic(); // Toca música aleatória ao encontrar o tesouro
    } else if (steps < 20) setHint('Quente 🔥');
    else if (steps < 50) setHint('Morno 🌡️');
    else setHint('Frio ❄️');
  };

  const animateBackground = (steps) => {
    let colorValue;
    if (steps < 5) colorValue = 1;
    else if (steps < 20) colorValue = 0.8;
    else if (steps < 50) colorValue = 0.5;
    else colorValue = 0;

    Animated.timing(backgroundColor, {
      toValue: colorValue,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  const playRandomMusic = async () => {
    // Array de músicas
    const musicTracks = [
      require('./assets/musica1.mp3'),
      require('./assets/musica2.mp3'),
      require('./assets/musica3.mp3'), // Adicione suas músicas aqui
    ];

    const randomTrack = musicTracks[Math.floor(Math.random() * musicTracks.length)];

    // Parar qualquer som atual
    if (sound) {
      await sound.stopAsync();
      await sound.unloadAsync();
    }

    // Carregar e tocar a música aleatória
    const { sound: newSound } = await Audio.Sound.createAsync(randomTrack);
    setSound(newSound);
    await newSound.playAsync();
  };

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permissão para acessar localização foi negada.');
        return;
      }

      let location = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.BestForNavigation,
      });
      setLocation(location.coords);
      generateRandomTreasure(location.coords);

      const locationWatcher = await Location.watchPositionAsync(
        {
          accuracy: Location.Accuracy.BestForNavigation,
          timeInterval: 1000,
          distanceInterval: 1,
        },
        (newLocation) => {
          setLocation(newLocation.coords);
        }
      );

      setWatcher(locationWatcher);
    })();

    return () => {
      if (watcher) {
        watcher.remove();
      }
    };
  }, []);

  useEffect(() => {
    const subscribeMagnetometer = Magnetometer.addListener((data) => {
      setMagnetometerData(data);
    });

    return () => {
      subscribeMagnetometer && subscribeMagnetometer.remove();
    };
  }, []);

  useEffect(() => {
    if (location && treasure.latitude !== 0 && treasure.longitude !== 0) {
      const steps = calculateDistance(location, treasure);
      setSteps(steps);
      updateHint(steps);
      animateBackground(steps);
    }
  }, [location, treasure]);

  const restartGame = async () => {
    let newLocation = await Location.getCurrentPositionAsync({
      accuracy: Location.Accuracy.BestForNavigation,
    });
    setLocation(newLocation.coords);
    generateRandomTreasure(newLocation.coords);
    setHint('');
    setSteps(null);
    backgroundColor.setValue(0);
  };

  // Cálculo da direção em graus
  const getAngle = () => {
    const { x, y, z } = magnetometerData;
    let angle = Math.atan2(y, x) * (180 / Math.PI);
    angle = angle >= 0 ? angle : angle + 360; // Convert to 0-360 degrees
    return angle;
  };

  // Cálculo da rotação da seta (subtraindo a orientação do dispositivo do ângulo do tesouro)
  const calculateArrowRotation = () => {
    if (!location || !treasure) return 0;
    const deviceAngle = getAngle();
    const treasureDirection = calculateDirection(location, treasure);
    return treasureDirection - deviceAngle;
  };

  const backgroundColorInterpolate = backgroundColor.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ['#3498db', '#f39c12', '#2ecc71'],
  });

  let text = 'Calculando...';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = `Distância para o tesouro: ${steps ? steps.toFixed(0) : '---'} passos`;
  }

  return (
    <ImageBackground
      source={require('./assets/mapa_tesouro.png')}
      style={styles.container}
      resizeMode="cover"
    >
      {/* Animated Background */}
      <Animated.View style={[styles.animatedBackground, { backgroundColor: backgroundColorInterpolate, opacity: 0.4 }]} />

      {/* Conteúdo acima da animação de fundo */}
      <View style={styles.content}>
        <Text style={styles.text}>{text}</Text>
        <Text style={styles.hint}>{hint}</Text>

        {/* Seta de direção */}
        <Animated.Image
          source={require('./assets/seta.png')} // Adicione uma imagem de seta em sua pasta de assets
          style={[
            styles.arrow,
            {
              transform: [{ rotate: `${calculateArrowRotation()}deg` }],
            },
          ]}
        />

        <TouchableOpacity style={styles.restartButton} onPress={restartGame}>
          <Text style={styles.buttonText}>Reiniciar Jogo</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  animatedBackground: {
    ...StyleSheet.absoluteFillObject,
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
    color: '#fff',
  },
  hint: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
  },
  restartButton: {
    marginTop: 20,
    backgroundColor: '#c0392b',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  arrow: {
    width: 100,
    height: 100,
    marginTop: 20,
  },
});
