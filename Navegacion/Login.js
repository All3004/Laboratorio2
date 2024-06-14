import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View, ImageBackground } from 'react-native';
import { useNavigation } from "@react-navigation/native";

export default function Login() {
    const navigation = useNavigation();

    return (
        <ImageBackground
            source={require('../Navegacion/img_fondo.jpg')}
            style={styles.backgroundImage}
        >
            <View style={styles.container}>
                <Text style={styles.txtTitulo}>Welcome</Text>
                <Text style={styles.txtSubtitulo}>Bienvenidos a la aplicación App Fruit</Text>

                <TouchableOpacity
                    onPress={() => navigation.navigate("RegistrarCuenta")}
                >
                    <Text style={styles.txtPass}>Registrar Cuenta</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    onPress={() => navigation.navigate("RegistrarProducto")}
                >
                    <Text style={styles.txtRegistrarse}>Registrar Producto</Text>
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
    container: {
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        padding: 20,
        borderRadius: 10,
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
    txtPass: {
        fontSize: 15,
        color: '#00C1BB',
        textAlign: 'center',
        marginBottom: 20,
    },
    txtRegistrarse: {
        fontSize: 15,
        color: '#00C1BB',
        textAlign: 'center',
        marginBottom: 20,
        fontWeight: 'bold',
    },
});
