import React from "react";
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";
import { Image, View } from "react-native";
import { toBase64Url } from "@/utils/encoding";
import { useNavigation, usePathname } from "expo-router";
import { useRouter } from "expo-router";
import { baseUrl } from "@/utils/constants";

const menuItems = [
  {
    title: "Hjem",
    href: baseUrl,
  },
  {
    title: "Meny",
    href: `${baseUrl}/menu.php`,
  },
  {
    title: "Takeaway",
    href: "https://salthonefoss.munu.shop/articles/r200072923-salt-og-pepper-honefoss-takeaway--o200011064-take-away-nett",
  },
  {
    title: "Reservasjon",
    href: "https://booking.resdiary.com/widget/Standard/SaltPepperHonefoss/785",
  },
  {
    title: "Tjenester",
    href: `${baseUrl}/services.php`,
  },
  {
    title: "Om oss",
    href: `${baseUrl}/about.php`,
  },
];

const DrawerContent = (props: DrawerContentComponentProps) => {
  const navigation = useNavigation();
  const router = useRouter();
  const pathname = usePathname();

  return (
    <DrawerContentScrollView {...props}>
      <View style={{ alignItems: "center", marginBottom: 15 }}>
        <Image
          resizeMode="contain"
          source={require("@/assets/images/saltogpepper.png")}
          style={{ height: 70 }}
        />
      </View>
      {menuItems.map(({ title, href }) => {
        const base64Url = toBase64Url(href);
        const isFocused = pathname === `/${decodeURIComponent(base64Url)}`;

        return (
          <DrawerItem
            labelStyle={{
              fontFamily: "Barlow Condensed SemiBold",
              fontSize: 18,
              color: isFocused ? "#fff" : "#fa0",
            }}
            activeBackgroundColor="#fa0"
            focused={isFocused}
            key={href}
            label={title}
            onPress={() => {
              if (router.canDismiss()) {
                router.dismissAll();
              }

              router.replace(`/(stacks)/${base64Url}`);
              props.navigation.closeDrawer();
            }}
          />
        );
      })}
    </DrawerContentScrollView>
  );
};

export default DrawerContent;
