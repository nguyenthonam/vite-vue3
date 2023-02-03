<script setup lang="ts">
import { fetchBanners } from "@/apis/banners/fetchBanners";
const { isLoading, isError, data, error, isFetching } = fetchBanners();
console.log("Home Banner :>> ", data);
</script>

<template>
  <div>
    <h1 class="text-3xl font-bold underline">Home Page</h1>
    <p>Welcome <span class="text-primary">Nam Nguyen!</span></p>
  </div>
</template>
