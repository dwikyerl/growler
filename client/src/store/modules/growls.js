/* eslint no-shadow: ["error", { "allow": ["state", "getters"] }] */
/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */

import axios from 'axios';

const state = {
  allGrowls: [],
  userGrowls: [],
};

const getters = {
  allGrowls: state => state.allGrowls,
  allGrowlsByCreated: state => state.allGrowls.sort((a, b) => a.createdAt < b.createdAt),
  userGrowls: state => state.userGrowls,
  userGrowlsByCreated: state => state.userGrowls.sort((a, b) => a.createdAt < b.createdAt),
  totalUserGrowls: state => state.userGrowls.length,
};

const mutations = {
  SET_ALL_GROWLS(state, growls) {
    state.allGrowls = growls;
  },
  SET_USER_GROWLS(state, growls) {
    state.userGrowls = growls;
  },
  ADD_GROWL(state, growl) {
    state.allGrowls = [...state.allGrowls, growl];
  },
  ADD_USER_GROWL(state, growl) {
    state.userGrowls = [...state.userGrowls, growl];
  },
  UPDATE_GROWL(state, updatedGrowl) {
    state.allGrowls = state.allGrowls.map((growl) => {
      if (growl._id === updatedGrowl._id) {
        return updatedGrowl;
      }
      return growl;
    });
  },
  DELETE_GROWL(state, growlId) {
    state.allGrowls = state.allGrowls.filter(growl => growl._id !== growlId);
  },
  UNLIKE_GROWL(state, { growlId, likeId }) {
    state.allGrowls = state.allGrowls.map((growl) => {
      if (growl._id === growlId) {
        growl.likes = growl.likes.filter(like => like._id !== likeId);
      }
      return growl;
    });
  },
  LIKE_GROWL(state, { growlId, like }) {
    state.allGrowls = state.allGrowls.map((growl) => {
      if (growl._id === growlId) {
        growl.likes = [...growl.likes, like];
      }
      return growl;
    });
  },
};

const actions = {
  async getAllGrowls({ commit, rootState, dispatch }) {
    const { token } = rootState.auth;
    const { data } = await axios.get('http://localhost:5000/api/growls', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    commit('SET_ALL_GROWLS', data.growls);
    dispatch('filterUserGrowls');
  },
  async getGrowlById({ commit, rootState, dispatch }, growlId) {
    const { token } = rootState.auth;
    const { data } = await axios.get(`http://localhost:5000/api/growls/${growlId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    commit('UPDATE_GROWL', data.growl);
    dispatch('filterUserGrowls');
  },
  filterUserGrowls({ commit, state, rootState }) {
    const { username } = rootState.user;
    const userGrowls = state.allGrowls.filter(growl => growl.author.username === username);
    commit('SET_USER_GROWLS', userGrowls);
  },
  async postGrowl({ commit, rootState }, growlData) {
    const { token } = rootState.auth;
    const { data } = await axios.post('http://localhost:5000/api/growls', growlData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    commit('ADD_GROWL', data.growl);
    commit('ADD_USER_GROWL', data.growl);
  },
  async deleteGrowl({ commit, rootState, dispatch }, growlId) {
    const { token } = rootState.auth;
    try {
      const { data } = await axios.delete(`http://localhost:5000/api/growls/${growlId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      commit('DELETE_GROWL', data.deletedGrowl._id);
      dispatch('filterUserGrowls');
    } catch (e) {
      console.log(e.response);
    }
  },
  async addLike({ rootState, dispatch }, growlId) {
    const { token } = rootState.auth;
    const url = `http://localhost:5000/api/growls/${growlId}/likes`;
    try {
      await axios.post(url, {}, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // commit('LIKE_GROWL', { growlId, like: data.like });
      dispatch('getGrowlById', growlId);
    } catch (e) {
      console.log(e.response);
    }
  },
  async removeLike({ rootState, dispatch }, growlId) {
    const { token } = rootState.auth;
    const url = `http://localhost:5000/api/growls/${growlId}/likes`;
    try {
      await axios.delete(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // commit('UNLIKE_GROWL', { growlId, likeId: data.deletedLike._id });
      dispatch('getGrowlById', growlId);
    } catch (e) {
      console.log(e.response);
    }
  },
  likeGrowl({ dispatch }, { growlId, likeThisGrowl }) {
    console.log(likeThisGrowl);
    if (likeThisGrowl) {
      dispatch('removeLike', growlId);
    } else {
      dispatch('addLike', growlId);
    }
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
