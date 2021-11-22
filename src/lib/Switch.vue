<template>
  <Switchdemo v-model:value="y" />
</template>
<script lang="ts">
import { ref } from "vue";
import Switchdemo from "../components/Switchpage/Switchdemo.vue";
export default {
  components: {
    Switchdemo,
  },
  setup() {
    const y = ref<boolean>(true);
    return { y };
  },
};
</script>
