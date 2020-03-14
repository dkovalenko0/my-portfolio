import firebase from "firebase/app";

export default {
  state: {
    works: []
  },
  actions: {
    async fetchWorks({ commit }) {
      const works = [];
      const fbVal = (
        await firebase
          .database()
          .ref("works")
          .once("value")
      ).val();
      works.push(fbVal);
      commit("updateWorks", works);
    }
  },
  mutations: {
    updateWorks(state, works) {
      state.works = works[0];
    }
  },
  getters: {
    getWorks(state) {
      return state.works;
    }

    /*workByTitle(state) {
      return workTitle => {
        for (let i in state.works) {
          if (i.title === workTitle) {
            return state.works;
          }
        }
        return state.works.find(work => work.title === workTitle);
      };
    }*/
  }
};
