import { useOnMessage } from "@/hooks/useOnMessage";
import { injectedJs } from "@/utils/constants.ts";
import React from "react";
import { WebView } from "react-native-webview";
import { StatusBar } from "expo-status-bar";
import { useLocalSearchParams } from "expo-router";
import { fromBase64Url } from "@/utils/encoding";
import { useNotification } from "@/context/NotificationContext";

export default function Screen() {
  const onMessage = useOnMessage();
  const { slug } = useLocalSearchParams();
  const uri = fromBase64Url(slug);

  const { expoPushToken, notification, error } = useNotification;

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
      <Text>Push Token: {expoPushToken}</Text>
      {error && <Text>Error: {error.message}</Text>}
      {notification && (
        <Text>
          Last Notification:{" "}
          {JSON.stringify(notification?.request.content.data, null, 2)}
        </Text>
      )}
    </>
  );
}
