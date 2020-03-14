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
h6,
p {
  padding: 0;
  margin: 0;
}

figure {
  margin: 0;
}

a {
  text-decoration: none;
}

.active {
  background-color: #1ab5b3 !important;
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.1) 0%,
    rgba(255, 255, 255, 0.1) 100%
  ) !important;
}

.page__title {
  color: #000000;
  font-size: 24px;
  font-weight: 400;
  line-height: 26px;
}

.page__text {
  margin-top: 10px;
  max-width: 720px;
  font-size: 18px;
  font-weight: 400;
  line-height: 30px;
}
</style>
