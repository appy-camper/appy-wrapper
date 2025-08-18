import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { useFonts } from "expo-font";
import { Button, Text } from "react-native";
import { router } from "expo-router";

export default function RootLayout() {
  const [loaded] = useFonts({
    "Barlow Condensed": require("../assets/fonts/BarlowCondensed-Regular.ttf"),
    "Barlow Condensed Bold": require("../assets/fonts/BarlowCondensed-Bold.ttf"),
    "Barlow Condensed SemiBold": require("../assets/fonts/BarlowCondensed-SemiBold.ttf"),
  });

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          drawerPosition: "right",
          headerTintColor: "#fa0",
          headerTitleStyle: {
            fontFamily: "Barlow Condensed SemiBold",
            fontSize: 20,
          },
          headerStyle: {
            backgroundColor: "black",
          },
          drawerActiveBackgroundColor: "#fa0",
          drawerLabelStyle: {
            fontFamily: "Barlow Condensed SemiBold",
            fontSize: 20,
          },
          drawerStyle: {
            backgroundColor: "black",
            width: 240,
          },
          drawerActiveTintColor: "#000",
          drawerInactiveTintColor: "#ccc",
        }}
      >
        <Drawer.Screen
          name="index"
          options={{
            drawerLabel: "Hjem",
            title: "Salt & Pepper",
          }}
        />
        <Drawer.Screen
          name="meny"
          options={{
            drawerLabel: "Meny",
            title: "Meny",
          }}
        />
        <Drawer.Screen
          name="takeaway"
          options={{
            drawerLabel: "Takeaway",
            title: "Bestill Takeaway",
          }}
        />
        <Drawer.Screen
          name="reservasjon"
          options={{
            drawerLabel: "Reservasjon",
            title: "Reservasjon",
          }}
        />
        <Drawer.Screen
          name="tjenester"
          options={{
            drawerLabel: "Tjenester",
            title: "Tjenester",
          }}
        />
        <Drawer.Screen
          name="modal"
          options={{
            presentation: "modal",
            headerShown: false,
            drawerItemStyle: { display: "none" },
          }}
        />
        <Drawer.Screen
          name="[slug]"
          options={{
            title: "Salt & Pepper",
            drawerItemStyle: { display: "none" },
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
  // return (
  //
  //   <Stack>
  //     <Stack.Screen
  //       name="index"
  //       options={{
  //         headerShown: true,
  //         title: "Salt & Pepper",
  //         headerTintColor: "#fff",
  //         headerStyle: {
  //           backgroundColor: "black",
  //         },
  //         headerRight: () => (
  //           <TouchableOpacity
  //             onPress={() => {}}>
  //             <Ionicons name="menu" size={24} color="white" />
  //           ></TouchableOpacity>
  //         ),
  //       }}
  //     />
  //     <Stack.Screen
  //       name="modal"
  //       options={{
  //         presentation: "modal",
  //         headerShown: false,
  //       }}
  //     />
  //   </Stack>
  // );
}
