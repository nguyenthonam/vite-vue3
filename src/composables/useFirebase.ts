import { ref } from "vue";
import { useRouter } from "vue-router";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
// import type
import { EErrCodeSignIn } from "@/ultis/types/firebase";
import type { ISignInFirebase, ISignUpFirebase } from "@/ultis/types/firebase";

export default function useFirebase() {
  const router = useRouter();

  const getCurrentUserFirebase = () => {
    return new Promise((resolve, reject) => {
      const removeListener = onAuthStateChanged(
        getAuth(),
        (user) => {
          removeListener();
          resolve(user);
        },
        reject
      );
    });
  };

  // NOTE: handle Err Message
  const handleErrSignIn = (errCode: EErrCodeSignIn) => {
    let msg = "";
    switch (errCode) {
      case EErrCodeSignIn.AUTH_INVALID_EMAIL:
        msg += "Invalid Email!";
        break;
      case EErrCodeSignIn.AUTH_WRONG_PASSWORD:
        msg += "Wrong Password!";
        break;
      case EErrCodeSignIn.AUTH_USER_NOT_FOUND:
        msg += "User Not Found!";
        break;
      default:
        msg += "Email or password was incorrect!";
        break;
    }
    return msg;
  };

  // NOTE: SignIn with Firebase
  const onSignInFirebase = async (payload: ISignInFirebase) => {
    return signInWithEmailAndPassword(
      getAuth(),
      payload.email,
      payload.password
    )
      .then((data) => {
        router.push("/");
      })
      .catch((err) => {
        throw err;
      });
  };
  const onSignInWithGoogleByFirebase = () => {
    console.log("onSignInWithGoogle :>> ");
    const provider = new GoogleAuthProvider();
    signInWithPopup(getAuth(), provider)
      .then((data) => {
        console.log("User :>> ", data?.user);
        router.push("/");
      })
      .catch((err: any) => {
        throw err;
      });
  };

  // NOTE: Sign Up
  const onSignUpFirebase = async (payload: ISignUpFirebase) => {
    return createUserWithEmailAndPassword(
      getAuth(),
      payload.email,
      payload.password
    )
      .then((data) => {
        console.log("Successfully registered!");
        router.push("/sign-in");
      })
      .catch((err) => {
        throw err;
      });
  };

  // NOTE: Sign out with Firebase
  const onSignOutFirebase = async () => {
    const user = await getCurrentUserFirebase();
    if (user) {
      signOut(getAuth());
      router.push("/");
    }
  };

  return {
    onSignUpFirebase,
    onSignOutFirebase,
    onSignInFirebase,
    onSignInWithGoogleByFirebase,
    getCurrentUserFirebase,
    handleErrSignIn,
  };
}
