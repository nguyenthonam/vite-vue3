<script lang="ts" setup>
import { ref, unref, computed } from "vue";
import { useAuthStore } from "@/stores/auth";

/** interface */
interface IProps {
  modelValue: boolean;
}
interface IEmits {
  (e: "update:modelValue", value: boolean): void;
}
const props = defineProps<IProps>();
const emits = defineEmits<IEmits>();

/** composable */
const authStore = useAuthStore();

/** variable */
const formSignIn = ref({
  email: "",
  password: "",
});

// computed
const dialogVisible = computed({
  get() {
    return props.modelValue;
  },
  set(value: boolean) {
    emits("update:modelValue", value);
  },
});
</script>

<template>
  <teleport to="body">
    <div
      v-if="dialogVisible"
      class="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-primary-200 h-[50%] w-[70%] z-100"
    >
      <div class="p-4">
        <h2>Login Dialog</h2>
        <div>Logo</div>
        <form ref="formSignInRef">
          <label for="email">email:</label>
          <input v-model="formSignIn.email" id="email" type="text" />
          <label for="password">Password:</label>
          <input v-model="formSignIn.password" id="password" type="password" />
        </form>
        <div class="mt-30 flex justify-end">
          <button
            class="w-fit pa-16 border border-blue"
            @click="authStore.onSignIn(unref(formSignIn))"
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  </teleport>
</template>
