import React from "react";
import { View, Text, FlatList } from "react-native";
import { styles } from "./style";
import { CART } from "../../constants/data";
import { CartItem } from "../../components";

const Cart = ({ navigation }) => {
  const renderItem = ({ item }) => <CartItem item={item} />;

  return (
    <FlatList
      data={CART}
      renderItem={renderItem}
      style={styles.container}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default Cart;
