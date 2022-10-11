import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { styles } from "./style";
import { useSelector, useDispatch } from "react-redux";
import { CartItem } from "../../components";
import { removeFromCart, confirmCart } from "../../store/actions";

const Cart = ({ navigation }) => {
  const items = useSelector((state) => state.cart.items);
  const total = useSelector((state) => state.cart.total);
  const dispatch = useDispatch();

  const onDelete = (id) => {
    dispatch(removeFromCart(id));
  };

  const onConfirm = () => {
    dispatch(confirmCart(items, total))
  }

  const renderItem = ({ item }) => <CartItem item={item} onDelete={onDelete} />;

  return (
    <View style={styles.container}>
      <View style={styles.containerList}>
        <FlatList
          data={items}
          renderItem={renderItem}
          style={styles.containerList}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
      <View style={styles.footer}>
        <TouchableOpacity onPress={onConfirm} disabled={items.length === 0}>
          <Text style={items.length === 0 ? styles.buttonConfirmDisabled : styles.buttonConfirm}>Confirmar</Text>
        </TouchableOpacity>
        <View>
          <Text style={styles.totalText}>Total:</Text>
          <Text style={styles.total}>${total}</Text>
        </View>
      </View>
    </View>
  );
};

export default Cart;
