<script setup lang="ts">
import { ref, onBeforeUnmount } from "vue";
import useFirebase from "@/composables/useFirebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { ENUM_LOCALES } from "@/ultis/constant";
// import composable
import useLocales from "@/composables/useLocales";
import { useAuthStore } from "@/stores/auth";
// import component
import SignInDialog from "@/components/common/SignInDialog.vue";

/** composables */
const { onSignOutFirebase } = useFirebase();
const { setLocale } = useLocales();
const authStore = useAuthStore();

/** variables */
const ui = ref({
  signedIn: false,
});

const authListener = onAuthStateChanged(getAuth(), function (user) {
  if (user) {
    ui.value.signedIn = true; // if we have a user
  } else {
    ui.value.signedIn = false; // if we do not
  }
});
const changeLocale = (evt: Event) => {
  let localeElement = evt.target as HTMLSelectElement;
  setLocale(localeElement?.value);
};

onBeforeUnmount(() => {
  authListener(); // clear up listener
});
</script>

<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="@/assets/logo.svg"
      width="125"
      height="125"
    />

    <div class="wrapper justify-between">
      <nav class="flex flex-1 justify-center">
        <RouterLink to="/">{{ $t("home") }}</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/sign-up">Sign up</RouterLink>
        <RouterLink v-if="!ui.signedIn" to="/sign-in">Sign in</RouterLink>
        <span v-else>
          <button @click="onSignOutFirebase">Sign out</button>
          <RouterLink to="/account">Account</RouterLink>
        </span>
      </nav>
      {{ authStore.$state.user }}
      <button
        @click="
          authStore.isSignInDialogVisible = !authStore.isSignInDialogVisible
        "
      >
        Sign in
      </button>
      ||
      <select id="locale" @change="changeLocale">
        <option :value="ENUM_LOCALES.VI">
          {{ $t("vietnamese") }}
        </option>
        <option :value="ENUM_LOCALES.EN">
          {{ $t("english") }}
        </option>
      </select>

      <SignInDialog v-model="authStore.isSignInDialogVisible" />
    </div>
  </header>
</template>

<style scoped lang="sass">
header
  display: flex
  width: 100%
  max-height: 100vh
  line-height: 1.5
  .wrapper
    display: flex
    width: 100%
    flex: 1
    place-items: center
    flex-wrap: wrap

.logo
  display: block
  margin: 0 auto 2rem

nav
  width: 100%
  font-size: 12px
  text-align: center
  margin-top: 2rem
  & a.router-link-exact-active
   color: var(--color-text)
  & a.router-link-exact-active:hover
    background-color: transparent
  & a
    display: inline-block
    padding: 0 1rem
    border-left: 1px solid var(--color-border)
  & a:first-of-type
    border: 0

@media (min-width: 1024px)
  .logo
    margin: 0 2rem 0 0
  nav
    text-align: left
    margin-left: -1rem
    font-size: 1rem
    padding: 1rem 0
    margin-top: 1rem
</style>
