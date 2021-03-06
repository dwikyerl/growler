/* eslint no-shadow: ["error", { "allow": ["state"] }] */
/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
import axios from 'axios';

const state = {
  userId: '',
  name: '',
  username: '',
  email: '',
};

const getters = {
  name: state => state.name,
  username: state => state.username,
  email: state => state.email,
};

const mutations = {
  SET_USER_ID(state, userId) {
    state.userId = userId;
  },
  SET_NAME(state, name) {
    state.name = name;
  },
  SET_USERNAME(state, username) {
    state.username = username;
  },
  SET_EMAIL(state, email) {
    state.email = email;
  },
};

const actions = {
  async getUserInfo({ rootState, commit }) {
    const { token } = rootState.auth;
    const { data } = await axios.get('http://localhost:5000/api/users/me', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    commit('SET_USER_ID', data.user.id);
    commit('SET_NAME', data.user.name);
    commit('SET_USERNAME', data.user.username);
    commit('SET_EMAIL', data.user.email);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
