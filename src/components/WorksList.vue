<template>
  <div>
    <Loader v-if="loading" />
    <div class="works__list" v-else>
      <div class="works__item" v-for="(work, index) in works" :key="index">
        <figure>
          <router-link
            :to="{ path: '/' + work.name /*params: { name: work.name }*/ }"
            :style="{ backgroundImage: `url('${work.src}')` }"
          >
            <figcaption>
              <h2>{{ work.name }}</h2>
              <h3>{{ work.postTitle }}</h3>
            </figcaption>
          </router-link>
        </figure>
      </div>
      <div class="works__filter">
        <img src="../assets/icons/filter.svg" alt="filter" @click="showFilter" />
        <ul v-if="showFilters">
          <li>
            <a href="#" @click.prevent="getAllWorks">All Works</a>
          </li>
          <li>
            <a href="#" @click.prevent="getHTMLCSS">HTML/CSS</a>
          </li>
          <li>
            <a href="#" @click.prevent="getJS">JavaScript</a>
          </li>
          <li>
            <a href="#" @click.prevent="getVue">Vue</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";

export default {
  name: "WorksList",
  data: () => ({
    works: null,
    loading: true,
    showFilters: false
  }),
  computed: mapGetters(["getWorks"]),
  methods: {
    ...mapActions(["fetchWorks"]),
    getAllWorks() {
      this.works = this.getWorks;
    },
    getHTMLCSS() {
      this.works = Object.values(this.getWorks).filter(
        r => r.technologies.indexOf("HTML/CSS") !== -1
      );
    },
    getJS() {
      this.works = Object.values(this.getWorks).filter(
        r => r.technologies.indexOf("JavaScript") !== -1
      );
    },
    getVue() {
      this.works = Object.values(this.getWorks).filter(
        r => r.technologies.indexOf("Vue") !== -1
      );
    },
    showFilter() {
      this.showFilters = !this.showFilters;
    }
  },
  async created() {
    await this.fetchWorks();
    this.works = this.getWorks;
    this.loading = false;
  }
};
</script>

<style scoped lang="scss">
.works__list {
  display: flex;
  flex-wrap: wrap;
  position: relative;

  .works__filter {
    position: absolute;
    img {
      cursor: pointer;
      display: inline-block;
      width: 25px;
      height: 25px;
      margin: 12px;
    }
    ul {
      margin-left: 12px;
      li {
        a {
          text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);
          color: #000;
          font-size: 16px;
          font-weight: 400;
          line-height: 24px;
          transition: all 0.3s linear;

          &:hover {
            color: #fff;
          }
        }
      }
    }
  }

  .works__item {
    figure {
      position: relative;
      overflow: hidden;
      text-align: center;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
      transition: all 0.3s ease-in-out;

      &:hover figcaption {
        background-color: rgba(#1ab5b3, 1);
        background-image: linear-gradient(
          to top,
          rgba(0, 0, 0, 0.1) 0%,
          rgba(255, 255, 255, 0.1) 100%
        );
      }

      &:hover a {
        transform: scale(1.1);
      }

      a {
        transition: all 0.3s ease-in-out;
        display: block;
        width: 405px;
        height: 310px;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;

        figcaption {
          transition: all 0.3s ease-in-out;
          color: #ffffff;
          position: absolute;
          background-color: rgba(#1ab5b3, 0.6);
          background-image: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.1) 0%,
            rgba(255, 255, 255, 0.1) 100%
          );
          left: 40px;
          right: 40px;
          display: inline-block;
          transform: skew(-10deg) rotate(-10deg) translate(0, -50%);
          padding: 12px 5px;
          margin: 0;
          top: 50%;
          text-transform: uppercase;

          h2 {
            font-weight: 800;
          }
          h3 {
            font-size: 12px;
            font-weight: 400;
            line-height: 30px;
          }
        }
      }
    }
  }
}
</style>
