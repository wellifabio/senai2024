import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList, TouchableOpacity, Image } from 'react-native';
import { db, storage } from './firebaseconfig';
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import Icon from 'react-native-vector-icons/FontAwesome';
import { launchImageLibrary } from 'react-native-image-picker';

export default function App() {
  const [nomePet, setNomePet] = useState('');
  const [tipoPet, setTipoPet] = useState('');
  const [imageUri, setImageUri] = useState(null);
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editingPetId, setEditingPetId] = useState(null);

  const petIcons = ['paw', 'bug', 'heart', 'star', 'leaf', 'fish'];

  const selecionarImagem = () => {
    launchImageLibrary({ mediaType: 'photo' }, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.error('ImagePicker Error: ', response.error);
      } else {
        setImageUri(response.assets[0].uri);
      }
    });
  };

  const uploadImage = async () => {
    if (!imageUri) return null;

    const response = await fetch(imageUri);
    const blob = await response.blob();
    const filename = imageUri.substring(imageUri.lastIndexOf('/') + 1);
    const storageRef = ref(storage, `pets/${filename}`);
    
    await uploadBytes(storageRef, blob);
    return await getDownloadURL(storageRef);
  };

  const adicionarOuAtualizarPet = async () => {
    try {
      setLoading(true);
      const imageUrl = await uploadImage();

      if (editingPetId) {
        const petRef = doc(db, 'pets', editingPetId);
        await updateDoc(petRef, {
          nome: nomePet,
          tipo: tipoPet,
          imageUrl: imageUrl || null
        });
        alert('Pet atualizado com sucesso!');
        setEditingPetId(null);
      } else {
        await addDoc(collection(db, 'pets'), {
          nome: nomePet,
          tipo: tipoPet,
          icon: petIcons[Math.floor(Math.random() * petIcons.length)],
          imageUrl: imageUrl || null
        });
        alert('Pet adicionado com sucesso!');
      }

      setNomePet('');
      setTipoPet('');
      setImageUri(null);
      fetchPets();
    } catch (e) {
      console.error("Erro ao salvar pet: ", e);
    } finally {
      setLoading(false);
    }
  };

  const fetchPets = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'pets'));
      const petsList = querySnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
      }));
      setPets(petsList);
    } catch (e) {
      console.error("Erro ao buscar pets: ", e);
    }
  };

  const editarPet = (pet) => {
    setNomePet(pet.nome);
    setTipoPet(pet.tipo);
    setImageUri(pet.imageUrl);
    setEditingPetId(pet.id);
  };

  const excluirPet = async (petId) => {
    try {
      await deleteDoc(doc(db, 'pets', petId));
      alert('Pet excluído com sucesso!');
      fetchPets();
    } catch (e) {
      console.error("Erro ao excluir pet: ", e);
    }
  };

  useEffect(() => {
    fetchPets();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>PetShop</Text>
      
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
        title="Selecionar Imagem" 
        onPress={selecionarImagem} 
        color="#4682b4"
      />

      {imageUri && (
        <Image source={{ uri: imageUri }} style={styles.imagePreview} />
      )}

      <Button 
        title={loading ? "Salvando..." : editingPetId ? "Atualizar Pet" : "Adicionar Pet"} 
        onPress={adicionarOuAtualizarPet} 
        color="#6b8e23"
      />

      <Text style={styles.sectionTitle}>Lista de Pets</Text>
      <FlatList
        data={pets}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.petItem}>
            {item.imageUrl ? (
              <Image source={{ uri: item.imageUrl }} style={styles.petImage} />
            ) : (
              <Icon name={item.icon} size={50} color="#4682b4" style={styles.petIcon} />
            )}
            <View style={styles.petDetails}>
              <Text style={styles.petName}>{item.nome}</Text>
              <Text style={styles.petType}>{item.tipo}</Text>
            </View>
            <View style={styles.actionButtons}>
              <TouchableOpacity onPress={() => editarPet(item)} style={styles.actionButton}>
                <Icon name="edit" size={25} color="#4682b4" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => excluirPet(item.id)} style={styles.actionButton}>
                <Icon name="trash" size={25} color="#ff6347" />
              </TouchableOpacity>
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
    color: '#4682b4',
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
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#6b8e23',
    color: '#fff',
    padding: 10,
    borderRadius: 5,
  },
  imagePreview: {
    width: '100%',
    height: 200,
    marginBottom: 15,
    borderRadius: 10,
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
  petIcon: {
    marginRight: 15,
  },
  petImage: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginRight: 15,
  },
  petDetails: {
    flex: 1,
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
  actionButtons: {
    flexDirection: 'row',
  },
  actionButton: {
    marginLeft: 10,
  },
});
