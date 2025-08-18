import { useOnMessage } from "@/hooks/useOnMessage";
import { injectedJs } from "@/utils/constants.ts";
import React from "react";
import { WebView } from "react-native-webview";

export default function Takeaway() {
  const onMessage = useOnMessage();

  return (
    <WebView
      source={{
        uri: "https://salthonefoss.munu.shop/articles/r200072923-salt-og-pepper-honefoss-takeaway--o200011064-take-away-nett",
      }}
      injectedJavaScriptBeforeContentLoaded={injectedJs}
      style={{ backgroundColor: "black" }}
      onMessage={onMessage}
      hideKeyboardAccessoryView={true}
    />
  );
}
