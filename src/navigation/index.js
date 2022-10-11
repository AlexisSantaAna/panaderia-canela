import React, { useState } from "react";
//El container envuelve los stacks de navegación
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./auth";
import Tabs from "./tabs";

const AppNavigator = () => {
  const [userId, setUserId] = useState(null);

  return (
    <NavigationContainer>
      {userId ? <Tabs /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default AppNavigator;
