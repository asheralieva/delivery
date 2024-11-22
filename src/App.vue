<script setup>
import { RouterView } from "vue-router";

import Home from "./views/Home.vue";
import Authorization from "./components/Authorization.vue";
import Header from "./components/Header.vue";
</script>

<template>
  <Header />
  <RouterView />

</template>

<style scoped>
</style>
