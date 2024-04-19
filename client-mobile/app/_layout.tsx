import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Slot, Stack, Tabs } from "expo-router";
import { View } from "@/components/Themed";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";

import { useColorScheme } from "@/components/useColorScheme";
import useFetch from "@/hooks/useFetch";
import { useStore } from "@/features/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    PoppinBlack: require("../assets/fonts/Poppins-Black.ttf"),
    PoppinBold: require("../assets/fonts/Poppins-Bold.ttf"),
    PoppinExtraBold: require("../assets/fonts/Poppins-ExtraBold.ttf"),
    PoppinLight: require("../assets/fonts/Poppins-Light.ttf"),
    PoppinMedium: require("../assets/fonts/Poppins-Medium.ttf"),
    PoppinRegular: require("../assets/fonts/Poppins-Regular.ttf"),
    PoppinSemiBold: require("../assets/fonts/Poppins-SemiBold.ttf"),
    PoppinThin: require("../assets/fonts/Poppins-Thin.ttf"),
    PoppinItalic: require("../assets/fonts/Poppins-Italic.ttf"),

    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();
  const setUserData = useStore((state: any) => state.setUserData);
  const [isRequest, setIsRequest] = useState(false);
  const { data, isLoading, error, executeFetch } = useFetch({
    endpoint: "auth/load-user",
    autoFetch: true,
    requiresAuth: true,
  });
  useEffect(() => {
    if (data) {
      setUserData(data);
      setIsRequest(true);
    }
    if (!isRequest) {
      executeFetch("GET", "");
    }
  }, [data, AsyncStorage.getItem("access_token")]);
  return (
    <>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <Slot />
      </ThemeProvider>
    </>
  );
}
