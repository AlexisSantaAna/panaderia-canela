import React from "react";
import { View, Text, Button } from "react-native";
import { styles } from "./styles";

const Productos = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Productos</Text>
      <Button title="Ver detalles" onPress={() => navigation.navigate("Product")} />
    </View>
  );
};

export default Productos;
