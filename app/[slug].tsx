import { useOnMessage } from "@/hooks/useOnMessage";
import { injectedJs } from "@/utils/constants.ts";
import { fromBase64 } from "@/utils/encoding.ts";
import { router, Stack, useLocalSearchParams } from "expo-router";
import React from "react";
import { Button } from "react-native";
import { WebView } from "react-native-webview";

export default function Screen() {
  const { slug } = useLocalSearchParams();
  const decodedSlug = fromBase64(slug);
  const onMessage = useOnMessage();
  const canGoBack = router.canGoBack();

  return (
    <>
      <Stack.Screen
        getId={({ params }) => {
          console.log("params", params);
          return String(Date.now());
        }}
        options={{
          headerTitle: "Salt & Pepper",
          headerLeft() {
            return canGoBack ? (
              <Button title="Back" onPress={() => router.back()} />
            ) : null;
          },
        }}
      />
      <WebView
        source={{ uri: decodedSlug }}
        injectedJavaScriptBeforeContentLoaded={injectedJs}
        style={{ backgroundColor: "black" }}
        onMessage={onMessage}
      />
    </>
  );
}
