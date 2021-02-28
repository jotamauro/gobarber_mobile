import React, { FC } from "react";
import { AuthRoutes } from "./auth.routes";
import { AppRoutes } from "./app.routes";
import { ActivityIndicator, Text, View } from "react-native";
import { useAuth } from "../hooks/auth";

export const Routes: FC = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="666" />
      </View>
    );
  }
  return user ? <AppRoutes /> : <AuthRoutes />;
};
