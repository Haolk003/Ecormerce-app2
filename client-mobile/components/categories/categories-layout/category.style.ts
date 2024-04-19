import { COLORS, FONTS } from "@/constants";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  categoresContainer: {
    backgroundColor: COLORS.white,
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  parentcategoriesContainer: {
    flexDirection: "row",
    gap: 10,
  },
  categoriesItemContainer: {
    padding: 10,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  imageCategoryContainer: {
    borderRadius: 50,
    borderWidth: 1,
    borderColor: COLORS.borderColor,
    width: 60,
    height: 60,
    padding: 5,
    overflow: "hidden",
  },
  textCategory: {
    fontSize: 12,
    fontFamily: FONTS.Poppin_Regular,
  },
  subCategorycontainer: {
    backgroundColor: COLORS.white,
    marginTop: 15,
  },
  subCategoryHeader: {
    borderBottomWidth: 1,
    borderColor: COLORS.borderColor,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  subCategoryBodyContainer: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    rowGap: 15,
    columnGap: 20,
    justifyContent: "center",
  },
  brandsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    flexWrap: "wrap",
    padding: 20,
  },
});

export default styles;
