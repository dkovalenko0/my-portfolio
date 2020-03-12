<template>
  <div>
    <Loader v-if="loading" />
    <div
      class="home"
      :style="{ backgroundImage: `url(${getPagesImg})` }"
      v-else
    >
      <div class="content">
        <h1 class="title">Dima Kovalenko.</h1>

        <div class="post-title">
          <div class="line-lg"></div>
          FrontEnd Developer
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Home",
  data: () => ({
    loading: true
  }),
  computed: mapGetters(["getPagesImg"]),
  methods: mapActions(["fetchImage"]),
  async mounted() {
    await this.fetchImage("home.jpg");
    this.loading = false;
  }
};
</script>

<style scoped lang="scss">
.home {
  width: 100%;
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: #fff;
  display: flex;
  align-items: center;
}
.content {
  margin-left: 50px;
}
.title {
  font-size: 120px;
  font-weight: 700;
  letter-spacing: -3px;
}
.post-title {
  display: flex;
  align-items: center;
  font-size: 60px;
  font-weight: 700;
  letter-spacing: -1.5px;
}
.line-lg {
  margin-right: 45px;
  width: 70px;
  height: 3px;
  background-color: #ffffff;
}
</style>
