import { COLORS, FONTS } from "@/constants";
import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  container: {
    width: "100%",
    height: 100,
    backgroundColor: COLORS.white,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    padding: 30,
    marginTop: 10,
  },
  dealOfDay: {
    width: "90%",
    height: "90%",
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  dealOfDayImage: {
    width: 100,
    height: 100,
  },
  dealOfDayInfo: {
    width: "100%",
    height: "40%",
    padding: 10,
  },
  dealOfDayTitle: {
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: FONTS.Poppin_Medium,
  },
  dealOfdayLeft: {
    gap: 10,
  },
  dealOfdayTimeContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  dealOfDayPrice: {
    fontSize: 16,
    color: "red",
    fontFamily: FONTS.Poppin_Medium,
  },
  timeEndTitle: {
    color: "red",
    fontFamily: FONTS.Poppin_Medium,
    fontSize: 13,
  },
  productListContainer: {
    flexDirection: "row",
  },
  productItemCardContainer: {
    borderWidth: 1,
    borderRightWidth: 0,
    borderColor: COLORS.borderColor2,
  },
});

export default style;
