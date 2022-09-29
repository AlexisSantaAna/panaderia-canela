import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";

const Item = ({ description, price, title, weight }) => {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.text}>{description}</Text>
        <Text style={styles.text}>Precio: ${price}</Text>
        <Text style={styles.text}>Peso: {weight}</Text>
      </View>
    </View>
  );
};

export default Item;
