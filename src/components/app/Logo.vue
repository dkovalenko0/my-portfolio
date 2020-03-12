<template>
  <div class="logo">
    <h1 class="logo__title">
      DK
    </h1>
  </div>
</template>

<script>
export default {
  name: "Logo"
};
</script>

<style scoped lang="scss">
.logo {
  font-family: "Alfa Slab One", cursive;
  color: #364048;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 125px;

  &__title {
    font-size: 48px;
    font-weight: 300;
    letter-spacing: -1.16px;
  }
}
</style>
