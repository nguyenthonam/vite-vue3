import type { IAuthStoreState } from "./type";

export default (): IAuthStoreState => {
  return {
    isSignInDialogVisible: false,
    user: {
      username: "",
      phoneNumber: "",
      email: "",
      token: "",
    },
  };
};
