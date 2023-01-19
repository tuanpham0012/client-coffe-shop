<template>
  <div class="layout-wrapper layout-content-navbar">
    <div class="layout-container">
      <Sidebar />
      <div class="layout-page">
        <Navbar />
        <div class="content-wrapper">
          <div class="container-xxl flex-grow-1 container-p-y">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import Sidebar from "../../components/Layouts/Sidebar.vue";
import Navbar from "../../components/Layouts/NavBar.vue";
import Loading from "../../components/LoadingScreens/Loading1.vue";

import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

const loading = computed(() => store.state.base.loading ?? true);
</script>
  <style></style>
  