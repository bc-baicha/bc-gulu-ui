<demo>
基础用法
</demo>
<template>
  <Checkbox :onChange="onChange" value="Apple" />
</template>
<script lang="ts">
import { Checkbox } from "../../../lib/index";
export default {
  components: {
    Checkbox,
  },
  setup() {
    const onChange = (status, value) => {
      console.log(status, value);
    };
    return {
      onChange,
    };
  },
};
</script>
