<template>
  <router-view />
</template>

<script lang="ts">
import { provide, ref } from "vue";
import { router } from "./router";
export default {
  name: "App",
  setup() {
    const width = document.documentElement.clientWidth;
    const show = width <= 500 ? false : true;
    const menuVisible = ref(show);
    provide("xxx", menuVisible);
    router.afterEach(() => {
      if (width <= 500) {
        menuVisible.value = false;
      }
    });
  },
};
</script>
