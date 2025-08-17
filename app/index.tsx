import React from "react";
import { WebView } from "react-native-webview";
import { injectedJs } from "@/utils/constants.ts";
import { useOnMessage } from "@/hooks/useOnMessage.ts";

export default function Index() {
  const onMessage = useOnMessage();

  return (
    <WebView
      source={{ uri: "https://salt-pepper.no" }}
      injectedJavaScriptBeforeContentLoaded={injectedJs}
      onMessage={onMessage}
    />
  );
}
