<script setup lang="ts">
import useApiBanners from "@/apis/banners/useApiBanners";
import { watch, isRef } from "vue-demi";
const { fetchBanners } = useApiBanners();
const { isLoading, isError, data, error, isFetching } = fetchBanners();
</script>

<template>
  <div>
    <h1 class="text-3xl font-bold underline">Home Page</h1>
    <p>Welcome <span class="text-primary">Nam Nguyen!</span></p>
    ==================================
    <div>
      <span v-if="isLoading">Loading...</span>
      <span v-else-if="isError">Error: {{ error }}</span>
      <!-- We can assume by this point that `isSuccess === true` -->
      <ul v-else>
        <br />
        --------
        <li v-for="(item, idx) in data" :key="'todo' + idx">
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>
