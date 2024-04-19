import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  FlatList,
} from "react-native";
import React, { useEffect } from "react";
import style from "./dealOfDay.style";
import CountDown from "@/components/CountDown";
import { FONTS } from "@/constants";
import ProductHomeCard from "@/components/card/ProductHomeCard/ProductHomeCard";
import useFetch from "@/hooks/useFetch";
const DealOfDay = () => {
  const { data, isLoading, error } = useFetch({
    requiresAuth: false,
    endpoint: "product",
    autoFetch: true,
  });
  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <View>
      <View style={style.container}>
        <View style={style.dealOfdayLeft}>
          <Text style={style.dealOfDayTitle}>Top Deals Of The Day</Text>
          <View style={style.dealOfdayTimeContainer}>
            <Text style={style.timeEndTitle}>Offer Ends in </Text>
            <CountDown miliseconds={2000000} />
          </View>
        </View>
        <Image
          source={require("../../../assets/images/daily-deal.png")}
          style={style.dealOfDayImage}
        />
      </View>

      {data && (
        <FlatList
          data={data}
          keyExtractor={(item) => item._id}
          horizontal={true}
          renderItem={({ item }) => (
            <View style={style.productItemCardContainer}>
              <ProductHomeCard {...item} />
            </View>
          )}
        />
      )}
    </View>
  );
};

export default DealOfDay;
