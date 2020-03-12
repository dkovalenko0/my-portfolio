import firebase from "firebase/app";

export default {
  state: {
    image: null
  },
  actions: {
    async fetchImage({ commit }, img) {
      let pagesImg = null;
      let url = await firebase
        .storage()
        .ref("images")
        .child("pages")
        .child(img)
        .getDownloadURL();

      pagesImg = url;
      commit("updatePagesImg", pagesImg);
    }
  },
  mutations: {
    updatePagesImg(state, pagesImg) {
      state.image = pagesImg;
    }
  },
  getters: {
    getPagesImg(state) {
      return state.image;
    }
  }
};
