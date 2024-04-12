import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS, FONTS } from "@/constants";
import Icon from "@expo/vector-icons/build/FontAwesome5";
const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Deal of the day</Text>
      <View style={styles.hotDealcontainer}>
        <Icon name="fire" size={14} color={COLORS.danger} />
        <Text style={styles.headerText}>Hot deals</Text>
      </View>

      <Text style={styles.headerText}>Best Sellers</Text>
      <Text style={styles.headerText}>New Arrivals</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 15,
    width: "100%",
    shadowColor: "#000",
    shadowOffset: {
      width: 1000,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: "white",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  headerText: {
    fontFamily: FONTS.Poppin_Medium,
    fontSize: 14,
  },
  hotDealcontainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
});
