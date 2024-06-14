import React from "react";
import 'react-native-gesture-handler'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { createStackNavigator } from "@react-navigation/stack";
import RegistrarCuenta from "./Navegacion/RegistrarCuenta";
import RegistrarProducto from "./Navegacion/RegistrarProducto";
import Login from "./Navegacion/Login";


const Stack = createStackNavigator();

function Stacks (){
return (
    <Stack.Navigator initialRouteName="Login">

    <Stack.Screen name="Login" component={Login}/>

    <Stack.Screen name="RegistrarCuenta" component={RegistrarCuenta}/>

    <Stack.Screen name="RegistrarProducto" component={RegistrarProducto}/>

    </Stack.Navigator> 
)}

const TabNav = createBottomTabNavigator();

function Tabs() {
    return (
        <TabNav.Navigator
        
            >

            <TabNav.Screen 
            name="Home" 
            component={Stacks}
            options={{
                tabBarLabel: 'Home', 
                tabBarIcon:  ({color, size}) => (
                    <MaterialCommunityIcons name="home" color={color} size={size}/> 
                ),
                tabBarBadge: 3, 
                headerShown: false, 
            }}/>

            {/*<TabNav.Screen name="Home2" component={Home2}/> */}
            
        </TabNav.Navigator>
    )
}

export default function Navegacion() {
    return( 

        <NavigationContainer>
            <Tabs/>
        </NavigationContainer>

      );
}