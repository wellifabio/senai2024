import React, {useState} from "react";
import { StyleSheet, Text, View, Button, TextInput, FlatList, Image } from "react-native";
import {db} from "./firebaseconfig";
import { collection, addDoc, getDocs } from "firebase/firestore";

export default function App() {
const [nomePet, setNomePet] = useState("");
const [tipoPet, setTipoPet] = useState("");
const [pets, setPets] = useState([]);
const [loading, setLoading] = useState(false);

const adicionarPet = async () => {
  try {
    setLoading(true);
    await addDoc(collection(db,"pets"),{
      nome: nomePet,
      tipo: tipoPet
    });
    alert("Pet adicionado com sucesso!");
    setNomePet('');
    setTipoPet('');
    fetchPets();
  }catch (e) {
    console.error("Erro ao adicionar pet", e);
  }finally {
    setLoading(false);
  }
};

const fetchPets = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "pets"));
    const petslist = querySnapshot.docs.map(doc => doc.data());
    setPets(petslist);
    } catch (e) {
      console.error("Erro ao buscar pets", e);
    }
};

return (
  <View style={styles.container}>
    <Text style={styles.title}>Pets SENAI</Text>

    <Text style={styles.label}>Nome do Pet</Text>
    <TextInput
    style={styles.input}
    placeholder="Digite o nome do pet"
    value={nomePet}
    onChangeText={setNomePet}
    />

    <Text style={styles.label}>Tipo do Pet</Text>
    <TextInput
    style={styles.input}
    placeholder="Digite o tipo do pet"
    value={tipoPet}
    onChangeText={setTipoPet}
    />
    <Button
    title={loading? "Adicionando..." : "Adicionar Pet"}
    onPress={adicionarPet}
    color="#6b8e23"
    />

    <Text style={styles.label}>Lista de Pets</Text>
    <FlatList
    data={pets}
    keyExtractor={(item, index) => index.toString()}
    renderItem={({item}) => (
      <View style={styles.petItem}>
        <Image
        source={{uri: 'https://via.placeholder.com/100'}}
        style={styles.petImage}
        />
      <View>
      <Text style={styles.petName}>{item.nome}</Text>
      <Text style={styles.petType}>{item.tipo}</Text>
      </View>
    </View>
    )}
    style={styles.petList}
    />
    </View>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f8ff',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '4682b4',
    textAlign: 'center',
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
    color: '#333',
  },

  input: {
    width: '100%',
    padding: 10,
    marginBotton: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#fff',
  },

  Button: {
    backgroundColor: '#6b8e23',
    color: '#fff',
    padding: 10,borderRadius: 5,
  },

  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4682b4',
    marginTop: 20,
    marginBottom: 10,
  },
  petList: {
    marginTop: 10,
  },
  petItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  petImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  petName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  petType: {
    fontSize: 16,
    color: '#555',
  },
});


