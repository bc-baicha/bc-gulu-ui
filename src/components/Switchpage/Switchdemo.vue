<template>
  <Showcodedemo :component="Switchdemo1" />
</template>
<script lang="ts">
import Switchdemo1 from "./Switchdemo1.vue";
export default {
  components: {
    Switchdemo1,
  },
  setup() {
    return { Switchdemo1 };
  },
};
</script>
