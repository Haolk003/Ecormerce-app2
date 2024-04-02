import React from "react";
import { useForm, Controller } from "react-hook-form";
import { TextInput, View, Text, Pressable } from "react-native";
import { Link } from "expo-router";
import Icon from "@expo/vector-icons/AntDesign";
import styles from "./signUp.style";
import { COLORS, FONTS } from "@/constants";
import useFetch from "@/hooks/useFetch";
const SignUpScreen = () => {
  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const { data, error, executeFetch, isLoading } = useFetch({
    endpoint: "auth/register",
    initialMethod: "POST",
    autoFetch: false,
    initialBody: null,
  });
  const onSubmit = () => {
    const values = getValues();
    executeFetch("POST", values);
  };

  return (
    <View style={styles.registerContainer}>
      <View>
        <Text style={styles.label}>Enter your name</Text>
        <View
          style={[
            styles.inputContainer,
            errors.name && styles.inputContainerError,
          ]}
        >
          <Icon name="user" size={24} color={COLORS.label} />
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
                placeholder="Full Name"
                secureTextEntry
                style={styles.inputAuth}
              />
            )}
            name="name"
            rules={{
              required: { value: true, message: "Name is required" },
              minLength: {
                value: 5,
                message: "Name must have at least 6 characters",
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
      </View>
      <View style={styles.registerContainerBottom}>
        <Text style={{ color: COLORS.text }}>
          Existing User ? &nbsp;
          <Link
            href={"/login"}
            style={{ color: COLORS.primary, textDecorationLine: "underline" }}
          >
            <Text>Log in</Text>
          </Link>
        </Text>
        <Pressable
          onPress={handleSubmit(onSubmit)}
          style={styles.registerButton}
        >
          <Text style={{ fontSize: 15, fontFamily: FONTS.Poppin_Medium }}>
            Continue
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default SignUpScreen;
