<demo>
支持自定义宽度(width),内容的高度(height)
</demo>
<template>
  <Button theme="primay" @click="onChangeVisible"> 点击 </Button>
  <Dialog
    v-model:visible="visible"
    :onCloseOverlay="true"
    :width="600"
    :height="200"
  >
    <template v-slot:content>
      <div v-for="i in 10" :key="i">
        <div>{{ i }}</div>
      </div>
    </template>
  </Dialog>
</template>
<script lang="ts">
import { Dialog } from "../../../lib/index";
import { ref } from "vue";
import { Button } from "../../../lib/index";
export default {
  components: {
    Dialog,
    Button,
  },
  setup() {
    const visible = ref(false);
    const onChangeVisible = () => {
      visible.value = true;
    };
    return {
      visible,
      onChangeVisible,
    };
  },
};
</script>
