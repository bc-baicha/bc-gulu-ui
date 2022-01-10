<template>
  <div class="checkbox-wrap" @click="disable ? '' : onChoose()">
    <div
      class="choose"
      :class="{ selected: choose, disable: disable }"
      :style="{ borderColor: disable ? '#ddd' : '' }"
    >
      <svg v-if="choose">
        <use xlink:href="#icon-duihao"></use>
      </svg>
    </div>
    <div class="textName">Apple</div>
  </div>
</template>
<script lang="ts">
export default {
  props: {
    choose: {
      type: Boolean,
      default: false,
    },
    disable: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, context) {
    const onChoose = () => {
      context.emit("update:choose", !props.choose);
    };
    return { onChoose };
  },
};
</script>
<style lang="scss">
$c: #1890ff;
.checkbox-wrap {
  display: flex;
  align-items: center;
  cursor: pointer;
}
.choose {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 14px;
  height: 14px;
  border: solid 1px #ccc;
  border-radius: 2px;
  svg {
    width: 14px;
    height: 14px;
  }
  &.selected {
    background-color: $c;
    border-color: $c;
    animation: boxShadowprimay 0.5s linear 1;
  }
  &.disable {
    background-color: #ddd;
    border-color: #ddd;
    cursor: not-allowed;
  }
}
.choose:hover {
  border-color: $c;
}
.textName {
  font-size: 14px;
  margin-left: 5px;
}
@keyframes boxShadowprimay {
  0% {
    box-shadow: $c 0px 0px 1px;
    transform: scale(0, 0);
  }
  25% {
    box-shadow: $c 0px 0px 3px;
    transform: scale(0.5, 0.5);
  }
  50% {
    box-shadow: $c 0px 0px 5px;
    transform: scale(1.1, 1.1);
  }
  75% {
    box-shadow: $c 0px 0px 6px;
    transform: scale(1.2, 1.2);
  }
  100% {
    box-shadow: $c 0px 0px 1px;
    transform: scale(1, 1);
  }
}
</style>
