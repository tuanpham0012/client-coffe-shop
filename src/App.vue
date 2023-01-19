<script setup>
import {ref, onBeforeMount} from 'vue'

onBeforeMount( () => {
  localStorage.setItem('portal_id', 1);
})
</script>

<template>
  <router-view></router-view>
  <!-- Layout wrapper -->
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
