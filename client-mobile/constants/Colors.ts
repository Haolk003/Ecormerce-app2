const tintColorLight = "#2f95dc";
const tintColorDark = "#fff";

export const COLORS = {
  backgroundColorHeader: "#2874F0",
  primary: "#0D775E",
  primaryLight: "rgba(102,165,137,0.1)",
  secondary: "#66A58A",
  success: "#159E42",
  danger: "#FF3131",
  warning: "#FFb02c",
  dark: "#2f2f2f",
  light: "#E6E6E6",
  info: "#2b39b9",
  white: "#fff",
  label: "#8A8A8A",
  background: "#F9F9F9",
  black: "#000",
  buttonPrimary: "#ffcb0d",

  //light theme
  card: "#fff",
  background2: "#F9F9F9",
  text: "#000",
  textLight: "#8A8A8A",
  title: "#000",
  borderColor: "rgba(0,0,0,0.1)",
  input: "#f9f9f9",
  placeholder: "rgba(0,0,0,0.5)",

  //dark theme
  darkCard: "#1C212E",
  darkBackground: "#0C101C",
  darkText: "#B8B8B8",
  darkTextLight: "#6C6E77",
  darkTitle: "#fff",
  darkBorder: "rgba(255,255,255,0.1)",
  darkInput: "#151A28",
  darkborderColor: "rgba(255,255,255,0.1)",
  darkPlaceholder: "rgba(255,255,255,0.5)",
};

export default {
  light: {
    text: "#000",
    background: "#fff",
    tint: tintColorLight,
    tabIconDefault: "#ccc",
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: "#fff",
    background: "#000",
    tint: tintColorDark,
    tabIconDefault: "#ccc",
    tabIconSelected: tintColorDark,
  },
};
