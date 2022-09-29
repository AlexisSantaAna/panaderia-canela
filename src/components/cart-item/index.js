import React from "react";
import { View, Text } from "react-native";
import { styles } from "./style";

const CartItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.title}>{item.quantity}</Text>
    </View>
  );
};

export default CartItem;
