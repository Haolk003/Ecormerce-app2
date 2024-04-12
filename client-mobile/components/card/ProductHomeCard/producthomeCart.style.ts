import { COLORS, FONTS } from "@/constants";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  containerCard: {
    width: 200,
    backgroundColor: COLORS.card,
    padding: 15,
    alignItems: "center",
    paddingTop: 30,
  },
  imageProductCard: {
    alignItems: "center",
    justifyContent: "center",
    height: 130,
    width: 130,
  },
  infoProductCard: {
    gap: 1,
    alignSelf: "flex-start",
    marginTop: 10,
  },
  infoProductsubTitleText: {
    color: COLORS.info,
    fontSize: 12,
    fontFamily: FONTS.Poppin_SemiBold,
  },
  infoProductTitleText: {
    color: COLORS.black,
    fontSize: 14,
    fontFamily: FONTS.Poppin_SemiBold,
  },
  infoProductPriceContainer: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
  },
  favouriteIconContainer: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  infoProductPriceText: {
    color: COLORS.black,
    fontSize: 14,
    fontFamily: FONTS.Poppin_SemiBold,
  },
  infoProductPriceDiscoutText: {
    color: COLORS.grayText,
    fontSize: 12,
    textDecorationLine: "line-through",
    fontFamily: FONTS.Poppin_SemiBold,
    marginTop: 4,
  },
  infoProductDiscountText: {
    color: COLORS.redText,
    fontSize: 12,
    fontFamily: FONTS.Poppin_Medium,
  },
});

export default styles;
