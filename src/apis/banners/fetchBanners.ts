import axios from "@/apis/axiosConfig";
import { QUERY_KEY } from "../queryKey";
import type { ResponseData } from "../type";
import { useQuery } from "vue-query";

export interface IBannerResponse {
  sn: number;
  imagePath: string;
  action: number;
  targetInfo: string | null;
  targetSn: number;
  targetType: number;
}

export function fetchBanners() {
  return useQuery(
    QUERY_KEY.HOME_BANNER,
    async (): Promise<ResponseData<IBannerResponse[]>> => {
      return await axios("/v5/web-booking/homePage/getBannerList");
    }
  );
}
