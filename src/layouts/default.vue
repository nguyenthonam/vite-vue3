<script setup lang="ts">
import { RouterView } from "vue-router";
import Header from '@/components/common/Header.vue'
import Footer from '@/components/common/Footer.vue'
</script>

<template>
  <!-- header -->
  <Header/>

  <!-- body -->
  <RouterView />

  <!-- footer -->
  <Footer/>
</template>
