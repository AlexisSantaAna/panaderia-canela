import React from "react";
import { Item } from "../../components";

const Product = ({ route }) => {
  const { description, price, title, weight } = route.params;
  return (
      <Item
        description={description}
        price={price}
        title={title}
        weight={weight}
      />
  );
};

export default Product;
