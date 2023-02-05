import axios from "@/apis/axiosConfig";
import { QUERY_KEY } from "../queryKey";
import type { ResponseData } from "../type";
import { useQuery } from "vue-query";
import type { AxiosResponse } from "axios";

export interface IBannerResponse {
  sn: number;
  imagePath: string;
  action: number;
  targetInfo: string | null;
  targetSn: number;
  targetType: number;
}

export default function useApiBanners() {
  const fetchBanners = async (): Promise<IBannerResponse[]> =>
    (await axios("/v5/web-booking/homePage/getBannerList").then(
      (res: AxiosResponse<ResponseData<IBannerResponse[]>, any>) => {
        console.log("useApiBanners :>> ", res.data.data);
        return res.data.data;
      }
    )) as IBannerResponse[];

  return {
    fetchBanners: () => useQuery(QUERY_KEY.HOME_BANNER, fetchBanners),
  };
}
