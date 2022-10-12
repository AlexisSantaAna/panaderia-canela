import React from "react";
//El container envuelve los stacks de navegación
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./auth";
import Tabs from "./tabs";
import { useSelector } from "react-redux";

const AppNavigator = () => {
  const userId = useSelector(state => state.auth.userId)

  return (
    <NavigationContainer>
      {userId ? <Tabs /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default AppNavigator;
