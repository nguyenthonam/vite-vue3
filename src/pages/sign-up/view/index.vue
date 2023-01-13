<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import useFirebase from "@/composables/useFirebase";
// import type
import type { ISignUp } from "../type";
import type { ISignUpFirebase } from "@/ultis/types/firebase";

/** init data */
const initFormData: ISignUp = {
  email: "",
  password: "",
};

/** composable */
const router = useRouter();
const { onSignUpFirebase } = useFirebase();

/** variable */
const formData = ref<ISignUp>(initFormData);

/** computed */

/** methods */
const onSignUp = async () => {
  const payload: ISignUpFirebase = {
    email: formData.value.email,
    password: formData.value.password,
  };
  try {
    await onSignUpFirebase(payload);
  } catch (err) {}
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
    </div>
  </div>
</template>
