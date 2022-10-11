import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./style";

const formDate = (time) => {
    const date = new Date(time)
    return date.toLocaleDateString()
}

const Order = ({ item, onDelete }) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.date}>{formDate(item.date)}</Text>
        <Text style={styles.total}>${item.total}</Text>
      </View>
      <TouchableOpacity onPress={() => onDelete(item.id)}>
        <Ionicons name="ios-trash-outline" size={22} />
      </TouchableOpacity>
    </View>
  );
};

export default Order;
