/* eslint no-shadow: ["error", { "allow": ["state", "getters"] }] */
/* eslint-disable no-param-reassign */

import axios from 'axios';

const state = {
  allGrowls: [],
  userGrowls: [],
};

const getters = {
  allGrowls: state => state.allGrowls,
  userGrowls: state => state.userGrowls,
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
  filterUserGrowls({ commit, state, rootState }) {
    const { username } = rootState.user;
    const userGrowls = state.allGrowls.filter(growl => growl.author.username === username);
    console.log(userGrowls);
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
};

export default {
  state,
  getters,
  mutations,
  actions,
};
