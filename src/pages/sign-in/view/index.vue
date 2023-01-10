<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import type { ISignIn } from "../type";

/** init data */
const initFormData: ISignIn = {
  email: "",
  password: "",
};

/** composable */
const router = useRouter();

/** variable */
const formData = ref<ISignIn>(initFormData);

/** computed */

/** methods */
const handleErrSignIn = (errCode: string) => {
  console.log("Err Code:", errCode);
};
const onSignIn = () => {
  signInWithEmailAndPassword(
    getAuth(),
    formData.value.email,
    formData.value.password
  )
    .then((data) => {
      console.log("Successfully Sign In!");
      console.log("Sign In :>> ", data);
      router.push("/");
    })
    .catch((err) => {
      console.log("ERR_CODE:", err?.code);
      alert(err?.message);
    });
};
const onSignInWithGoogle = () => {
  console.log("onSignInWithGoogle :>> ");
};
</script>
<template>
  <div>
    <h1>Sign In Account</h1>
    <div class="form-sign-up">
      <p><input type="text" placeholder="Email" v-model="formData.email" /></p>
      <p>
        <input
          type="password"
          placeholder="Password"
          v-model="formData.password"
        />
      </p>
      <p><button @click="onSignIn">Submit</button></p>
      <p><button @click="onSignInWithGoogle">Sign In With Google</button></p>
    </div>
  </div>
</template>
