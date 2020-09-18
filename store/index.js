/* eslint-disable no-shadow */
export const state = () => ({
  repositoryList: []
});

export const mutations = {
  SET_LIST(state, payload) {
    state.repositoryList = payload;
  }
};

export const actions = {
  async GET_DATA_REPOSITORIES({ commit }, string) {
    try {
      const getData = await this.$axios.$get(`https://api.github.com/users/Ratio/repos?sort=${string}`);
      commit("SET_LIST", getData);
    } catch (e) {
      throw new Error(e)
    }
  },

  async GET_DATA_FILTER({commit}, str) {
    try {
      const getData = await this.$axios.$get(`https://api.github.com/repos/Ratio/${str}`);
      const data = [];
      data.push(getData);
      console.log(data);
      commit("SET_LIST", data);
    } catch (e) {
      throw new Error(e)
    }
  }
};
export const getters = {};
