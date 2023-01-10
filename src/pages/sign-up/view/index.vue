<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import type { ISignUp } from "../type";

/** init data */
const initFormData: ISignUp = {
  email: "",
  password: "",
};

/** composable */
const router = useRouter();

/** variable */
const formData = ref<ISignUp>(initFormData);

/** computed */

/** methods */
const onSignUp = () => {
  console.log("onSignUp :>> ");
  createUserWithEmailAndPassword(
    getAuth(),
    formData.value.email,
    formData.value.password
  )
    .then((data) => {
      console.log("Successfully registered!");
      console.log("Regster :>> ", data);
      router.push("/sign-in");
    })
    .catch((err) => {
      console.log("ERR_CODE:", err?.code);
      alert(err?.message);
    });
};
const onSignUpWithGoogle = () => {
  console.log("onSignUpWithGoogle :>> ");
};
</script>

<template>
  <div>
    <h1>Sign Up Account</h1>
    <div class="form-sign-up">
      <p><input type="text" placeholder="Email" v-model="formData.email" /></p>
      <p>
        <input
          type="password"
          placeholder="Password"
          v-model="formData.password"
        />
      </p>
      <p><button @click="onSignUp">Submit</button></p>
      <p><button @click="onSignUpWithGoogle">Sign In With Google</button></p>
    </div>
  </div>
</template>
