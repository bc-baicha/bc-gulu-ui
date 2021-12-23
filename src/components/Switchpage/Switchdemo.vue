<template>
  <Showcodedemo :component="Switchdemo1" />
  <!-- <Switchdemo1></Switchdemo1> -->
</template>
<script lang="ts">
import Showcodedemo from "../Showcodedemo.vue";
import Switchdemo1 from "./Switchdemo1.vue";
export default {
  components: {
    Showcodedemo,
    Switchdemo1,
  },
  setup() {
    return { Switchdemo1 };
  },
};
</script>
