<template>
  <h1>Button 按钮</h1>
  <Showcodedemo :component="Buttonsize" />
  <Showcodedemo :component="Buttontype" />
</template>
<script lang="ts">
import Buttonsize from "./components/Buttonsize.vue";
import Buttontype from "./components/Buttontype.vue";
export default {
  components: {
    Buttonsize,
    Buttontype,
  },
  setup() {
    return {
      Buttonsize,
      Buttontype,
    };
  },
};
</script>
