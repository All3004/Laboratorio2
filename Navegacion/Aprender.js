import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, ActivityIndicator, FlatList, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; // Para el icono del corazón

export default function Aprender() {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [search, setSearch] = useState('');
    const [favorites, setFavorites] = useState([]);
    const [showFavorites, setShowFavorites] = useState(false);

    const getFruits = async () => {
        try {
            const response = await fetch('https://www.fruityvice.com/api/fruit/all');
            const json = await response.json();
            const sortedData = json.sort((a, b) => a.id - b.id); // Ordenar en orden ascendente por ID
            setData(sortedData);
            setFilteredData(sortedData);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getFruits();
    }, []);

    const handleSearch = (text) => {
        setSearch(text);
        const newData = data.filter(item => {
            const itemData = item.name.toUpperCase();
            const textData = text.toUpperCase();
            return itemData.indexOf(textData) > -1;
        });
        setFilteredData(newData);
    };

    const toggleFavorite = (fruit) => {
        setFavorites(prevFavorites => {
            if (prevFavorites.includes(fruit.name)) {
                return prevFavorites.filter(item => item !== fruit.name);
            } else {
                return [...prevFavorites, fruit.name];
            }
        });
    };

    const renderItem = ({ item }) => (
        <View style={styles.itemContainer}>
            <Text style={styles.itemText}>Nombre: {item.name}</Text>
            <Text style={styles.itemText}>ID: {item.id}</Text>
            <Text style={styles.itemText}>Familia: {item.family}</Text>
            <Text style={styles.itemText}>Orden: {item.order}</Text>
            <Text style={styles.itemText}>Genus: {item.genus}</Text>
            <Text style={styles.itemText}>Nutrition: {JSON.stringify(item.nutritions)}</Text>
            <TouchableOpacity
                style={styles.favoriteButton}
                onPress={() => toggleFavorite(item)}
            >
                <AntDesign 
                    name={favorites.includes(item.name) ? 'heart' : 'hearto'} 
                    size={24} 
                    color={favorites.includes(item.name) ? 'red' : 'black'} 
                />
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={{ flex: 1, padding: 24 }}>
            <TextInput 
                style={styles.searchBar}
                placeholder="Buscar frutas"
                value={search}
                onChangeText={text => handleSearch(text)}
            />
            <TouchableOpacity 
                style={styles.showFavoritesButton} 
                onPress={() => setShowFavorites(!showFavorites)}
            >
                <Text style={styles.showFavoritesText}>
                    {showFavorites ? 'Mostrar Todas las Frutas' : 'Mostrar Favoritos'}
                </Text>
            </TouchableOpacity>
            {isLoading ? (
                <ActivityIndicator />
            ) : (
                <FlatList
                    data={showFavorites ? data.filter(item => favorites.includes(item.name)) : filteredData}
                    keyExtractor={(item) => item.name}
                    renderItem={renderItem}
                />
            )}
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    searchBar: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        paddingLeft: 10,
        marginBottom: 20,
    },
    itemContainer: {
        backgroundColor: '#e0e0e0',
        padding: 15,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 8,
        borderColor: '#ccc',
        borderWidth: 1,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 3,
    },
    itemText: {
        fontSize: 16,
        marginBottom: 5,
    },
    favoriteButton: {
        alignItems: 'center',
        marginTop: 10,
    },
    showFavoritesButton: {
        backgroundColor: '#007BFF',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 20,
    },
    showFavoritesText: {
        color: '#fff',
        fontSize: 16,
    },
});
