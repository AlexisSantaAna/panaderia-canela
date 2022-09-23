import React from "react";
//Crea mi árbol de navegación que puede contener X pantallas de navegación
//En React Native son pantallas o vistas en lugar de rutas navegables
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Categories, Products, Product } from "../screens";

//inicializo el stack
const Stack = createNativeStackNavigator();

//creo un componente con mi stack de navegación
const ShopNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Categories">
      <Stack.Screen name="Categories" component={Categories} />
      <Stack.Screen name="Products" component={Products} />
      <Stack.Screen name="Product" component={Product} />
    </Stack.Navigator>
  );
};

export default ShopNavigator;
