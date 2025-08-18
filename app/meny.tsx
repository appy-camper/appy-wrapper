import { useOnMessage } from "@/hooks/useOnMessage";
import { injectedJs } from "@/utils/constants.ts";
import React from "react";
import { WebView } from "react-native-webview";
import { baseUrl } from "../utils/constants.ts";

export default function Meny() {
  const onMessage = useOnMessage();

  return (
    <WebView
      source={{ uri: `${baseUrl}/menu.php` }}
      injectedJavaScriptBeforeContentLoaded={injectedJs}
      style={{ backgroundColor: "black" }}
      onMessage={onMessage}
      hideKeyboardAccessoryView={true}
    />
  );
}
