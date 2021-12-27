<template>
  <h1>Button 按钮</h1>
  <Showcodedemo :component="Buttonsize" />
</template>
<script lang="ts">
import Buttonsize from "./components/Buttonsize.vue";
export default {
  components: {
    Buttonsize,
  },
  setup() {
    return {
      Buttonsize,
    };
  },
};
</script>
