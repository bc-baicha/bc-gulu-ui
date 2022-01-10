<template>
  <div class="bc-boxChild" v-for="(item, i) in dataSource" :key="i">
    <Checkbox :value="item.value" :onChange="onChooseValue" />
  </div>
</template>
<script lang="ts">
import { ref } from "vue";
import { Checkbox } from "./index";
export default {
  props: {
    dataSource: {
      type: Array,
      default: [],
    },
    onChange: {
      type: Function,
      default: () => {},
    },
  },
  components: {
    Checkbox,
  },
  setup(props) {
    const { onChange } = props;
    const cValues = ref<any[]>([]);
    const onChooseValue = (status, value) => {
      if (status) {
        cValues.value = [...cValues.value, value];
      } else {
        let a = cValues.value.indexOf(value);
        cValues.value.splice(a, 1);
      }
      onChange(Array.from(cValues.value));
    };
    return { onChooseValue };
  },
};
</script>
<style lang="scss">
.bc-boxChild {
  margin: 0 5px;
}
</style>
