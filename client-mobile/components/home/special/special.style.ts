import { COLORS, FONTS } from "@/constants";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 10,
    paddingHorizontal: 20,
    paddingVertical: 30,
    backgroundColor: COLORS.backgroundGray,
  },
  serviceItem: {
    borderRadius: 10,
    backgroundColor: COLORS.white,
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
    padding: 10,
    height: 80,
  },
  serviceItemTitle: {
    color: COLORS.black,
    fontSize: 16,
    fontFamily: FONTS.Poppin_SemiBold,
  },
  serviceItemSelected: {
    backgroundColor: COLORS.bluePrimary,
  },
});

export default styles;
