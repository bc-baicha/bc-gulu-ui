<template>
  <template v-if="visible">
    <Teleport to="body">
      <div class="bc-dialog-overlay" @click="closeClickOverlay"></div>
      <div class="bc-dialog-wrapper">
        <div class="bc-dialog" ref="settingWidth">
          <header>
            {{ title }}
            <span @click="onClose" class="bc-dialog-close"></span>
          </header>
          <main ref="settingHeight">
            <slot name="content" />
          </main>
          <footer>
            <Button @click="onClose">{{ cancelText }}</Button>
            <Button :style="{ margin: 0 }" theme="primay" @click="onClose">{{
              okText
            }}</Button>
          </footer>
        </div>
      </div>
    </Teleport>
  </template>
</template>
<script lang="ts">
import { onMounted, ref, watchEffect } from "vue";
import "./styles/dialog.scss";
import Button from "./Button.vue";
export default {
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    onCloseOverlay: {
      type: Boolean,
      default: true,
    },
    title: {
      type: String,
      default: "标题",
    },
    cancelText: {
      type: String,
      default: "Cancel",
    },
    okText: {
      type: String,
      default: "OK",
    },
    width: Number,
    height: Number,
  },
  components: {
    Button,
  },
  setup(props, context) {
    const { width, height } = props;
    const settingWidth = ref<HTMLDivElement>();
    const settingHeight = ref<HTMLDivElement>();
    const onClose = () => {
      context.emit("update:visible", false);
    };
    const closeClickOverlay = () => {
      if (props.onCloseOverlay) {
        onClose();
      }
    };
    onMounted(() => {
      watchEffect(() => {
        if (width && settingWidth.value) {
          settingWidth.value.style.width = width + "px";
        }
        if (height && settingHeight.value) {
          settingHeight.value.style.maxHeight = height - 48 + "px";
          settingHeight.value.style.overflowX = "auto";
        }
      });
    });
    return {
      onClose,
      closeClickOverlay,
      settingWidth,
      settingHeight,
    };
  },
};
</script>
