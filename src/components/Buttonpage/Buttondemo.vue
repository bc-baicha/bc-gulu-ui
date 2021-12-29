<template>
  <h1>Button 按钮</h1>
  <Showcodedemo :component="Buttonsize" />
  <Showcodedemo :component="Buttontype" />
  <Showcodedemo :component="Buttonshape" />
  <Showcodedemo :component="Buttonloading" />
  <Showcodedemo :component="Buttondisable" />
</template>
<script lang="ts">
import Buttonsize from "./components/Buttonsize.vue";
import Buttontype from "./components/Buttontype.vue";
import Buttonshape from "./components/Buttonshape.vue";
import Buttonloading from "./components/Buttonloading.vue";
import Buttondisable from "./components/Buttondisable.vue";
export default {
  components: {
    Buttonsize,
    Buttontype,
    Buttonshape,
    Buttonloading,
    Buttondisable,
  },
  setup() {
    return {
      Buttonsize,
      Buttontype,
      Buttonshape,
      Buttonloading,
      Buttondisable,
    };
  },
};
</script>
