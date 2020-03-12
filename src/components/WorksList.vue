<template>
  <div>
    <div class="works__list">
      <Loader v-if="loading" />
      <div class="works__item" v-for="work in getWorks" v-else>
        <figure>
          <a
            :href="work.url"
            target="_blank"
            :style="{ backgroundImage: `url('${work.src}')` }"
          >
            <!--            <img :src="work.src" alt="" />-->

            <figcaption>
              <h2>{{ work.title }}</h2>
              <p>{{ work.postTitle }}</p>
            </figcaption>
          </a>
        </figure>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "WorksList",
  data: () => ({
    loading: true
  }),
  computed: mapGetters(["getWorks"]),
  methods: mapActions(["fetchWorks"]),

  async mounted() {
    await this.fetchWorks();
    this.loading = false;
  }
};
</script>

<style scoped lang="scss">
.works__list {
  background-color: #000;
  .works__item {
    figure {
      position: relative;
      a {
        display: block;
        width: 405px;
        height: 310px;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;

        /*img {
          width: 405px;
          height: auto;
        }*/
        figcaption {
          color: #ffffff;
          text-align: center;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          h2 {
            font-size: 24px;
            font-weight: 300;
            line-height: 30px;
          }
          p {
            font-size: 12px;
            font-weight: 300;
            line-height: 30px;
          }
        }
      }
    }
  }
}
</style>
