<template>
  <div>
    <Loader v-if="loading" />
    <div class="single-work" v-else>
      <div class="single-work__leftside">
        <swiper class="swiper" :options="swiperOption">
          <swiper-slide
            v-for="img in getWorkImages"
            :key="img"
            :style="{ backgroundImage: `url(${img})` }"
          ></swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
        <div class="single-work__descr">
          <div class="page__title">{{ getWork.title }}</div>
          <div class="page__text">{{ getWork.description }}</div>
        </div>
      </div>
      <div class="single-work__rightside">
        <div class="single-work__info">
          <div class="page__title">Project Info</div>
          <ul>
            <!--<li>
            <img
              src="@/assets/icons/likes.svg"
              alt="likes"
              @click="like"
              v-if="!isLiked"
            />
            <img
              src="@/assets/icons/isLiked.svg"
              alt="likes"
              @click="like"
              v-else
            />
            {{ getWork.likes }}
            </li>-->
            <li>
              <img src="@/assets/icons/date.svg" alt="date" />
              {{ getWork.date }}
            </li>
          </ul>
        </div>
        <div class="single-work__tags">
          <div class="page__title">Technologies</div>
          <ul>
            <li v-for="tech in getWork.technologies.split(' ')" :key="tech">
              <a href="#">{{tech}}</a>
            </li>
          </ul>
        </div>
        <!-- <div class="single-work__features">
          <div class="page__title">Project Features</div>
          <ul>
            <li>Responsive Layout</li>
            <li>Clean & Commented Code</li>
            <li>Highly Customizable</li>
          </ul>
        </div>-->
        <div class="single-work__demo">
          <div class="page__title">Demo</div>
          <a :href="getWork.url" target="_blank">Click to see a demo of this work!</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  name: "SingleWork",
  data: () => ({
    works: [],
    loading: true,
    isLiked: false,
    swiperOption: {
      spaceBetween: 30,
      // effect: "flip",
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      }
    }
  }),
  props: ["name"],
  computed: {
    ...mapGetters(["getWorks", "getWorkImages"]),
    getWork() {
      return this.getWorks[this.name];
      /*return Object.entries(this.getWorks).filter(
          el => el[0] === this.title
      )[0][1];*/
    }
  },
  methods: {
    ...mapActions(["fetchWorks", "fetchWorkImages"])
    /*like() {
      this.isLiked = !this.isLiked;
      if (this.isLiked) {
        this.getWork.likes += 1;
      } else if (!this.isLiked && this.getWork.likes > 0) {
        this.getWork.likes -= 1;
      }
    }*/
  },
  /*computed: {
    work() {
      const title = this.title;
      return this.$store.getters.workByTitle(title);
    }
  }*/
  async mounted() {
    await this.fetchWorks();
    await this.fetchWorkImages(`${this.name}`);

    this.loading = false;
  },
  components: {
    swiper,
    swiperSlide
  }
};
</script>

<style scoped lang="scss">
.single-work {
  padding: 30px;
  height: inherit;
  color: #a3a3a3;
  background-color: darken(#fff, 0.7);
  display: flex;

  &__leftside {
    padding-right: 30px;
    border-right: 1px solid rgba(#a3a3a3, 0.7);
  }

  &__rightside {
    padding-left: 30px;
  }

  &__descr {
    margin-top: 20px;
  }

  &__info {
    ul {
      margin-top: 15px;
      li {
        color: #848484;
        font-size: 14px;
        font-weight: 400;
        line-height: 30px;
        padding-bottom: 10px;
        border-bottom: 1px solid rgba(#a3a3a3, 0.2);

        display: flex;
        align-items: center;

        img {
          margin-right: 15px;
          width: 20px;
          height: auto;
        }
      }
    }
  }

  &__tags {
    margin-top: 30px;
    ul {
      margin-top: 20px;
      display: flex;
      li {
        &:not(:last-child) {
          margin-right: 10px;
        }
        a {
          color: #a3a3a3;
          font-size: 13px;
          font-weight: 300;
          line-height: 32px;

          padding: 14px 18px 12px 22px;
          border-radius: 12px;
          border: 1px solid #dbdbdb;
        }
      }
    }
  }

  &__features {
    margin-top: 30px;
    ul {
      margin-top: 15px;
      li {
        list-style: disc inside;
        color: #848484;
        font-size: 14px;
        font-weight: 400;
        line-height: 30px;
      }
    }
  }

  &__demo {
    margin-top: 30px;
    a {
      display: inline-block;
      margin-top: 15px;
      color: #1ab5b3;
    }
  }
}

/*.isLiked {
  background-color: #1ab5b3;
}*/

.swiper-container {
  margin-left: 0;
  margin-right: 0;
}

.swiper {
  width: 720px;
  height: 560px;
  .swiper-slide {
    background-position: center;
    background-size: 720px;
    background-repeat: no-repeat;
  }
}
</style>
