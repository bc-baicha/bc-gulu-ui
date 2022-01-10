<template>
  <h1>Checkbox 组件</h1>
  <Showcodedemo :component="Checkboxdefault" />
  <Showcodedemo :component="Checkboxdisable" />
</template>
<script lang="ts">
import Checkboxdefault from "./components/Checkboxdefault.vue";
import Checkboxdisable from "./components/Checkboxdisable.vue";
export default {
  components: {
    Checkboxdefault,
    Checkboxdisable,
  },
  setup() {
    return { Checkboxdefault, Checkboxdisable };
  },
};
</script>
