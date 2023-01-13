<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import useFirebase from "@/composables/useFirebase";
// immport type
import type { ISignIn } from "../type";

/** init data */
const initFormData: ISignIn = {
  email: "",
  password: "",
};
const initUIData: any = {
  errMsg: "",
};

/** composable */
const router = useRouter();
const { onSignInFirebase, onSignInWithGoogleByFirebase, handleErrSignIn } =
  useFirebase();

/** variable */
const formData = ref<ISignIn>(initFormData);
const ui = ref(initUIData);

/** computed */

/** methods */
const onSignIn = async () => {
  const payload = {
    email: formData.value.email,
    password: formData.value.password,
  };
  try {
    await onSignInFirebase(payload);
    console.log("forceUpdate :>> ");
  } catch (err: any) {
    ui.value.errMsg = handleErrSignIn(err?.code);
  }
};
const onSignInWithGoogle = () => {
  onSignInWithGoogleByFirebase();
};
</script>
<template>
  <div>
    <h1>Sign In Account</h1>
    <div class="form-sign-in">
      <p><input type="text" placeholder="Email" v-model="formData.email" /></p>
      <p>
        <input
          type="password"
          placeholder="Password"
          v-model="formData.password"
          @keypress.enter="onSignIn"
        />
      </p>
      <div class="sign-in-err">
        <p v-if="ui.errMsg">
          {{ ui.errMsg }}
        </p>
      </div>

      <p><button @click="onSignIn">Submit</button></p>
      <p><button @click="onSignInWithGoogle">Sign In With Google</button></p>
    </div>
  </div>
</template>

<style scoped lang="sass">
.form-sign-in
  .sign-in-err *
    color: red
    font-size: 14px
    line-height: 16px
    height: 16px
    white-space: nowrap
    overflow: hidden
    text-overflow: ellipsis
</style>
