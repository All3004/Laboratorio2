import React, {useState} from "react";
import { StatusBar } from "react-native";
import { StyleSheet, Text, TextInput, TouchableOpacity, View, ImageBackground, Image, Alert } from 'react-native';
import { useNavigation } from "@react-navigation/native";

import appfirebase from "../accesoFB"
import { collection, getFirestore, getDocs, addDoc } from "firebase/firestore";

const db = getFirestore(appfirebase)


export default function RegistrarCuenta() {
    const navigation = useNavigation();

    const inicioEstado = {
        nombreCompleto: '',
        email: '',
        clave: '',
      }

      const [estado, setEstado] = useState(inicioEstado)

      const HandleChangeText = (value, name) => {

        setEstado({ ...estado, [name]: value })

      }

      const RegistrarUsuario = async () => {
        console.log(estado)
        try {
          // se realiza la petición a la BD
          await addDoc(collection(db, 'User'), { ...estado })

          Alert.alert('Alerta', 'El usuario se registró con éxito')

          //Se realiza una redirección a MenuPrincipal
          navigation.navigate('MenuPrincipal');

        } catch {
          console.error(error)
        }
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
            <Text style={styles.txtSubtitulo}>Crear cuenta nueva</Text>
                <TextInput placeholder='Nombre completo' style={styles.txtInput} onChangeText={(value)=> 
                HandleChangeText(value,'nombreCompleto')}
                value={estado.nombreCompleto}>
                </TextInput>

                <TextInput placeholder='Correo electrónico' style={styles.txtInput} onChangeText={(value)=> 
                HandleChangeText(value,'email')}
                value={estado.email}>
                </TextInput>

                <TextInput placeholder='Contraseña' secureTextEntry={true} style={styles.txtInput} onChangeText={(value)=> 
                HandleChangeText(value,'clave')}
                value={estado.clave} />

                <TextInput placeholder='Comprobar contraseña' secureTextEntry={true} style={styles.txtInput}></TextInput>

                <TouchableOpacity
                    onPress={(RegistrarUsuario)}
                    style={styles.btnLogin}
                >
                    <Text style={styles.txtLogin}>Registrarse</Text>
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
    txtSubtitulo: {
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
    btnLogin: {
        backgroundColor: "#871F1F",
        borderRadius: 30,
        width: '100%',
        height: 50,
        marginTop: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    txtLogin: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
    },
});
