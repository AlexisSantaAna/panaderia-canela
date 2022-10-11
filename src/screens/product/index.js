import React from "react";
import { Item } from "../../components";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../store/actions";
import { View } from "react-native";

const Product = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.selected);

  const addCartItem = () => {
    dispatch(addToCart(product));
  };

  return (
      <Item
        description={product.description}
        price={product.price}
        title={product.title}
        weight={product.weight}
        addCartItem={addCartItem}
      />
  );
};

export default Product;
