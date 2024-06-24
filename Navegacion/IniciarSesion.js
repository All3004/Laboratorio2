import React, { useState } from "react";
import { StatusBar } from "react-native";
import { StyleSheet, Text, TextInput, TouchableOpacity, View, ImageBackground, Image } from 'react-native';
import { useNavigation } from "@react-navigation/native";

export default function IniciarSesion() {
    const navigation = useNavigation();

    return (
        <ImageBackground
            source={require('../Navegacion/fondoFruitApp.jpg')}
            style={styles.backgroundImage}
        >
            <Image
                source={require('../Navegacion/logoFruitApp.png')}
                style={styles.logoImagen}
            />

            <View style={styles.container}>
                <TextInput placeholder='Correo electrónico' style={styles.txtInput} />
                <TextInput placeholder='Contraseña' secureTextEntry={true} style={styles.txtInput} />
                <TouchableOpacity
                    onPress={() => navigation.navigate("MenuPrincipal")} style={styles.btnLogin}
                >
                    <Text style={styles.txtBoton}>Ingresar</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate("RegistrarCuenta")}>
                    <Text style={styles.txtGeneral}>Crear una cuenta nueva <Text style={{ textDecorationLine: 'underline' }}>Registrate!</Text></Text>
                </TouchableOpacity>
                <Text style={styles.txtOlvidasteContra}>¿Olvidaste la contraseña? </Text>
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
    },
    logoImagen: {
        position: 'absolute',
        top: 20,
        right: 20,
        width: 100,
        height: 100,
        resizeMode: 'contain',
    },
    container: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        padding: 20,
        borderRadius: 40,
        margin: 10,
    },
    txtTitulo: {
        fontSize: 50,
        fontWeight: 'bold',
        color: '#34434D',
        textAlign: 'center',
        marginBottom: 20,
    },
    txtSubtitulo: {
        fontSize: 20,
        color: 'gray',
        textAlign: 'center',
        marginBottom: 40,
    },
    txtInput: {
        width: '90%',
        height: 50,
        borderRadius: 30,
        paddingLeft: 30,
        marginTop: 20,
        borderColor: 'gray',
        color: '#000000',
        backgroundColor: '#F5F5F5',
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 4,
        shadowRadius: 10,
        elevation: 10,
        marginBottom: 20,
    },
    btnLogin: {
        backgroundColor: "#871F1F",
        borderRadius: 30,
        width: 219,
        height: 50,
        paddingTop: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    txtBoton: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        marginBottom: 15,
    },
    txtGeneral: {
        fontSize: 10,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        marginTop: 30,
    },
    txtOlvidasteContra: {
        fontSize: 10,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        textDecorationLine: 'underline'
    },
});
