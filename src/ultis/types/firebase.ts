export enum EErrCodeSignIn {
  AUTH_INVALID_EMAIL = "auth/invalid-email",
  AUTH_USER_NOT_FOUND = "auth/user-not-found",
  AUTH_WRONG_PASSWORD = "auth/wrong-password",
}

export interface ISignInFirebase {
  email: string;
  password: string;
}
export interface ISignUpFirebase {
  email: string;
  password: string;
}
