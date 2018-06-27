<template>
  <nav
    class="navbar is-primary has-shadow is-fixed-top"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar-brand">
      <router-link class="navbar-item" :to="{ name: 'home' }">
        <b-icon icon="panda"></b-icon>
        <span class="is-size-4">Growler</span>
      </router-link>

      <a
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        @click="toggleBurger"
        :class="{ 'is-active': isBurgerActive }">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div
      class="navbar-menu"
      v-if="isLoggedIn"
      :class="{ 'is-active': isBurgerActive }">
      <div class="navbar-start">
        <router-link :to="{ name: 'timeline' }" class="navbar-item">
          <b-icon icon="chart-timeline"></b-icon>
          <span>Timeline</span>
        </router-link>

        <router-link
          :to="{ name: 'profile', params: { username } }"
          v-if="username"
          class="navbar-item">
          <b-icon icon="account"></b-icon>
          <span>Profile</span>
        </router-link>
      </div>
      <div class="navbar-end">
        <div class="navbar-item has-dropdown is-hoverable">
          <div class="navbar-link">
            <div class="media">
              <div class="media-left">
                <figure class="image is-32x32">
                  <img src="https://bulma.io/images/placeholders/48x48.png" alt="Image">
                </figure>
              </div>
              <div class="media-right is-hidden-desktop">
                <p class="has-text-weight-bold is-size-6">{{ name }}</p>
                <p class="is-size-7">@{{ username }}</p>
              </div>
            </div>
          </div>

          <div class="navbar-dropdown is-right">
            <a @click.prevent="submitSignout" class="navbar-item">
              <b-icon icon="logout"></b-icon>
              <span>Signout</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'AppHeader',
  data() {
    return {
      isBurgerActive: false,
    };
  },
  computed: {
    ...mapGetters(['isLoggedIn', 'username', 'name']),
  },
  methods: {
    ...mapActions(['getUserInfo', 'signout']),
    toggleBurger() {
      this.isBurgerActive = !this.isBurgerActive;
    },
    submitSignout() {
      this.isBurgerActive = false;
      this.signout();
    },
  },
  created() {
    this.getUserInfo();
  },
};
</script>

<style lang="scss">
</style>

