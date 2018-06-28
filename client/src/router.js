import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Register from './views/Register.vue';
import Timeline from './views/Timeline.vue';
import Profile from './views/Profile.vue';

import store from './store/index';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      beforeEnter(to, from, next) {
        if (!store.state.auth.token) {
          next();
        } else {
          next({ name: 'timeline' });
        }
      },
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      beforeEnter(to, from, next) {
        if (!store.state.auth.token) {
          next();
        } else {
          next({ name: 'timeline' });
        }
      },
    },
    {
      path: '/timeline',
      name: 'timeline',
      component: Timeline,
      beforeEnter(to, from, next) {
        if (store.state.auth.token) {
          next();
        } else {
          next({ name: 'home' });
        }
      },
    },
    {
      path: '/profile/:username',
      name: 'profile',
      component: Profile,
      beforeEnter(to, from, next) {
        if (store.state.auth.token) {
          next();
        } else {
          next({ name: 'home' });
        }
      },
    },
  ],
  linkExactActiveClass: 'is-active',
});
