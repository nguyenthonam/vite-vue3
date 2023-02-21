export interface IUserInfo {
  username: string;
  phoneNumber: string;
  email: string;
  token: string;
}
export interface IAuthStoreState {
  isSignInDialogVisible: boolean;
  user: IUserInfo;
}
export interface IAuthStoreGetters {
  getUserInfo: (state: IAuthStoreState) => IUserInfo;
}
export interface IAuthStoreActions {
  setUserInfo: (payload: any) => void;
  onSignIn: (payload: any) => void;
}
