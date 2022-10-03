import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { styles } from "./style";
import { CART } from "../../constants/data";
import { CartItem } from "../../components";

const Cart = ({ navigation }) => {
  const onDelete = (id) => {
    console.warn(id);
  };

  const renderItem = ({ item }) => <CartItem item={item} onDelete={onDelete} />;

  return (
    <View style={styles.container}>
      <FlatList
        data={CART}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
      <View style={styles.footer}>
        <TouchableOpacity          
          onPress={() => console.warn("Compra confirmada")}
        >
          <Text style={styles.buttonConfirm}>Confirmar</Text>
        </TouchableOpacity>
        <View>
          <Text style={styles.totalText}>Total:</Text>
          <Text style={styles.total}>$100</Text>
        </View>
      </View>
    </View>
  );
};

export default Cart;
