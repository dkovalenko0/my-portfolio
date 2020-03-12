<template>
  <div class="app-main-layout">
    <div class="main-layout-panel">
      <Logo />
      <Navbar />
      <WorksFilter />
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
import WorksFilter from "../components/app/WorksFilter";
import Socials from "../components/app/Socials";

export default {
  name: "main-layout",
  data: () => ({
    isOpen: true
  }),
  components: {
    Logo,
    Navbar,
    WorksFilter,
    Socials
  }
};
</script>

<style scoped lang="scss">
.app-main-layout {
  display: flex;
}
.main-layout-panel {
  flex-basis: 300px;
  height: 100vh;
  background-color: #242b2e;
  box-shadow: 10px 1px 14px 0px rgba(0, 0, 0, 0.6);
}
</style>
