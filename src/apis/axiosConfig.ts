import axios from "axios";
import { useRoute, useRouter } from "vue-router";

const instance = axios.create({
  baseURL: "https://staging-api.go2joy.vn/api",
  timeout: 1000,
  headers: {
    Accept: "application/json",
    "Device-Encode": "88153480-3ab7-11ec-8a68-d7fd852ead77",
  },
});
instance.interceptors.request.use(
  (config) => {
    // const token =  "Barear-Axx";
    // if (token) {
    //   config.headers["Authorization"] = token;
    // }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (response) => {
    const errorMessage = response.statusText;
    const route = useRoute();
    const router = useRouter();

    console.log("Notification ERROR :>> ", errorMessage);

    // CASE: Error Auth, clear State and push to home page.
    if (response.status === 401) {
      // useAuth()?.handleClearState();
      if (String(route?.name)?.includes("account")) {
        router?.push({
          name: "index",
          params: { locale: route?.params?.locale || "vi-vn" },
        });
      }
    }
  }
);

export default instance;
