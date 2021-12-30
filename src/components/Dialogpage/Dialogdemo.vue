<template>
  <h1>Dialog 组件</h1>
  <Showcodedemo :component="Dialogdefault" />
  <Showcodedemo :component="Dialogwidth" />
</template>
<script lang="ts">
import Dialogdefault from "./components/Dialogdefault.vue";
import Dialogwidth from "./components/Dialogwidth.vue";
export default {
  components: {
    Dialogdefault,
    Dialogwidth,
  },
  setup() {
    return {
      Dialogdefault,
      Dialogwidth,
    };
  },
};
</script>
