import React from "react";
import { View, FlatList } from "react-native";
import { styles } from "./style";
import { ORDERS } from "../../constants/data";
import { Order } from "../../components";

const Orders = ({ navigation }) => {
  const onDelete = (id) => {
    console.warn(id);
  };

  const renderItem = ({item}) => (
    <Order item={item} onDelete={onDelete} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={ORDERS}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default Orders;
