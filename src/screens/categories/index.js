import React from "react";
import { FlatList } from "react-native";
import { CategoryItem } from "../../components";
import { styles } from "./styles";
import { categories } from "../../constants/data";

//Todas las vistas que este dentro del stack reciben el navigation, que contiene todos los métodos disponibles del stack de navegación
//ej. el método navigate que nos dirige a las vistas disponibles
const Categories = ({ navigation }) => {
  const onSelected = (item) => {
    navigation.navigate("Products", { id: item.id, title: item.title });
  };

  const renderItem = ({ item }) => (
    <CategoryItem item={item} onSelected={onSelected} />
  );
  return (
    <FlatList
      data={categories}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      style={styles.containerList}
    />
  );
};

export default Categories;
