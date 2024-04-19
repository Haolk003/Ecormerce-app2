import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  ScrollView,
} from "react-native";
import { SectionList } from "react-native";
import React, { useEffect } from "react";
import styles from "./category.style";
import useFetch from "@/hooks/useFetch";
import { FONTS } from "@/constants";
const CategoriesLayout = () => {
  const { isLoading, data } = useFetch({
    endpoint: "category/get-all",
    autoFetch: true,
    requiresAuth: false,
  });

  const { isLoading: isLoading2, data: brands } = useFetch({
    endpoint: "brand/get-all",
    autoFetch: true,
    requiresAuth: false,
  });

  useEffect(() => {
    console.log(brands);
  }, [brands]);
  return (
    <ScrollView>
      <View style={styles.categoresContainer}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {data &&
            data.map((item: any, index: number) => {
              return (
                <View style={styles.categoriesItemContainer} key={item._id}>
                  <View style={styles.imageCategoryContainer}>
                    <Image
                      source={{ uri: item.icon }}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                      }}
                    />
                  </View>
                  <Text style={styles.textCategory}>{String(item.name)}</Text>
                </View>
              );
            })}
        </ScrollView>
      </View>
      {data &&
        data.map((category: any, index: number) => {
          return (
            <View key={category._id}>
              {category.subcategories && category.subcategories.length > 0 && (
                <View style={styles.subCategorycontainer}>
                  <View style={styles.subCategoryHeader}>
                    <Text
                      style={{ fontSize: 15, fontFamily: FONTS.Poppin_Medium }}
                    >
                      {String(category.name)}
                    </Text>
                  </View>
                  <View style={styles.subCategoryBodyContainer}>
                    {category.subcategories &&
                      category.subcategories.length > 0 &&
                      category.subcategories.map((item: any, index: number) => {
                        return (
                          <View
                            style={styles.categoriesItemContainer}
                            key={item._id}
                          >
                            <View style={styles.imageCategoryContainer}>
                              <Image
                                source={{ uri: item.icon }}
                                style={{
                                  width: "100%",
                                  height: "100%",
                                  objectFit: "contain",
                                }}
                              />
                            </View>
                            <Text>{String(item.name)}</Text>
                          </View>
                        );
                      })}
                  </View>
                </View>
              )}
            </View>
          );
        })}
      <View style={styles.subCategorycontainer}>
        <View style={styles.subCategoryHeader}>
          <Text style={{ fontSize: 15, fontFamily: FONTS.Poppin_Medium }}>
            Brands
          </Text>
        </View>
        <View style={styles.brandsContainer}>
          {brands &&
            brands.map((brand: any, index: number) => {
              return (
                <View key={brand._id}>
                  <Image
                    source={{ uri: brand.logo }}
                    style={{ width: 50, height: 50, objectFit: "contain" }}
                  />
                </View>
              );
            })}
        </View>
      </View>
    </ScrollView>
  );
};

export default CategoriesLayout;
