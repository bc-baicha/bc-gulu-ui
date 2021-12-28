<template>
  <h1>Button 按钮</h1>
  <Showcodedemo :component="Buttonsize" />
  <Showcodedemo :component="Buttontype" />
  <Showcodedemo :component="Buttonshape" />
</template>
<script lang="ts">
import Buttonsize from "./components/Buttonsize.vue";
import Buttontype from "./components/Buttontype.vue";
import Buttonshape from "./components/Buttonshape.vue";
export default {
  components: {
    Buttonsize,
    Buttontype,
    Buttonshape,
  },
  setup() {
    return {
      Buttonsize,
      Buttontype,
      Buttonshape,
    };
  },
};
</script>
