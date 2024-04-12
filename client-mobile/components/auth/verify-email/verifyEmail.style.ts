import { COLORS, FONTS } from "@/constants";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginTop: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: FONTS.Poppin_SemiBold,
  },
  mailInfoText: {
    fontSize: 16,
    fontFamily: FONTS.Poppin_Italic,
    color: COLORS.info,
    marginTop: 5,
  },
  otpTitleInfo: {
    color: COLORS.label,
    fontSize: 14,
    marginTop: 20,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: COLORS.text,
    width: 50,
    textAlign: "center",
    paddingVertical: 5,
    fontFamily: FONTS.Poppin_Regular,
  },
  otpInputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
    marginTop: 10,
  },
  inputFocus: {
    borderColor: COLORS.primary,
  },
  inputError: {
    borderColor: COLORS.danger,
  },
});

export default styles;
