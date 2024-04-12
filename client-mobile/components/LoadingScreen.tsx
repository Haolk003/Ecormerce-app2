import { ActivityIndicator, View } from "react-native";

function LoadingScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        height: "100%",
        width: "100%",
      }}
    >
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
}

export default LoadingScreen;
