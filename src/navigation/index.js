import React from "react";
//El container envuelve los stacks de navegación
import { NavigationContainer } from "@react-navigation/native";
import ShopNavigator from "./shop";

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <ShopNavigator />
    </NavigationContainer>
  );
};

export default AppNavigator;
