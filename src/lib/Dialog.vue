<template>
  <template v-if="visible">
    <Teleport to="body">
      <div class="bc-dialog-overlay" @click="closeClickOverlay"></div>
      <div class="bc-dialog-wrapper">
        <div class="bc-dialog" ref="settingWidth">
          <header v-if="!info">
            {{ title }}
            <span @click="onClose" class="bc-dialog-close"></span>
          </header>
          <main ref="settingHeight">
            <svg v-if="info">
              <use :xlink:href="typeName(typeInfo)"></use>
            </svg>
            <slot name="content" />
          </main>
          <footer>
            <Button
              :style="{ margin: 0 }"
              @click="onClose"
              theme="primay"
              v-if="info"
              >知道了</Button
            >
            <div v-else>
              <Button @click="onClose">{{ cancelText }}</Button>
              <Button :style="{ margin: 0 }" theme="primay" @click="onClose">{{
                okText
              }}</Button>
            </div>
          </footer>
        </div>
      </div>
    </Teleport>
  </template>
</template>
<script lang="ts">
import { computed, onMounted, ref, watchEffect } from "vue";
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
    info: {
      type: Boolean,
      default: false,
    },
    typeInfo: {
      type: String,
      default: "info",
    },
    width: Number,
    height: Number,
  },
  components: {
    Button,
  },
  setup(props, context) {
    const { width, height, typeInfo } = props;
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
    const typeName = (value) => {
      return `#icon-${value}`;
    };
    return {
      onClose,
      closeClickOverlay,
      settingWidth,
      settingHeight,
      typeName,
    };
  },
};
</script>
