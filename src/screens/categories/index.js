import React from "react";
import { View, Text, Button } from "react-native";
import { styles } from "./styles";

//Todas las vistas que este dentro del stack reciben el navigation, que contiene todos los métodos disponibles del stack de navegación
//ej. el método navigate que nos dirige a las vistas disponibles
const Categories = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categorías</Text>
      <Button title="Ver productos" onPress={() => navigation.navigate("Products")}/>
    </View>
  );
};

export default Categories;
