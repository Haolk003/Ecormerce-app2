import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React, { useEffect } from "react";
import useFetch from "@/hooks/useFetch";
import styles from "./categories.style";
const Categories = () => {
  const { data, error, executeFetch, isLoading, isSuccess } = useFetch({
    endpoint: "category/get-all",
    autoFetch: true,
    initialMethod: "GET",
  });
  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <View style={styles.constainer}>
        {data &&
          data.map((category: any) => {
            return (
              <View style={styles.categoriesItemContainer} key={category._id}>
                <View style={styles.imageCategoryContainer}>
                  <Image
                    source={{ uri: category.icon }}
                    style={styles.imageCategory}
                  />
                </View>
                <Text>{category.name}</Text>
              </View>
            );
          })}
      </View>
    </ScrollView>
  );
};

export default Categories;
