<template>
  <div class="layout">
    <Topnav :showColor="true" />
    <div class="main_wrap">
      <Menu />
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>
<script lang="ts">
import Topnav from "../components/Topnav.vue";
import Menu from "../components/Menu.vue";
export default {
  components: {
    Topnav,
    Menu,
  },
};
</script>
<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  .main_wrap {
    display: flex;
    main {
      flex-grow: 1;
      height: calc(100vh - 85px);
      overflow: auto;
      background-color: #fff;
      margin: 5px 0 0 5px;
      padding-left: 20px;
    }
    @media (max-width: 500px) {
      main {
        margin-left: 0px;
        padding-left: 20px;
      }
    }
  }
}
</style>
