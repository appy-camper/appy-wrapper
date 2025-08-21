import { useOnMessage } from "@/hooks/useOnMessage";
import { injectedJs } from "@/utils/constants.ts";
import React from "react";
import { WebView } from "react-native-webview";
import { StatusBar } from "expo-status-bar";
import { useLocalSearchParams } from "expo-router";
import { fromBase64Url } from "@/utils/encoding";

export default function Screen() {
  const onMessage = useOnMessage();
  const { slug } = useLocalSearchParams();
  const uri = fromBase64Url(slug);

  return (
    <>
      <WebView
        source={{ uri }}
        injectedJavaScriptBeforeContentLoaded={injectedJs}
        style={{ backgroundColor: "black" }}
        onMessage={onMessage}
        hideKeyboardAccessoryView={true}
      />
      <StatusBar style="light" />
    </>
  );
}
