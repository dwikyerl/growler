/* eslint no-shadow: ["error", { "allow": ["state"] }] */
/* eslint-disable no-param-reassign */
// import axios from 'axios';

const state = {
  name: '',
  username: '',
  email: '',
};

const getters = {
  name: state => state.name,
  username: state => state.username,
};

const mutations = {
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
};

export default {
  state,
  getters,
  mutations,
  actions,
};
