<template>
  <h1>Dialog 组件</h1>
  <Showcodedemo :component="Dialogdefault" />
</template>
<script lang="ts">
import Dialogdefault from "./components/Dailogdefault.vue";
export default {
  components: {
    Dialogdefault,
  },
  setup() {
    return {
      Dialogdefault,
    };
  },
};
</script>
