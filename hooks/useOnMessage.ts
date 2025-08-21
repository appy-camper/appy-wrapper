import { useRouter } from "expo-router";
import { toBase64Url } from "@/utils/encoding.ts";

export function useOnMessage() {
  const router = useRouter();

  return (event: any) => {
    const { action, payload } = JSON.parse(event.nativeEvent.data);

    switch (action) {
      case "navigation":
        const urlInBase64 = payload.href ? toBase64Url(payload.href) : "";

        if (payload.isModal) {
          router.push({
            pathname: "/(stacks)/modal",
            params: { slug: urlInBase64 },
          });
        } else {
          router.push(`/(stacks)/${urlInBase64}`);
        }
        break;
      case "log":
        console.log(`[${payload.level}]`, payload.message);
        break;
      default:
        console.warn("Unknown action:", action);
    }
  };
}
