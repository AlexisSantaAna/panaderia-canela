import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Orders } from "../screens";
import { isAndroid } from "../constants/utils";
import { colors } from "../constants/themes";
import { View, Image } from "react-native";

const Stack = createNativeStackNavigator();

const OrdersNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Orders"
      screenOptions={{
        headerStyle: {
          backgroundColor: isAndroid ? colors.primary : colors.secondary,
        },
        headerTitleAlign: "center",
        headerTintColor: colors.white,
        headerTitleStyle: {
          fontFamily: "Lato-Bold",
        },
        headerRight: () => (
          <View>
            <Image
              source={require("../../assets/img/orders.png")}
              style={{ width: 75, height: 50, resizeMode:"contain" }}
            />
          </View>
        ),
      }}
    >
      <Stack.Screen name="Orders" component={Orders} />
    </Stack.Navigator>
  );
};

export default OrdersNavigator