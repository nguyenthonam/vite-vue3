import { defineStore } from "pinia";
import state from "./state";
import getters from "./getters";
export const useAuthStore = defineStore("AuthStore", {
  state,
  getters,
  actions: {
    setUserInfo(payload: any) {
      console.log("setUserInfo :>> ", payload);
      // this.info = data
      // this.phoneNumber = data.mobile
      // this.countryCode = data.countryCode
      // localStorage.setItem(LOCAL_STORAGE_KEY.INFO, enCodeHanler(data))
    },
    onSignIn(payload?: any) {
      console.log("onSignIn :>> ", payload.email);
      this.isSignInDialogVisible = false;
      this.user.email = payload.email;
    },
  },
});
