<template>
  <h1>Checkbox 组件</h1>
  <Showcodedemo :component="Checkboxdefault" />
</template>
<script lang="ts">
import Checkboxdefault from "./components/Checkboxdefault.vue";
export default {
  components: {
    Checkboxdefault,
  },
  setup() {
    return { Checkboxdefault };
  },
};
</script>
