import { COLORS, FONTS } from "@/constants";
import { Stack } from "expo-router";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import Icon from "@expo/vector-icons/build/MaterialIcons";
import CategoriesLayout from "@/components/categories/categories-layout/CategoriesLayout";
export default function App() {
  return (
    <SafeAreaView>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.backgroundColorHeader },
          headerTitleStyle: {
            color: COLORS.white,
            fontSize: 18,
            fontFamily: FONTS.Poppin_Medium,
          },
          headerTitle: "Categories",
          headerRight: () => (
            <View style={styles.containerHeaderRight}>
              <Icon name="search" size={25} color={COLORS.white} />
              <Icon name="notifications" size={25} color={COLORS.white} />
            </View>
          ),
        }}
      />
      <CategoriesLayout />
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
