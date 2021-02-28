import React, { FC } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";

const App = createStackNavigator();
const { Navigator, Screen } = App;

export const AuthRoutes: FC = () => (
  <Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: {
        backgroundColor: "#312e38",
      },
    }}
  >
    <Screen name="SignIn" component={SignIn} />
    <Screen name="SignUp" component={SignUp} />
  </Navigator>
);
