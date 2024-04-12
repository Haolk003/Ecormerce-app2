import axios, { AxiosRequestConfig, InternalAxiosRequestConfig } from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import _ from "lodash";
const instance = axios.create({
  baseURL: "http://192.168.30.5:8000/api/v1/",
  headers: {
    "Content-Type": "application/json",
  },
});
interface InternalAxiosRequestConfig2<T = any> extends AxiosRequestConfig {
  requiresAuth?: boolean;
}
instance.interceptors.request.use(
  async (config: any) => {
    if (config?.requiresAuth === false) {
      return config;
    }

    const now = Date.now();
    const access_token = await AsyncStorage.getItem("access_token");

    if (!_.isEmpty(access_token)) {
      const access_tokenData = JSON.parse(access_token as string);

      if (new Date(access_tokenData.expiredAt).getTime() < now) {
        const refesh_token = await AsyncStorage.getItem("refresh_token");
        if (_.isEmpty(refesh_token)) {
          return config;
        }
        const response = await axios.post(
          "http://192.168.30.5:8000/api/v1/auth/refresh-token",
          {
            refeshToken: JSON.parse(refesh_token as string).token,
          }
        );

        if (response.data.data.accessToken) {
          await AsyncStorage.setItem(
            "access_token",
            JSON.stringify(response.data.data.accessToken)
          );
          await AsyncStorage.setItem(
            "refresh_token",
            JSON.stringify(response.data.data.refreshToken)
          );
          config.headers.Authorization = `Bearer ${response.data.data.accessToken.token}`;
          return config;
        }
      } else {
        config.headers.Authorization = `Bearer ${access_tokenData.token}`;
        return config;
      }
    }
    return config;
  },

  async (error) => {
    return Promise.reject(error);
  }
);
export { instance };
