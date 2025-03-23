<script setup>
import AppFooter from "../components/AppFooter.vue";
import AppHeader from "../components/AppHeader.vue";
</script>

<template>
  <main>
    <AppHeader />
    <div id="content">
      <slot></slot>
    </div>
    <AppFooter />
  </main>
</template>

<style scoped>
main {
  overflow: hidden;
}
#content {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  height: 100%;
  padding: 20px;
}
</style>
