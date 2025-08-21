import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import React from "react";
import DrawerContent from "@/components/DrawerContent";
import { useFonts } from "expo-font";

export default function RootLayout() {
  useFonts({
    "Barlow Condensed": require("../assets/fonts/BarlowCondensed-Regular.ttf"),
    "Barlow Condensed Bold": require("../assets/fonts/BarlowCondensed-Bold.ttf"),
    "Barlow Condensed SemiBold": require("../assets/fonts/BarlowCondensed-SemiBold.ttf"),
  });

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        drawerContent={DrawerContent}
        screenOptions={{
          drawerPosition: "right",
          headerShown: false,
          drawerStyle: {
            backgroundColor: "black",
            width: 240,
          },
        }}
      ></Drawer>
    </GestureHandlerRootView>
  );
}
