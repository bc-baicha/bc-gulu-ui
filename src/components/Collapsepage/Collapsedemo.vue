<template>
  <h1>Collapse 组件</h1>
  <Showcodedemo :component="Collapsedefault" />
</template>
<script lang="ts">
import Collapsedefault from "./components/Collapsedefault.vue";
export default {
  components: {
    Collapsedefault,
  },
  setup() {
    return { Collapsedefault };
  },
};
</script>
