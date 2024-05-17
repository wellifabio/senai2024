import React, {useEffects, useState} from 'react';
import {View, Text, FlatList, Image, StyleSheet } from 'react-native';
import { getCharacters } from '../api/marvelApi';

const CharactersList = () => {
    const [characters, setCharacters] = useState([]);

    useEffects(() => {
        const fetchCharacters = async () => {
            const data = await getCharacters();
            setCharacters(data);
        };
        fetchCharacters();

    }, []);

    const renderItem = ({item}) => (
        <View style ={styles.item}>
            <Image
            style={styles.image}
            source={{uri:`${item.thumbnail.patch}.${item.thumbnail.extension}`}} />
            <Text style={styles.name}>{item.name}</Text>
        </View> 
    );
    return (
        <FlatList
        data={characters}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        />
    );
};

const styles = StyleSheet.create({
    item: {
        flex: 1,
        flexDirection: 'row',
        marginBottom: 10,
        alignItens: 'center',
    },
    image: {
        width: 50,
        height: 50,
        marginRight: 10,
    },
})