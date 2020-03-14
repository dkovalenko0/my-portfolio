import Vue from "vue";
import Vuex from "vuex";
import works from "./modules/works";
import image from "./modules/image";
import images from "./modules/images";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    works,
    image,
    images
  }
});
