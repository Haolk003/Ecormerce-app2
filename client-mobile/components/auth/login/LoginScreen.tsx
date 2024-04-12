import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import {
  TextInput,
  Button,
  View,
  Text,
  Pressable,
  ToastAndroid,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Link, router } from "expo-router";
import Icon from "@expo/vector-icons/AntDesign";
import styles from "./login.style";
import { COLORS, FONTS } from "@/constants";
import { useStore } from "@/features/auth";

import useFetch from "@/hooks/useFetch";

const LoginScreen = () => {
  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();
  const { data, error, isLoading, executeFetch } = useFetch({
    endpoint: "auth/login",
    initialMethod: "POST",
    autoFetch: false,
    initialBody: null,
  });
  const setUserData = useStore((state: any) => state.setUserData);
  useEffect(() => {
    if (error && !isLoading) {
      ToastAndroid.show(error, ToastAndroid.SHORT);
    }
  }, [error, isLoading]);
  const onSubmit = () => {
    const values = getValues();
    executeFetch("POST", values);
  };

  useEffect(() => {
    if (data) {
      setUserData(data.user, data.accessToken, data.refeshToken);
      router.push("/home");
    }
  }, [data]);

  return (
    <View style={styles.loginContainer}>
      <View>
        <Text style={styles.label}>Enter your email</Text>
        <View
          style={[
            styles.inputContainer,
            errors.email && styles.inputContainerError,
          ]}
        >
          <Icon name="mail" size={24} color={COLORS.label} />
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.inputAuth}
                keyboardType="email-address"
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
                placeholder="Email"
              />
            )}
            name="email"
            rules={{
              required: { value: true, message: "Email is required" },
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "invalid email address",
              },
            }}
            defaultValue=""
          />
        </View>
        {errors.email && (
          <Text style={styles.errorText}>{String(errors.email.message)}</Text>
        )}
        <Text style={styles.label}>Enter your password</Text>
        <View
          style={[
            styles.inputContainer,
            errors.password && styles.inputContainerError,
          ]}
        >
          <Icon name="lock" size={24} color={COLORS.label} />
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
                placeholder="Password"
                secureTextEntry
                style={styles.inputAuth}
              />
            )}
            name="password"
            rules={{
              required: { value: true, message: "Password is required" },
              minLength: {
                value: 8,
                message: "Password must have at least 6 characters",
              },
            }}
            defaultValue=""
          />
        </View>
        {errors.password && (
          <Text style={styles.errorText}>
            {String(errors.password.message)}
          </Text>
        )}
      </View>
      <View style={styles.loginContainerBottom}>
        <Text style={{ color: COLORS.primary }}>Forgot Password?</Text>
        <Text style={{ color: COLORS.text }}>
          Don't have an account? &nbsp;
          <Link
            href="/register"
            style={{ color: COLORS.primary, textDecorationLine: "underline" }}
          >
            <Text> Sign Up</Text>
          </Link>
        </Text>
        <Pressable onPress={handleSubmit(onSubmit)} style={styles.loginButton}>
          <Text style={{ fontSize: 15, fontFamily: FONTS.Poppin_Medium }}>
            Login
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default LoginScreen;
