<template>
  <div class="app-main-layout">
    <div class="main-layout-panel">
      <Logo />
      <Navbar />
      <Socials />
    </div>

    <main class="app-content">
      <div class="app-page">
        <router-view />
      </div>
    </main>
  </div>
</template>

<script>
import Logo from "../components/app/Logo";
import Navbar from "../components/app/Navbar";
import Socials from "../components/app/Socials";

export default {
  name: "main-layout",
  data: () => ({
    isOpen: true
  }),
  components: {
    Logo,
    Navbar,
    Socials
  }
};
</script>

<style scoped lang="scss">
.app-main-layout {
  display: flex;
}
.app-content {
  flex-basis: 84.4%;
}
.app-page {
  height: 100%;
}
.main-layout-panel {
  flex-basis: 15.6%;
  height: 100vh;
  background-color: #242b2e;
}
</style>
