import React, {useState} from "react";
import { StatusBar } from "react-native";
import { StyleSheet, Text, TextInput, TouchableOpacity, View, ImageBackground, Image, Alert } from 'react-native';
import { useNavigation } from "@react-navigation/native";

import appfirebase from "../accesoFB"
import { collection, getFirestore, getDocs, addDoc } from "firebase/firestore";

const db = getFirestore(appfirebase)

export default function RegistrarProducto() {
    const navigation = useNavigation();

    const inicioEstado = {
        nombreProducto: '',
        codProducto: '',
        cantidadProducto: '',
        fechaCaducidad: '',
    };

    const [estado, setEstado] = useState(inicioEstado);

    const HandleChangeText = (value, name) => {
        setEstado({ ...estado, [name]: value });
    };

    const GuardarProducto = async () => {
        console.log(estado);
        try {
            // se realiza la petición a la BD
            await addDoc(collection(db, 'Product'), { ...estado });

            Alert.alert('Alerta', 'El producto se registró con éxito');

            //Se realiza una redirección a MenuPrincipal
            navigation.navigate('MenuPrincipal');
        } catch (error) {
            console.error(error);
        }
    };

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
                <Text style={styles.txtTitulo}>Productos</Text>
                <TextInput
                    placeholder='Nombre del producto'
                    style={styles.txtInput}
                    onChangeText={(value) => HandleChangeText(value, 'nombreProducto')}
                    value={estado.nombreProducto}
                />
                <TextInput
                    placeholder='Código del producto'
                    style={styles.txtInput}
                    onChangeText={(value) => HandleChangeText(value, 'codigoProducto')}
                    value={estado.codigoProducto}
                />
                <TextInput
                    placeholder='Cantidad'
                    style={styles.txtInput}
                    onChangeText={(value) => HandleChangeText(value, 'cantidadProducto')}
                    value={estado.cantidadProducto}
                />
                <TextInput
                    placeholder='Fecha de caducidad'
                    style={styles.txtInput}
                    onChangeText={(value) => HandleChangeText(value, 'fechaCaducidad')}
                    value={estado.fechaCaducidad}
                />

                <TouchableOpacity onPress={GuardarProducto}
                style={styles.btnGuardar}>
                   
                        <Text style={styles.txtGuardar}>Guardar</Text>
               
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
        top: 0,
        width: '100%',
        alignItems: 'center',
        marginTop: 40,
    },
    logoImagen: {
        position: 'absolute',
        top:-10,
        right: 20,
        width: 100,
        height: 100,
        resizeMode: 'contain',
    },
    container: {
        width: '90%',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        borderRadius: 20,
        marginTop: 100, 
    },
    txtTitulo: {
        fontSize: 20,
        color: 'black',
        textAlign: 'center',
        marginBottom: 20,
        fontWeight: 'bold',
    },
    txtInput: {
        width: '100%',
        height: 50,
        borderRadius: 10,
        paddingLeft: 15,
        marginTop: 10,
        borderColor: 'gray',
        color: '#000000',
        backgroundColor: '#F5F5F5',
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 4,
        shadowRadius: 10,
        elevation: 10,
        marginBottom: 10,
    },
    btnGuardar: {
        backgroundColor: "#871F1F",
        borderRadius: 30,
        width: '100%',
        height: 50,
        marginTop: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    txtGuardar: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
    },
});