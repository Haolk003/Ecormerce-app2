import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Icon from "@expo/vector-icons/build/MaterialIcons";
import styles from "./special.style";
import { COLORS } from "@/constants";
const Special = () => {
  const [serviceSelected, setServiceSelected] = useState(0);
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
        <Pressable
          onPress={() => setServiceSelected(0)}
          style={[
            styles.serviceItem,
            serviceSelected === 0 && styles.serviceItemSelected,
          ]}
        >
          <Icon
            name="local-shipping"
            size={25}
            color={serviceSelected === 0 ? COLORS.white : COLORS.bluePrimary}
          />
          <View>
            <Text
              style={[
                styles.serviceItemTitle,
                serviceSelected === 0 && { color: COLORS.white },
              ]}
            >
              Free Shipping & Returns
            </Text>
            <Text
              style={
                serviceSelected === 0
                  ? { color: COLORS.white, fontSize: 12 }
                  : { color: COLORS.black, fontSize: 12 }
              }
            >
              For all orders over $99
            </Text>
          </View>
        </Pressable>

        <Pressable
          onPress={() => setServiceSelected(1)}
          style={[
            styles.serviceItem,
            serviceSelected === 1 && styles.serviceItemSelected,
          ]}
        >
          <Icon
            name="verified-user"
            size={25}
            color={serviceSelected === 1 ? COLORS.white : COLORS.bluePrimary}
          />
          <View>
            <Text
              style={[
                styles.serviceItemTitle,
                serviceSelected === 1 && { color: COLORS.white },
              ]}
            >
              Secure Payment
            </Text>
            <Text
              style={
                serviceSelected === 1
                  ? { color: COLORS.white, fontSize: 12 }
                  : { color: COLORS.black, fontSize: 12 }
              }
            >
              We ensure secure payment
            </Text>
          </View>
        </Pressable>

        <Pressable
          onPress={() => setServiceSelected(2)}
          style={[
            styles.serviceItem,
            serviceSelected === 2 && styles.serviceItemSelected,
          ]}
        >
          <Icon
            name="money-off"
            size={25}
            color={serviceSelected === 2 ? COLORS.white : COLORS.bluePrimary}
          />
          <View>
            <Text
              style={[
                styles.serviceItemTitle,
                serviceSelected === 2 && { color: COLORS.white },
              ]}
            >
              Money Back Guarantee
            </Text>
            <Text
              style={
                serviceSelected === 2
                  ? { color: COLORS.white, fontSize: 12 }
                  : { color: COLORS.black, fontSize: 12 }
              }
            >
              We return money within 30 days
            </Text>
          </View>
        </Pressable>

        <Pressable
          onPress={() => setServiceSelected(3)}
          style={[
            styles.serviceItem,
            serviceSelected === 3 && styles.serviceItemSelected,
          ]}
        >
          <Icon
            name="support-agent"
            size={25}
            color={serviceSelected === 3 ? COLORS.white : COLORS.bluePrimary}
          />
          <View>
            <Text
              style={[
                styles.serviceItemTitle,
                serviceSelected === 3 && { color: COLORS.white },
              ]}
            >
              Customer Support
            </Text>
            <Text
              style={
                serviceSelected === 3
                  ? { color: COLORS.white, fontSize: 12 }
                  : { color: COLORS.black, fontSize: 12 }
              }
            >
              Call or email us 24/7
            </Text>
          </View>
        </Pressable>

        <Pressable
          onPress={() => setServiceSelected(4)}
          style={[
            styles.serviceItem,
            serviceSelected === 4 && styles.serviceItemSelected,
          ]}
        >
          <Icon
            name="payment"
            size={25}
            color={serviceSelected === 4 ? COLORS.white : COLORS.bluePrimary}
          />
          <View>
            <Text
              style={[
                styles.serviceItemTitle,
                serviceSelected === 4 && { color: COLORS.white },
              ]}
            >
              Flexible Payment
            </Text>
            <Text
              style={
                serviceSelected === 4
                  ? { color: COLORS.white, fontSize: 12 }
                  : { color: COLORS.black, fontSize: 12 }
              }
            >
              Pay with Multiple Payment Methods
            </Text>
          </View>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default Special;
