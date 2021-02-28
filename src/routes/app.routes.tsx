import React, { FC } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Dashboard } from "../pages/Dashboard";
import { AppointmentCreated } from "../pages/AppointmentCreated";
import { CreateAppointment } from "../pages/CreateAppointment";
import { Profile } from "../pages/Profile";

const App = createStackNavigator<MainStackParamList>();
const { Navigator, Screen } = App;

export const AppRoutes: FC = () => (
  <Navigator
    initialRouteName="Dashboard"
    screenOptions={{
      headerShown: false,
      cardStyle: {
        backgroundColor: "#312e38",
      },
    }}
  >
    <Screen name="Dashboard" component={Dashboard} />
    <Screen name="AppointmentCreated" component={AppointmentCreated} />
    <Screen name="CreateAppointment" component={CreateAppointment} />
    <Screen name="Profile" component={Profile} />
  </Navigator>
);
