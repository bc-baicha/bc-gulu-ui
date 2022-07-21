<template>
  <h1>Collapse 组件</h1>
  <Showcodedemo :component="Collapsedefault" />
  <Showcodedemo :component="Collapsedisable" />
</template>
<script lang="ts">
import Collapsedefault from "./components/Collapsedefault.vue";
import Collapsedisable from "./components/Collapsedisable.vue";
export default {
  components: {
    Collapsedefault,
    Collapsedisable,
  },
  setup() {
    return { Collapsedefault, Collapsedisable };
  },
};
</script>
