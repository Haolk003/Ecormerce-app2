import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "@/constants";
const styles = StyleSheet.create({
  inputAuth: {
    flex: 1,
  },

  label: {
    fontSize: 15,
    fontFamily: FONTS.Poppin_SemiBold,
    color: COLORS.label,
    marginTop: 15,
  },
  registerContainer: {
    justifyContent: "space-between",
    height: "90%",
  },
  registerButton: {
    backgroundColor: COLORS.buttonPrimary,
    padding: 10,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  inputContainer: {
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
    borderBottomColor: COLORS.borderColor,
    borderBottomWidth: 1,
    paddingVertical: 10,
    marginBottom: 10,
  },
  registerContainerBottom: {
    justifyContent: "center",
    gap: 10,
    alignItems: "center",
  },
  errorText: {
    color: COLORS.danger,
    fontSize: 12,
    fontFamily: FONTS.Poppin_Medium,
  },
  inputContainerError: {
    borderBottomColor: COLORS.danger,
  },
});

export default styles;
