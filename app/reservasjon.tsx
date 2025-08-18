import { useOnMessage } from "@/hooks/useOnMessage";
import { injectedJs } from "@/utils/constants.ts";
import React from "react";
import { WebView } from "react-native-webview";

export default function Reservasjon() {
  const onMessage = useOnMessage();

  return (
    <WebView
      source={{
        uri: "https://booking.resdiary.com/widget/Standard/SaltPepperHonefoss/785",
      }}
      injectedJavaScriptBeforeContentLoaded={injectedJs}
      style={{ backgroundColor: "black" }}
      onMessage={onMessage}
      hideKeyboardAccessoryView={true}
    />
  );
}
