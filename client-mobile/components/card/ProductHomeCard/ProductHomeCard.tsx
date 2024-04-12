import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import styles from "./producthomeCart.style";
import Icon from "@expo/vector-icons/build/MaterialIcons";
import { COLORS } from "@/constants";
type Props = {
  _id: string;
  title: string;
  subTitle: string;
  price: number;
  discount: string;
  thumbnail: string;
  isFavorite: boolean;
};
const ProductHomeCard: React.FC<Props> = ({
  _id,
  discount,
  isFavorite,
  price,
  subTitle,
  thumbnail,
  title,
}) => {
  return (
    <View style={styles.containerCard}>
      <View style={styles.favouriteIconContainer}>
        {isFavorite ? (
          <Icon name="favorite" size={20} color={COLORS.redText} />
        ) : (
          <Icon name="favorite-outline" size={20} color={COLORS.dark} />
        )}
      </View>
      <Image source={{ uri: thumbnail }} style={styles.imageProductCard} />
      <View style={styles.infoProductCard}>
        <Text style={styles.infoProductsubTitleText}>{subTitle}</Text>
        <Text style={styles.infoProductTitleText}>{title}</Text>

        <View style={styles.infoProductPriceContainer}>
          <Text style={styles.infoProductPriceText}>${price}</Text>
          <Text style={styles.infoProductPriceDiscoutText}>$30</Text>
          <Text style={styles.infoProductDiscountText}>{discount} OFF</Text>
        </View>
      </View>
    </View>
  );
};

export default ProductHomeCard;
