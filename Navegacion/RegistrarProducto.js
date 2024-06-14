import React from "react";
import { StatusBar } from "react-native";
import { StyleSheet, Text, TextInput, TouchableOpacity, View, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from "@react-navigation/native";

export default function RegistrarProducto() {
    const navigation = useNavigation();

    return (
        <ImageBackground
            source={require('../Navegacion/img_fondo.jpg')}
            style={styles.backgroundImage}
        >
            <View style={styles.container}>
                <Text style={styles.txtTitulo}>Productos</Text>
                <Text style={styles.txtSubtitulo}>Registrar producto</Text>
                <TextInput placeholder='Nombre producto' style={styles.txtInput}></TextInput>
                <TextInput placeholder='Código producto' style={styles.txtInput}></TextInput>
                <TextInput placeholder='Cantidad' style={styles.txtInput}></TextInput>
                <TextInput placeholder='Fecha de caducidad' style={styles.txtInput}></TextInput>

                <TouchableOpacity
                    onPress={() => navigation.navigate("Login")}
                >
                    <LinearGradient
                        colors={['#00C1BB', '#005B58']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        style={styles.btnLogin}
                    >
                        <Text style={styles.txtLogin}>Guardar</Text>
                    </LinearGradient>
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
        borderRadius: 30,
        width: 219,
        height: 53,
        marginTop: 35,
        paddingTop: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    txtLogin: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        marginBottom: 15,
    },
});
