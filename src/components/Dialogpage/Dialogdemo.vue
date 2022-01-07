<template>
  <h1>Dialog 组件</h1>
  <Showcodedemo :component="Dialogdefault" />
  <Showcodedemo :component="Dialogmask" />
  <Showcodedemo :component="Dialogwidth" />
  <Showcodedemo :component="Dialoginfo" />
</template>
<script lang="ts">
import Dialogdefault from "./components/Dialogdefault.vue";
import Dialogwidth from "./components/Dialogwidth.vue";
import Dialoginfo from "./components/Dialoginfo.vue";
import Dialogmask from "./components/Dialogmask.vue";
export default {
  components: {
    Dialogdefault,
    Dialogwidth,
    Dialoginfo,
    Dialogmask,
  },
  setup() {
    return {
      Dialogdefault,
      Dialogwidth,
      Dialoginfo,
      Dialogmask,
    };
  },
};
</script>
