import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator, ImageBackground, Image } from 'react-native';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import appfirebase from "../accesoFB";

const db = getFirestore(appfirebase);

export default function ListaDeProducto() {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProductos = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'Product'));
                const productosList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setProductos(productosList);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching productos: ", error);
            }
        };

        fetchProductos();
    }, []);

    if (loading) {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="#871F1F" />
            </View>
        );
    }

    return (
        <ImageBackground
            source={require('../Navegacion/fondoFruitApp.jpg')}
            style={styles.backgroundImage}
        >
            <View style={styles.logoContainer}>
                <Image
                    source={require('../Navegacion/logoFruitApp.png')}
                    style={styles.logoImagen}
                />
            </View>

            <View style={styles.container}>
                <Text style={styles.txtTitulo}>Productos Registrados</Text>
                <FlatList
                    data={productos}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <View style={styles.itemContainer}>
                            <Text style={styles.itemText}>Nombre: {item.nombreProducto}</Text>
                            <Text style={styles.itemText}>Código: {item.codigoProducto}</Text>
                            <Text style={styles.itemText}>Cantidad: {item.cantidad}</Text>
                            <Text style={styles.itemText}>Fecha de Caducidad: {item.fechaCad}</Text>
                        </View>
                    )}
                    contentContainerStyle={{ paddingBottom: 20 }}
                />
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoContainer: {
        position: 'absolute',
        top: 0,
        width: '100%',
        alignItems: 'center',
        marginTop: 40,
    },
    logoImagen: {
        position: 'absolute',
        top: -25,
        right: -5,
        width: 70,
        height: 70,
        resizeMode: 'contain',
    },
    container: {
        flex: 1,
        padding: 24,
    },
    txtTitulo: {
        fontSize: 23,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
        marginBottom: 20,
    },
    itemContainer: {
        backgroundColor: 'orange',
        padding: 20,
        marginVertical: 8,
        borderRadius: 10,
    },
    itemText: {
        fontSize: 18,
        color: 'white', 
    },
});
