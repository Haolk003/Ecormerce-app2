import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Pressable,
  Image,
} from "react-native";
import React, { useState, useEffect, useRef } from "react";
import PagerView from "react-native-pager-view";
import { COLORS, FONTS } from "@/constants";
const NUM_PAGES = 3;
const Carousel = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const pagerRef = useRef(null);
  const onPageSelected = (e: {
    nativeEvent: { position: React.SetStateAction<number> };
  }) => {
    setCurrentPage(e.nativeEvent.position);
  };
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentPage((prevPage) => {
        const nextPage = prevPage + 1 >= NUM_PAGES ? 0 : prevPage + 1;
        if (pagerRef.current) {
          (pagerRef.current as PagerView).setPage(nextPage);
        }
        return nextPage;
      });
    }, 4000); // change pages every 3 seconds

    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <View>
      <ImageBackground
        source={require("../../../assets/images/bg-banner.png")}
        key="1"
      >
        <PagerView
          style={styles.pagerView}
          initialPage={0}
          onPageSelected={onPageSelected}
          ref={pagerRef as any}
        >
          <View key="1" style={styles.page}>
            <View style={styles.bannerItemContainer}>
              <View style={styles.bannerLeft}>
                <Text style={styles.titleBanner}>Shoes</Text>
                <Text style={styles.subTitleBanner}>1nd generation</Text>
                <Text style={styles.priceProductBanner}>$125.00**</Text>
                <Pressable style={styles.buttonBannerBuy}>
                  <Text>Buy now</Text>
                </Pressable>
              </View>
              <View style={styles.bannerRight}>
                <Image
                  source={require("../../../assets/images/shoes.png")}
                  style={styles.imageBanner}
                />
              </View>
            </View>
          </View>

          <View key="2" style={styles.page}>
            <View style={styles.bannerItemContainer}>
              <View style={styles.bannerLeft}>
                <Text style={styles.titleBanner}>AirPods</Text>
                <Text style={styles.subTitleBanner}>2nd generation</Text>
                <Text style={styles.priceProductBanner}>$1259.00**</Text>
                <Pressable style={styles.buttonBannerBuy}>
                  <Text>Buy now</Text>
                </Pressable>
              </View>
              <View style={styles.bannerRight}>
                <Image
                  source={require("../../../assets/images/airpod2.png")}
                  style={{
                    width: 100,
                    height: 100,
                    marginBottom: 30,
                    objectFit: "contain",
                  }}
                />
              </View>
            </View>
          </View>

          <View style={styles.page} key="3">
            <View style={styles.bannerItemContainer}>
              <View style={styles.bannerLeft}>
                <Text style={styles.titleBanner}>AirPods</Text>
                <Text style={styles.subTitleBanner}>3nd generation</Text>
                <Text style={styles.priceProductBanner}>$1029.00**</Text>
                <Pressable style={styles.buttonBannerBuy}>
                  <Text>Buy now</Text>
                </Pressable>
              </View>
              <View style={styles.bannerRight}>
                <Image
                  source={require("../../../assets/images/airpod3.png")}
                  style={styles.imageBanner}
                />
              </View>
            </View>
          </View>
        </PagerView>
        <View style={styles.dotsContainer}>
          {Array.from({ length: NUM_PAGES }).map((_, i) => (
            <View
              key={i}
              style={[
                styles.dot,
                currentPage === i ? styles.activeDot : styles.inactiveDot,
              ]}
            />
          ))}
        </View>
      </ImageBackground>
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  dotsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 2,
  },
  activeDot: {
    backgroundColor: COLORS.white,
  },
  inactiveDot: {
    backgroundColor: "gray",
  },
  pagerView: {
    height: 200,
    width: "100%",
  },
  page: {
    justifyContent: "center",
    alignItems: "center",
  },
  bannerItemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 25,
    width: "100%",
  },
  bannerLeft: {
    justifyContent: "center",
    height: "100%",
  },
  titleBanner: {
    color: COLORS.white,
    fontFamily: FONTS.Poppin_Bold,
    fontSize: 24,
  },
  subTitleBanner: {
    color: COLORS.buttonPrimary,
    fontFamily: FONTS.Poppin_Medium,
    fontSize: 16,
    marginBottom: 10,
  },
  priceProductBanner: {
    color: COLORS.white,
    fontFamily: FONTS.Poppin_Medium,
    fontSize: 16,
    marginBottom: 5,
  },
  buttonBannerBuy: {
    width: 100,
    height: 30,
    backgroundColor: COLORS.white,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  imageBanner: {
    width: 200,
    height: 180,
    objectFit: "contain",
  },
  bannerRight: {
    justifyContent: "flex-end",
    height: "100%",
  },
});
