import type { IAuthStoreState } from "./type";

const getUserInfo = function (state: IAuthStoreState) {
  return state.user;
};
export default {
  getUserInfo,
};
