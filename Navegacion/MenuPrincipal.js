import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View, ImageBackground, Image } from 'react-native';
import { useNavigation } from "@react-navigation/native";

export default function Principal() {
    const navigation = useNavigation();

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
                <Text style={styles.txtTitulo}>Bienvenidos a AppFruit</Text>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => navigation.navigate("RegistrarProducto")}
                >
                    <Text style={styles.txtNormal}>Registrar productos</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => navigation.navigate("ListaDeProducto")}
                >
                    <Text style={styles.txtNormal}>Lista productos</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => navigation.navigate("Aprender")}
                >
                    <Text style={styles.txtNormal}>Aprender+</Text>
                </TouchableOpacity>
                <StatusBar style="auto" />
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
        top: 50,
        right: 20,
    },
    logoImagen: {
        position: 'absolute',
        top: -20,
        right: -20,
        width: 100,
        height: 100,
        resizeMode: 'contain',
    },
    container: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        padding: 20,
        borderRadius: 10,
        margin: 10,
    },
    txtTitulo: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        marginBottom: 20,
    },
    txtNormal: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center',
    },
    btn: {
        backgroundColor: 'white',
        borderRadius: 30,
        paddingVertical: 15,
        paddingHorizontal: 25,
        marginBottom: 20,
        alignItems: 'center',
        width: '80%',
    },
});
