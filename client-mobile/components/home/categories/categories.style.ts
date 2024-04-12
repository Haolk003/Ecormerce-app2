import { COLORS } from "@/constants";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  constainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: "row",
    gap: 20,
    overflow: "scroll",
    backgroundColor: COLORS.white,
  },
  categoriesItemContainer: {
    gap: 10,
    alignItems: "center",
  },
  imageCategoryContainer: {
    borderWidth: 1,
    borderColor: COLORS.borderColor,
    borderRadius: 50,
    padding: 10,
  },
  imageCategory: {
    width: 40,
    height: 40,
    objectFit: "cover",
  },
});

export default styles;
