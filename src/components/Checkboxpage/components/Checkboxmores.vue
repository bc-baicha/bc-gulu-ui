<demo>
选择多个用法
</demo>
<template>
  <div class="bc-groupsWrap">
    <Checkboxgroups :dataSource="arr.data" :onChange="onChange" />
  </div>
</template>
<script lang="ts">
import { reactive } from "vue";
import { Checkboxgroups } from "../../../lib/index";
export default {
  components: {
    Checkboxgroups,
  },
  setup() {
    const arr = reactive({
      data: [
        { value: "A" },
        { value: "B" },
        { value: "C" },
        { value: "D" },
        { value: "E" },
      ],
    });
    const onChange = (values) => {
      console.log(values);
    };
    return {
      onChange,
      arr,
    };
  },
};
</script>
<style lang="scss">
.bc-groupsWrap {
  display: flex;
}
</style>
