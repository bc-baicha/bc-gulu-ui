<demo>
各种信息提示
</demo>
<template>
  <Button theme="primay" @click="() => onChangeVisible('info')">info</Button>
  <Button theme="primay" @click="() => onChangeVisible('success')"
    >Success</Button
  >
  <Button theme="primay" @click="() => onChangeVisible('warning')"
    >Warning</Button
  >
  <Button theme="primay" @click="() => onChangeVisible('error')">Error</Button>
  <Dialog
    v-model:visible="visible"
    :onCloseOverlay="true"
    :info="true"
    :typeInfo="visibleText"
  >
    <template v-slot:content>{{ visibleText }}</template>
  </Dialog>
</template>
<script lang="ts">
import { ref } from "vue";
import { Dialog } from "../../../lib/index";
import { Button } from "../../../lib/index";
export default {
  components: {
    Dialog,
    Button,
  },
  setup() {
    const visible = ref(false);
    const visibleText = ref();
    const onChangeVisible = (value: String) => {
      visibleText.value = value;
      visible.value = true;
    };
    return {
      visible,
      visibleText,
      onChangeVisible,
    };
  },
};
</script>
