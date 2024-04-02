import { SafeAreaView, StyleSheet, View } from "react-native";
import { Stack } from "expo-router";
import { COLORS, FONTS } from "@/constants";
import { Text } from "react-native";
import SignUpScreen from "@/components/auth/sign-up/SignUpScreen";
export default function Page() {
  return (
    <SafeAreaView>
      <Stack.Screen
        options={{
          headerTitle: () => (
            <Text style={styles.headerLeftText}>Register</Text>
          ),
          headerStyle: { backgroundColor: COLORS.backgroundColorHeader },
          headerRight: () => {
            return <Text style={styles.headerRightText}>Skip</Text>;
          },
        }}
      />
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 18,
            fontFamily: FONTS.Poppin_SemiBold,
            width: "80%",
          }}
        >
          Unlock Personalized Content Tailored For You
        </Text>
        <SignUpScreen />
      </View>
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
