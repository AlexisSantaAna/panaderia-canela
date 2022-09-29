import React from "react";
import { Image, View } from "react-native";
//Crea mi árbol de navegación que puede contener X pantallas de navegación
//En React Native son pantallas o vistas en lugar de rutas navegables
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Categories, Products, Product } from "../screens";
import { colors } from "../constants/themes";
import { isAndroid } from "../constants/utils";

//inicializo el stack
const Stack = createNativeStackNavigator();

//creo un componente con mi stack de navegación
const ShopNavigator = () => {

  return (
    <Stack.Navigator
      initialRouteName="Categories"
      screenOptions={{
        headerStyle: {
          backgroundColor: isAndroid ? colors.primary : colors.secondary
        },
        headerTitleAlign: "center",
        headerTintColor: colors.white,
        headerTitleStyle: {
          fontFamily: "Lato-Bold",
        },
        headerRight: () => (
          <View>
            <Image source={require("../../assets/img/pan.png")} style={{width: 75, height: 50, resizeMode: "contain"}} />
          </View>
        )
      }}
    >
      <Stack.Screen name="Categories" component={Categories} options={{title: "Panadería Canela"}}/>
      <Stack.Screen name="Products" component={Products} options={({route}) => ({title: route.params.title})}/>
      <Stack.Screen name="Product" component={Product} options={({route}) => ({title: route.params.title})}/>
    </Stack.Navigator>
  );
};

export default ShopNavigator;
