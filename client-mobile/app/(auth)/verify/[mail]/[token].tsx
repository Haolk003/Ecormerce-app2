import { Stack } from "expo-router";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import { COLORS } from "@/constants";
import VerifyEmail from "@/components/auth/verify-email/VerifyEmail";
export default function Page() {
  return (
    <SafeAreaView>
      <Stack.Screen
        options={{
          headerTitle: () => <Text style={styles.headerLeftText}>OTP</Text>,
          headerStyle: { backgroundColor: COLORS.backgroundColorHeader },
        }}
      />
      <VerifyEmail />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginTop: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  headerRightText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "400",
    marginRight: 10,
    textDecorationLine: "underline",
  },
  headerLeftText: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
  },
});
