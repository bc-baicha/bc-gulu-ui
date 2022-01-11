<demo>
支持diable
</demo>
<template>
  <Checkbox :disable="true" value="Apple" />
  <Checkbox :disable="true" :defaultChecked="true" value="Apple" />
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
