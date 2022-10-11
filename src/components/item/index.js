import React from "react";
import { Text, View, Button } from "react-native";
import { colors } from "../../constants/themes";
import { styles } from "./styles";

const Item = ({ description, price, title, weight, addCartItem }) => {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.text}>{description}</Text>
        <Text style={styles.text}>Precio: ${price}</Text>
        <Text style={styles.text}>Peso: {weight}</Text>
        <View style={styles.button}>
          <Button
            title="Add to cart"
            onPress={addCartItem}
            color={colors.primary}
          />
        </View>
      </View>
    </View>
  );
};

export default Item;
