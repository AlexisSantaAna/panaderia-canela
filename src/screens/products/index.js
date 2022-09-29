import React from "react";
import { View, FlatList, Text } from "react-native";
import { Items } from "../../components";
import { styles } from "./styles";
import { products } from "../../constants/data";

const Productos = ({ navigation, route }) => {
  const data = products.filter(
    (product) => route.params.id === product.categoryId
  );

  const onSelected = (item) => {
    navigation.navigate("Product", {
      title: item.title,
      description: item.description,
      price: item.price,
      weight: item.weight,
    });
  };

  const renderItem = ({ item }) => (
    <Items item={item} onSelected={onSelected} />
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      style={styles.container}
    />
  );
};

export default Productos;
