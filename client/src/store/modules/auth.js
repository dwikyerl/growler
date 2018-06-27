/* eslint no-shadow: ["error", { "allow": ["state"] }] */
/* eslint-disable no-param-reassign */
import axios from 'axios';
import router from './../../router';

const state = {
  token: window.localStorage.getItem('token') || null,
};

const getters = {
  isLoggedIn: state => state.token !== null,
};

const mutations = {
  SET_TOKEN(state, token) {
    state.token = token;
  },
};

const actions = {
  signout({ commit }) {
    commit('SET_TOKEN', null);
    window.localStorage.removeItem('token');
    router.push({ name: 'home' });
  },
  async signin({ commit, dispatch }, loginData) {
    try {
      const { data } = await axios.post('http://localhost:5000/api/signin', loginData);
      commit('SET_TOKEN', data.token);
      window.localStorage.setItem('token', data.token);
      await dispatch('getUserInfo', null, { root: true });
      router.push({ name: 'timeline' });
    } catch (e) {
      if (e.response) {
        console.log(e.response);
      }
    }
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
