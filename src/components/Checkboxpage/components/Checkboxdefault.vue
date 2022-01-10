<demo>
基础用法
</demo>
<template>
  <Checkbox :onChange="onChange" />
</template>
<script lang="ts">
import { Checkbox } from "../../../lib/index";
export default {
  components: {
    Checkbox,
  },
  setup() {
    const onChange = (value: Boolean) => {
      console.log(value);
    };
    return {
      onChange,
    };
  },
};
</script>
