import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./style";
import { Ionicons } from "@expo/vector-icons";

const CartItem = ({ item, onDelete }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>{item.title}</Text>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.content}>
          <Text style={styles.text}>Cantidad: {item.quantity}</Text>
          <Text style={styles.text}>Precio: ${item.price}</Text>
        </View>
        <TouchableOpacity onPress={() => onDelete(item.id)}>
          <Ionicons name="ios-trash-outline" size={22} />
        </TouchableOpacity>
      </View>      
    </View>
  );
};

export default CartItem;
