import { create } from "zustand";
import { produce } from "immer";
import { createJSONStorage, persist } from "zustand/middleware";
import { IUSerData } from "@/types/user";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export const useStore = create((set, get) => ({
  user: null as IUSerData | null,

  setUserData: async (
    data: IUSerData,
    access_token: string,
    refesh_token: string
  ) => {
    set({ user: data });

    await AsyncStorage.setItem("access_token", JSON.stringify(access_token));
    await AsyncStorage.setItem("refresh_token", JSON.stringify(refesh_token));
  },
  saveUser: async (token: string) => {
    await AsyncStorage.setItem("access_token", token);
  },
  logout: async () => {
    await AsyncStorage.removeItem("access_token");
    await AsyncStorage.removeItem("refresh_token");
    set({ user: null });
  },
}));
