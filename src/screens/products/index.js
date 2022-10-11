import React, { useEffect } from "react";
import { FlatList } from "react-native";
import { Items } from "../../components";
import { styles } from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { filteredProducts, selectedProduct } from "../../store/actions";

const Productos = ({ navigation }) => {
  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.category.selected);
  const productsFiltered = useSelector(
    (state) => state.products.filteredProducts
  );

  const onSelected = (item) => {
    dispatch(selectedProduct(item.id));
    navigation.navigate("Product", {
      title: item.title,
    });
  };

  useEffect(() => {
    dispatch(filteredProducts(selectedCategory.id));
  }, []);

  const renderItem = ({ item }) => (
    <Items item={item} onSelected={onSelected} />
  );

  return (
    <FlatList
      data={productsFiltered}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      style={styles.container}
    />
  );
};

export default Productos;
