import {
  View,
  Text,
  Pressable,
  SafeAreaView,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";
import { useStore } from "@/features/auth";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import useFetch from "@/hooks/useFetch";
import { Slot, Stack, useRouter, Tabs } from "expo-router";
import Icon from "@expo/vector-icons/build/MaterialIcons";
import { COLORS } from "@/constants";
import Header from "@/components/home/header/Header";
import Carousel from "@/components/home/carousel/Carousel";
import Categories from "@/components/home/categories/Categories";
import DealOfDay from "@/components/home/dealofDay/DealOfDay";
import Special from "@/components/home/special/Special";
export default function App() {
  const router = useRouter();
  const logout = useStore((state: any) => state.logout);
  const user = useStore((state: any) => state.user);
  const { executeFetch } = useFetch({
    endpoint: "auth/logout",
    initialMethod: "POST",
    autoFetch: false,
  });
  const handleLogout = async () => {
    await executeFetch("POST", {});
    logout();
  };

  const deleteAcessToken = async () => {
    await AsyncStorage.removeItem("access_token");
  };
  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user]);
  return (
    <SafeAreaView>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <Stack.Screen
          options={{
            headerStyle: { backgroundColor: COLORS.backgroundColorHeader },

            headerLeft: () => (
              <View style={styles.containerHeaderLeft}>
                <Icon name="menu" size={25} color={COLORS.white} />
                <Image
                  source={require("../../assets/images/logo.png")}
                  width={80}
                  height={80}
                  style={{ width: 80, height: 80, objectFit: "cover" }}
                />
              </View>
            ),
            headerTitle: "",
            headerRight: () => (
              <View style={styles.containerHeaderRight}>
                <Icon name="search" size={25} color={COLORS.white} />
                <Icon name="notifications" size={25} color={COLORS.white} />
              </View>
            ),
          }}
        />
        <View style={{ backgroundColor: COLORS.white }}>
          <Header />
          <Carousel />
          <Categories />
          <DealOfDay />
          <Special />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerHeaderLeft: {
    flexDirection: "row",

    alignItems: "center",
    marginLeft: 10,
  },
  containerHeaderRight: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    marginRight: 10,
  },
  containerHeader: {
    backgroundColor: COLORS.backgroundColorHeader,
  },
});
