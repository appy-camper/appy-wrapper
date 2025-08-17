import React from "react";
import { WebView } from "react-native-webview";
import { injectedJs } from "@/utils/constants.ts";
import { useOnMessage } from "@/hooks/useOnMessage.ts";

export default function Screen() {
  const onMessage = useOnMessage();

  return (
    <WebView
      source={{ uri: "https://the-nudge.webflow.io" }}
      injectedJavaScriptBeforeContentLoaded={injectedJs}
      onMessage={onMessage}
    />
  );
}
