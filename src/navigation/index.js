import React from "react";
//El container envuelve los stacks de navegación
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./tabs";

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tabs/>
    </NavigationContainer>
  );
};

export default AppNavigator;
