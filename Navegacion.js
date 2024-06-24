import React from "react";
import 'react-native-gesture-handler'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { createStackNavigator } from "@react-navigation/stack";
import RegistrarCuenta from "./Navegacion/RegistrarCuenta";
import RegistrarProducto from "./Navegacion/RegistrarProducto";
import IniciarSesion from "./Navegacion/IniciarSesion";
import MenuPrincipal from "./Navegacion/MenuPrincipal"
import Aprender from "./Navegacion/Aprender"
import ListaDeProducto from "./Navegacion/ListaProductos"


const Stack = createStackNavigator();

function Stacks (){
return (
    <Stack.Navigator initialRouteName="IniciarSesion">

    <Stack.Screen name="IniciarSesion" component={IniciarSesion}/>

    <Stack.Screen name="RegistrarCuenta" component={RegistrarCuenta}/>

    <Stack.Screen name="RegistrarProducto" component={RegistrarProducto}/>

    <Stack.Screen name="ListaDeProducto" component={ListaDeProducto}/>

    <Stack.Screen name="MenuPrincipal" component={MenuPrincipal}/>

    <Stack.Screen name="Aprender" component={Aprender}/>    

    </Stack.Navigator> 
)}


export default function Navegacion() {
    return( 

        <NavigationContainer>
            <Stacks/>
        </NavigationContainer>

      );
}