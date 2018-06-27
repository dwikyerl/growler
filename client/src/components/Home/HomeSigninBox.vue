<template>
  <div class="box">
    <form @submit.prevent="submitSignin">
      <b-field>
        <div class="has-text-centered">
          <b-icon icon="panda"></b-icon>
          <span class="is-size-4">Growler</span>
        </div>
      </b-field>

      <b-field label="Username or Email">
        <b-input
          size="is-medium"
          icon="account"
          placeholder="Username or Email"
          v-model="username"
        >
        </b-input>
      </b-field>

      <b-field label="Password">
        <b-input type="password"
          placeholder="Password"
          password-reveal
          icon="lock"
          v-model="password"
        >
        </b-input>
      </b-field>

      <b-field>
        <button class="button is-primary is-fullwidth">
          <b-icon icon="login"></b-icon>
          <span>Signin</span>
        </button>
      </b-field>

      <b-field>
        <p class="has-text-centered">
          <span>Not registered yet ? </span>
          <router-link :to="{ name: 'register' }">Register</router-link>
        </p>
      </b-field>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'HomeSigninBox',
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    ...mapActions(['signin']),
    submitSignin() {
      const loginData = {
        username: this.username,
        password: this.password,
      };

      this.signin(loginData);
    },
  },
};
</script>

