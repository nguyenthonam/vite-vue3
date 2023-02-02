<script setup lang="ts">
import { ref, onBeforeUnmount } from "vue";
import useFirebase from "@/composables/useFirebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";

/** composables */
const { onSignOutFirebase } = useFirebase();

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

onBeforeUnmount(() => {
  authListener(); // clear up listener
});
</script>

<template>
  <header>
    <div class="flex justify-between w-full cursor-pointer tablet:hidden">
      <div class="menu">
        <img src="/public/images/icon-menu.png" alt="menu" />
      </div>
      <div class="flex flex-col">
        <p class="text-gray-1">Deliver to</p>
        <p class="text-primary">4102 Pretty View Lane</p>
      </div>
      <div>
        <img src="/public/images/profile.png" alt="logo" />
      </div>
    </div>
    <div class="hidden tablet:flex">
      <div class="wrapper">
        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
          <RouterLink to="/sign-up">Sign up</RouterLink>
          <RouterLink v-if="!ui.signedIn" to="/sign-in">Sign in</RouterLink>
          <span v-else>
            <button @click="onSignOutFirebase">Sign out</button>
            <RouterLink to="/account">Account</RouterLink>
          </span>
        </nav>
      </div>
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
