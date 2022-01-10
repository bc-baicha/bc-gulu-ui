<demo>
支持diable
</demo>
<template>
  <Checkbox :disable="true" />
  <Checkbox :disable="true" :defaultChecked="true" />
</template>
<script lang="ts">
import { Checkbox } from "../../../lib/index";
export default {
  components: {
    Checkbox,
  },
  setup() {
    return {};
  },
};
</script>
