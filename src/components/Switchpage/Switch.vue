<template>
  <Switchchild v-model:value="y" />
</template>
<script lang="ts">
import { ref } from "vue";
import Switchchild from "./components/Switchchild.vue";
export default {
  components: {
    Switchchild,
  },
  setup() {
    const y = ref<boolean>(true);
    return { y };
  },
};
</script>
