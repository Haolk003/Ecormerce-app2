import {
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  TextInput,
  TextInputChangeEventData,
  View,
} from "react-native";
import React, { useState } from "react";
import Icon from "@expo/vector-icons/AntDesign";
import { COLORS } from "@/constants";

type Props = {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
};
const InputPassword: React.FC<Props> = ({ onChange, placeholder, value }) => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        secureTextEntry={isVisible}
        value={value}
        onChangeText={onChange}
        placeholder={placeholder}
      />
      <Icon
        name={isVisible ? "eye" : "eyeo"}
        color={COLORS.label}
        size={24}
        onPress={() => setIsVisible(!isVisible)}
        placeholder={placeholder}
      />
    </View>
  );
};

export default InputPassword;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    flex: 1,
  },
  input: {
    width: "70%",
    height: "100%",
  },
});
