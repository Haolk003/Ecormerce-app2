import SetPasswordScreen from "@/components/auth/set-password/SetPasswordScreen";
import { COLORS } from "@/constants";
import { Stack } from "expo-router";
import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
export default function SetPassword() {
  return (
    <SafeAreaView>
      <Stack.Screen
        options={{
          headerTitle: () => (
            <Text style={styles.headerLeftText}>New Password</Text>
          ),
          headerBackTitleVisible: false,
          headerStyle: { backgroundColor: COLORS.backgroundColorHeader },
        }}
      />
      <View style={styles.container}>
        <SetPasswordScreen />
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
