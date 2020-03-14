import firebase from "firebase/app";

export default {
  state: {
    works: []
  },
  actions: {
    async fetchWorkImages({ commit }, work) {
      const worksImg = [];
      try {
        await firebase
          .storage()
          .ref("images")
          .child("works")
          .child(work)
          .child("screens")
          .listAll()
          .then(function(result) {
            result.items.forEach(function(imgRef) {
              imgRef.getDownloadURL().then(function(url) {
                worksImg.push(url);
                commit("updateWorksImg", worksImg);
              });
            });
          });
      } catch (e) {}
    }
  },
  mutations: {
    updateWorksImg(state, works) {
      state.works = works;
    }
  },
  getters: {
    getWorkImages(state) {
      return state.works.sort();
    }
  }
};
