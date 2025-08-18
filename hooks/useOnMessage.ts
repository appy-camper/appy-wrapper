import { useRouter } from "expo-router";
import { toBase64 } from "@/utils/encoding.ts";

export function useOnMessage() {
  const router = useRouter();

  return (event: any) => {
    console.log("Message from WebView:", event.nativeEvent.data);

    const { type, data } = JSON.parse(event.nativeEvent.data);

    switch (type) {
      case "navigation":
        const urlInBase64 = data.href ? toBase64(data.href) : "";

        if (data.isModal) {
          router.push({
            pathname: "modal",
            params: { slug: urlInBase64 },
          });
        } else {
          router.push(`/${urlInBase64}`);
        }
        break;
      case "log":
        console.log("Message from WebView console", data.level, data.log);
        break;
      default:
        console.warn("Unknown type:", type);
    }
  };
}
