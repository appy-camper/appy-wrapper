import { useOnMessage } from "@/hooks/useOnMessage";
import { injectedJs } from "@/utils/constants.ts";
import { fromBase64 } from "@/utils/encoding.ts";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { WebView } from "react-native-webview";

export default function Screen() {
  const { slug } = useLocalSearchParams();
  const decodedSlug = fromBase64(slug);
  const onMessage = useOnMessage();

  return (
    <WebView
      source={{ uri: decodedSlug }}
      injectedJavaScriptBeforeContentLoaded={injectedJs}
      onMessage={onMessage}
    />
  );
}
