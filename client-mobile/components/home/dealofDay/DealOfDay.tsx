import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import style from "./dealOfDay.style";
import CountDown from "@/components/CountDown";
import { FONTS } from "@/constants";
import ProductHomeCard from "@/components/card/ProductHomeCard/ProductHomeCard";
const DealOfDay = () => {
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
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        horizontal={true}
      >
        <View style={style.productListContainer}>
          <View style={style.productItemCardContainer}>
            <ProductHomeCard
              _id="1"
              discount="20%"
              isFavorite={false}
              price={20}
              subTitle="Iphone"
              thumbnail="https://storage.googleapis.com/ecomerce-app-8b457.appspot.com/myFile-1712894160674-358722034.jpeg?GoogleAccessId=firebase-adminsdk-6vv55%40ecomerce-app-8b457.iam.gserviceaccount.com&Expires=1742144400&Signature=ay%2BMqEJp7dfOsRZQsuo3AaMiDEBxxCvvSz2OL%2B8RI6JQ6uhdE5PfvgxYy4xBaLwUTeNcz%2BVn1NLqige%2BGeP5yJm7j38CHyEvQygCNOuWkL0h1i1zDKVm%2B2azpFj%2FjQ7bvGH69enLtoZX6OhkKf4h6BrhvWZBJKDD0KB2KScsVtI%2FUVgIPhJM5dtBKTqarXIsdR5yviUCDhRMy%2FLTm9xY0sQGvcgHbbiRNDC0zgImCcndRP%2FWM5roTciv89wk1HZHB3h3t0OzLuqiLVszqewR2lcSOC98GmRU%2BCvxUUBdMi3noaMe4yZ3IO55i51G5aQdSRckdTyn%2BwRfb%2FDVquwweg%3D%3D"
              title="Ip 14"
            />
          </View>
          <View style={style.productItemCardContainer}>
            <ProductHomeCard
              _id="1"
              discount="20%"
              isFavorite={false}
              price={20}
              subTitle="Iphone"
              thumbnail="https://storage.googleapis.com/ecomerce-app-8b457.appspot.com/myFile-1712894160674-358722034.jpeg?GoogleAccessId=firebase-adminsdk-6vv55%40ecomerce-app-8b457.iam.gserviceaccount.com&Expires=1742144400&Signature=ay%2BMqEJp7dfOsRZQsuo3AaMiDEBxxCvvSz2OL%2B8RI6JQ6uhdE5PfvgxYy4xBaLwUTeNcz%2BVn1NLqige%2BGeP5yJm7j38CHyEvQygCNOuWkL0h1i1zDKVm%2B2azpFj%2FjQ7bvGH69enLtoZX6OhkKf4h6BrhvWZBJKDD0KB2KScsVtI%2FUVgIPhJM5dtBKTqarXIsdR5yviUCDhRMy%2FLTm9xY0sQGvcgHbbiRNDC0zgImCcndRP%2FWM5roTciv89wk1HZHB3h3t0OzLuqiLVszqewR2lcSOC98GmRU%2BCvxUUBdMi3noaMe4yZ3IO55i51G5aQdSRckdTyn%2BwRfb%2FDVquwweg%3D%3D"
              title="Ip 14"
            />
          </View>
          <View
            style={[style.productItemCardContainer, { borderRightWidth: 1 }]}
          >
            <ProductHomeCard
              _id="1"
              discount="20%"
              isFavorite={false}
              price={20}
              subTitle="Iphone"
              thumbnail="https://storage.googleapis.com/ecomerce-app-8b457.appspot.com/myFile-1712894160674-358722034.jpeg?GoogleAccessId=firebase-adminsdk-6vv55%40ecomerce-app-8b457.iam.gserviceaccount.com&Expires=1742144400&Signature=ay%2BMqEJp7dfOsRZQsuo3AaMiDEBxxCvvSz2OL%2B8RI6JQ6uhdE5PfvgxYy4xBaLwUTeNcz%2BVn1NLqige%2BGeP5yJm7j38CHyEvQygCNOuWkL0h1i1zDKVm%2B2azpFj%2FjQ7bvGH69enLtoZX6OhkKf4h6BrhvWZBJKDD0KB2KScsVtI%2FUVgIPhJM5dtBKTqarXIsdR5yviUCDhRMy%2FLTm9xY0sQGvcgHbbiRNDC0zgImCcndRP%2FWM5roTciv89wk1HZHB3h3t0OzLuqiLVszqewR2lcSOC98GmRU%2BCvxUUBdMi3noaMe4yZ3IO55i51G5aQdSRckdTyn%2BwRfb%2FDVquwweg%3D%3D"
              title="Ip 14"
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default DealOfDay;
