<template>
  <div id="app">
    <component :is="layout" />
  </div>
</template>

<script>
import MainLayout from "./layouts/MainLayout";

export default {
  name: "app",

  computed: {
    layout() {
      return this.$route.meta.layout + "-layout";
    }
  },
  components: {
    Logo,
    MainLayout
  }
};
</script>

<style lang="scss">
.app {
  font-family: "Roboto", sans-serif;
}
</style>
