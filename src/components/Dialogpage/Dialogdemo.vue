<template>
  <h1>Dialog 组件</h1>
  <Showcodedemo :component="Dialogdefault" />
  <Showcodedemo :component="Dialogwidth" />
  <Showcodedemo :component="Dialoginfo" />
</template>
<script lang="ts">
import Dialogdefault from "./components/Dialogdefault.vue";
import Dialogwidth from "./components/Dialogwidth.vue";
import Dialoginfo from "./components/Dialoginfo.vue";
export default {
  components: {
    Dialogdefault,
    Dialogwidth,
    Dialoginfo,
  },
  setup() {
    return {
      Dialogdefault,
      Dialogwidth,
      Dialoginfo,
    };
  },
};
</script>
