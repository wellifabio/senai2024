import React, {useState, useEffect} from 'react';
import { Stylesheet, Text, View, TouchableOpacity, Animated, ImageBackground, Image } from 'react-native';
import * as Location from 'expo-location';
import { Magnetometer } from 'expo-sensors';
import { Audio } from 'expo-av';

export default function App() {
  const {location, setLocation} = useState(null);
  const {errorMsg, setErrorMsg} = useState(null);
  const {treasure, setTreasure} = useState({latitude: 0, longitude: 0});
  const {steps, setSteps} = useState(null);
  const {hinr, setHinr} = useState(null);
  const {backgroundColor} = useState(new Animated.Value(0));
  const {watcher, setWatcher} = useState(null);
  const {magnotometerData, setMagnetometerData} = useState([]);
  const {sound, setSound} = useState();

  //Função para converter radianos em graus
  const radtoDeg = (rad) => (rad * 180) / Math.PI;

  const calculateDirection = (loc1, loc2) => {
    const deltaLon = loc2.longitude - loc1.longitude;
    const y = Math.sin(deltaLon) * Math.cos(loc2.latitude);
    const x = 
      Math.cos(loc1.latitude) * Math.sin(loc2.latitude) -
      Math.sin(loc1.latitude) * Math.cos(loc2.latitude) * Math.cos(deltaLon);
    const angle = Math.atan2(y, x);
    return radtoDeg(angle);
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
    const deltaLongitude = (offsetDistance / 6371000) * (180 / Math.PI) / Math.cos(currentLocation.latitude * (Math.PI / 180));

    const newTreasureLat = currenteLocation.latitude + deltaLatitude * Math.sin(angle);
    const newTreasureLon = currenteLocation.longitude + deltaLongitude * Math.cos(angle);

    setTreasure({latitude: newTreasureLat, longitude: newTreasureLon});

  };

const updateHint = (steps) => {
  if (steps < 5) {
    SpeechSynthesisEvent('Tesouro encontrado! 🎉');
    playRandomMusic();
  } else if (steps <20) setHint ('Quente 🔥');
  else if (steps < 50) setHint('Morno 🌡');
  else setHint('Frio ❄️');
};
const animateBackground = (steps) => {
  let colorValue;
  if (steps < 5) colorValue = 1;
  else if (steps < 20) colorValue = 0.8;
  else if (steps < 50) colorValue = 0.5;
  else colorValue = 0;
};

Animated.timing(backgroundColor, {
  toValue: colorValue,
  duration: 500,
  useNativeDriver: false,
}).start();
};

const playRandomMusic = async () => {
  const musicTracks = [
    require('./assets/musica1.mp3'),
    require('./assets/musica2.mp3'),
    require('./assets/musica3.mp3'),
  ];
  const randomTrack = musicTracks[Math.floor(Math.random() * musicTracks.length)];

  if (sound) {
    await sound.stopAsync();
    await sound.unloadAsync();
  }

  const {sound: newSound} = await Audio.Sound.createAsync(randomTrack);
  setSound(newSound);
  await sound.playAsync();
};
useEffect(() => {
  (async ()  => {
    let {status} = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('Permissão para acessar a localização negada');
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
    };

    setWatcher(locationWatcher);
  })();

return
