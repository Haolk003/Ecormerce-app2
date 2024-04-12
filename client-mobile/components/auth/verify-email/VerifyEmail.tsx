import {
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  TextInput,
  TextInputChangeEventData,
  View,
} from "react-native";
import { useRouter } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import styles from "./verifyEmail.style";
import useFetch from "@/hooks/useFetch";
import LoadingScreen from "@/components/LoadingScreen";
type VerifyNumber = {
  0: "";
  1: "";
  2: "";
  3: "";
  4: "";
  5: "";
};
const VerifyEmail = () => {
  const router = useRouter();
  const { token, mail } = useLocalSearchParams();
  const { data, error, isLoading, executeFetch, isSuccess } = useFetch({
    endpoint: `auth/verify`,
    autoFetch: false,
    initialMethod: "POST",
  });
  const inputRef = [
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
  ];
  const [verifyNumber, setVerifyNumber] = useState<VerifyNumber>({
    0: "",
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
  });

  const handleChangeinput = (
    e: NativeSyntheticEvent<TextInputChangeEventData>,
    index: number
  ) => {
    if (e.nativeEvent.text.length <= 1) {
      const newVerifyNumber = { ...verifyNumber, [index]: e.nativeEvent.text };
      setVerifyNumber(newVerifyNumber);
    }
    if (e.nativeEvent.text !== "" && index < 5) {
      inputRef[index + 1].current?.focus();
    }
  };

  useEffect(() => {
    if (!Object.values(verifyNumber).some((item) => item === "")) {
      executeFetch("POST", {
        token,
        activationCode: Object.values(verifyNumber).join(""),
      });
    }
  }, [verifyNumber]);
  useEffect(() => {
    if (error && !isLoading) {
      setVerifyNumber({ 0: "", 1: "", 2: "", 3: "", 4: "", 5: "" });
      inputRef[0].current?.focus();
    }
  }, [error, isLoading]);

  useEffect(() => {
    if (isSuccess) {
      router.navigate(`set-password/${mail}/${token}`);
      // navigate to the next screen
    }
  }, [isSuccess]);
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.title}>Please Enter The OTP Sent to</Text>
        <Text style={styles.mailInfoText}>{mail}</Text>
        <Text style={styles.otpTitleInfo}>Enter OTP</Text>
        <View style={styles.otpInputContainer}>
          {verifyNumber &&
            Object.keys(verifyNumber).map((key, index) => {
              return (
                <View key={key}>
                  <TextInput
                    ref={inputRef[index]}
                    onChange={(e) => handleChangeinput(e, index)}
                    onKeyPress={(e) => {
                      if (e.nativeEvent.key === "Backspace" && index !== 0) {
                        inputRef[index - 1].current?.focus();
                      }
                    }}
                    style={[
                      styles.input,
                      inputRef[index].current?.isFocused() && styles.inputFocus,
                      error ? styles.inputError : null,
                    ]}
                    value={verifyNumber[key as unknown as keyof VerifyNumber]}
                    onChangeText={(text) => {
                      const newVerifyNumber = { ...verifyNumber, [key]: text };
                      setVerifyNumber(newVerifyNumber);
                    }}
                    maxLength={1}
                    keyboardType="numeric"
                    autoFocus={key === "0" ? true : false}
                  />
                </View>
              );
            })}
        </View>
      </View>
      {isLoading && <LoadingScreen />}
    </View>
  );
};

export default VerifyEmail;
