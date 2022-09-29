import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { colors } from "../../constants/themes";
import { styles } from "./styles";

const Items = ({ item, onSelected }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{ ...styles.contentContainer, backgroundColor: colors.secondary }}
        onPress={() => onSelected(item)}
      >
        <View>
          <Text style={styles.title}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Items;
