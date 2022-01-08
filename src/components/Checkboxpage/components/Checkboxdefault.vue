<demo>
基础用法
</demo>
<template>
  <Checkbox v-model:choose="choose" />
</template>
<script lang="ts">
import { ref } from "vue";
import { Checkbox } from "../../../lib/index";
export default {
  components: {
    Checkbox,
  },
  setup() {
    const choose = ref(false);
    return {
      choose,
    };
  },
};
</script>
