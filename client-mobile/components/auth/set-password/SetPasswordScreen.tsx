import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  View,
} from "react-native";
import React, { useEffect } from "react";
import { useLocalSearchParams } from "expo-router";
import { useForm, Controller } from "react-hook-form";
import useFetch from "@/hooks/useFetch";
import styles from "./setPassword.style";
import Icon from "@expo/vector-icons/AntDesign";
import { COLORS, FONTS } from "@/constants";
import InputPassword from "@/components/ui/InputPassword";
import { useRouter } from "expo-router";
import LoadingScreen from "@/components/LoadingScreen";
const SetPasswordScreen = () => {
  const {
    control,
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  const { mail, token } = useLocalSearchParams();

  const { data, error, executeFetch, isLoading } = useFetch({
    endpoint: "auth/set-password",
    initialMethod: "POST",
    autoFetch: false,
  });
  const onSubmit = async () => {
    const values = getValues();
    await executeFetch("POST", {
      password: values.password,
      token,
      email: mail,
    });
  };
  useEffect(() => {
    if (data) {
      router.push("/login");
    }
  }, [data]);
  useEffect(() => {
    if (error) {
      ToastAndroid.show(String(error), ToastAndroid.SHORT);
    }
  }, [error]);
  return (
    <View style={styles.setPasswordContainer}>
      <View>
        <Text style={styles.title}>Create new password</Text>
        <View>
          <Text style={styles.label}>New Password</Text>
          <View
            style={[
              styles.inputContainer,
              errors.password && styles.inputContainerError,
            ]}
          >
            <Icon name="lock" size={24} color={COLORS.label} />
            <Controller
              control={control}
              name="password"
              render={({ field: { name, onChange, value } }) => (
                <InputPassword
                  placeholder="New Password"
                  value={value}
                  onChange={onChange}
                />
              )}
              rules={{
                required: { value: true, message: "Password is required" },
                minLength: {
                  value: 8,
                  message: "Password must have at least 6 characters",
                },
              }}
            />
          </View>
          {errors.password && <Text>{errors.password.message as string}</Text>}
        </View>

        <View>
          <Text style={styles.label}>Confirm Password</Text>
          <View
            style={[
              styles.inputContainer,
              errors.confirmPassword && styles.inputContainerError,
            ]}
          >
            <Icon name="lock" size={24} color={COLORS.label} />
            <Controller
              control={control}
              name="confirmPassword"
              render={({ field: { name, onChange, value } }) => (
                <InputPassword
                  placeholder="Confirm Password"
                  value={value}
                  onChange={onChange}
                />
              )}
              rules={{
                required: {
                  value: true,
                  message: "Please confirm your password",
                },
                validate: (value) =>
                  value === getValues().password ||
                  "The passwords do not match",
              }}
            />
          </View>
          {errors.confirmPassword && (
            <Text>{errors.confirmPassword.message as string}</Text>
          )}
        </View>
      </View>
      <Pressable
        style={styles.setPasswordButton}
        onPress={handleSubmit(onSubmit)}
      >
        <Text
          style={{
            color: COLORS.white,
            fontSize: 15,
            fontFamily: FONTS.Poppin_Medium,
          }}
        >
          Setup password
        </Text>
      </Pressable>
      {isLoading && <LoadingScreen />}
    </View>
  );
};

export default SetPasswordScreen;
