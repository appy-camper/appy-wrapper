import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Home",
          headerStyle: { backgroundColor: "#eee" },
          headerTitleStyle: { color: "#333" },
        }}
      />
      <Stack.Screen
        name="modal"
        options={{
          title: "Modal",
          headerStyle: { backgroundColor: "#eee" },
          headerTitleStyle: { color: "#333" },
          presentation: "modal",
        }}
      />
    </Stack>
  );
}
