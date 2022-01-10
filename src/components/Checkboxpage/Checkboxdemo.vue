<template>
  <h1>Checkbox 组件</h1>
  <Showcodedemo :component="Checkboxdefault" />
  <Showcodedemo :component="Checkboxdisable" />
  <Showcodedemo :component="Checkboxmores" />
</template>
<script lang="ts">
import Checkboxdefault from "./components/Checkboxdefault.vue";
import Checkboxdisable from "./components/Checkboxdisable.vue";
import Checkboxmores from "./components/Checkboxmores.vue";
export default {
  components: {
    Checkboxdefault,
    Checkboxdisable,
    Checkboxmores,
  },
  setup() {
    return { Checkboxdefault, Checkboxdisable, Checkboxmores };
  },
};
</script>
