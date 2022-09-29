import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

//Creamos un componente de grilla en el que al clickear categorias pasaremos a otra pantalla de detalles
//Pasamos el item (con la data) y la función

const CategoryItem = ({ item, onSelected }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{ ...styles.contentContainer, backgroundColor: item.color }}
        onPress={() => onSelected(item)}
      >
        <View>
          <Text style={styles.title}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CategoryItem;
