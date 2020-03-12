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
    MainLayout
  }
};
</script>

<style lang="scss">
html {
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

body {
  font-family: "Roboto", sans-serif;
  margin: 0;
}

ul,
li {
  list-style: none;
  padding: 0;
  margin: 0;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  padding: 0;
  margin: 0;
}

figure {
  margin: 0;
}

a {
  text-decoration: none;
}
</style>
