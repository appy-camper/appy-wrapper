import React from "react";
import { Stack } from "expo-router";
import { DrawerToggleButton } from "@react-navigation/drawer";

export default function StacksLayout() {
  return (
    <Stack
      screenOptions={{
        headerTitle: "Salt & Pepper",
        headerBackButtonDisplayMode: "minimal",
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontFamily: "Barlow Condensed SemiBold",
          fontSize: 22,
        },
        headerStyle: {
          backgroundColor: "black",
        },
        headerRight: () => <DrawerToggleButton tintColor="#fa0" />,
      }}
    >
      <Stack.Screen
        name="modal"
        options={{
          presentation: "modal",
          headerShown: false,
        }}
      />
    </Stack>
  );
}
