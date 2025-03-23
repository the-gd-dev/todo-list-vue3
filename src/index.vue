<script setup>
import { ref } from "vue";
import AppLayout from "./layouts/AppLayout.vue";

const greeting = ref("Hello World!");
window.document.title = "Welcome Vue3";
</script>

<template>
  <AppLayout>
        
  </AppLayout>
</template>

<style scoped></style>
