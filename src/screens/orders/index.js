import React, { useCallback } from "react";
import { View, FlatList } from "react-native";
import { styles } from "./style";
import { Order } from "../../components";
import { useSelector, useDispatch } from "react-redux";
import { deleteOrder, getOrders } from "../../store/actions";
import { useFocusEffect } from "@react-navigation/native";

const Orders = ({ navigation }) => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders.list);
  console.log(orders)

  useFocusEffect(
    useCallback(() => {
      dispatch(getOrders())
    }, [dispatch])
  )

  const onDelete = (id) => {
    dispatch(deleteOrder(id))
  };

  const renderItem = ({ item }) => <Order item={item} onDelete={onDelete} />;

  return (
    <View style={styles.container}>
      <FlatList
        data={orders}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default Orders;
