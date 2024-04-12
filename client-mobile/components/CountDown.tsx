import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { COLORS, FONTS } from "@/constants";

type Props = {
  miliseconds: number;
};
const CountDown: React.FC<Props> = ({ miliseconds }) => {
  const [time, setTime] = useState(miliseconds);

  useEffect(() => {
    if (time <= 0) {
      return;
    }

    const interValId = setInterval(() => {
      setTime((time) => time - 1000);
    }, 1000);

    return () => clearInterval(interValId);
  }, [time]);

  const seconds = Math.floor((time / 1000) % 60);
  const minutes = Math.floor((time / (1000 * 60)) % 60);
  const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
  return (
    <View style={styles.container}>
      <View style={styles.timeItem}>
        <Text style={styles.timeItemText}>{hours}</Text>
        <Text style={styles.timeItemText}>h</Text>
      </View>
      <View style={styles.timeItem}>
        <Text style={styles.timeItemText}>{minutes}</Text>
        <Text style={styles.timeItemText}>m</Text>
      </View>
      <View style={styles.timeItem}>
        <Text style={styles.timeItemText}>{seconds}</Text>
        <Text style={styles.timeItemText}>s</Text>
      </View>
    </View>
  );
};

export default CountDown;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
  },
  timeItem: {
    backgroundColor: COLORS.buttonPrimary,
    borderRadius: 5,
    paddingHorizontal: 5,
    paddingVertical: 2,
    flexDirection: "row",
    gap: 3,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  timeItemText: {
    fontFamily: FONTS.Poppin_Medium,
    fontSize: 14,
  },
});
