<template>
  <Showcodedemo :component="Switchdefault" />
  <Showcodedemo :component="Switchtext" />
  <Showcodedemo :component="Switchdisable" />
</template>
<script lang="ts">
import Switchdefault from "./components/Switchdefault.vue";
import Switchtext from "./components/Switchtext.vue";
import Switchdisable from "./components/Switchdisable.vue";
export default {
  components: {
    Switchdefault,
    Switchtext,
    Switchdisable,
  },
  setup() {
    return { Switchdefault, Switchtext, Switchdisable };
  },
};
</script>
