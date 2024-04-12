import { View } from "@/components/Themed";
import { Tabs, Stack, Slot } from "expo-router";
import Icon from "@expo/vector-icons/build/MaterialIcons";
import { COLORS } from "@/constants";

export default function Layout() {
  return (
    <Tabs
      initialRouteName="home"
      screenOptions={{
        tabBarStyle: { paddingBottom: 5, height: 60, columnGap: 5 },
        tabBarActiveTintColor: COLORS.primary,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="home-filled" size={18} color={color} />
          ),

          title: "Home",
        }}
      />
      <Tabs.Screen
        name="categories"
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="category" size={18} color={color} />
          ),

          title: "Categories",
        }}
      />

      <Tabs.Screen
        name="cart"
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="shopping-cart" size={20} color={color} />
          ),
          title: "Cart",
        }}
      />
      <Tabs.Screen
        name="wishlist"
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="favorite" size={20} color={color} />
          ),
          title: "Wishlist",
        }}
      />
    </Tabs>
  );
}
