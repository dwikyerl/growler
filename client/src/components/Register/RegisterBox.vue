<template>
  <div class="box">
    <form @submit.prevent="submitRegister">
      <b-field>
        <div class="columns is-row-reverse">
          <div class="column is-1-tablet">
            <a @click="back">
              <b-icon icon="arrow-left" size="is-medium"></b-icon>
            </a>
          </div>
          <div class="column">
            <p class="is-size-4 has-text-centered">Register</p>
          </div>
        </div>
      </b-field>

      <b-field label="Display Name">
        <b-input
          placeholder="e.g John Doe"
          icon="account-location"
          minLength="6"
          v-model="name"
        ></b-input>
      </b-field>

      <b-field label="Username">
        <b-input
          icon="account"
          placeholder="e.g johndoe"
          minLength="6"
          v-model="username"
        >
        </b-input>
      </b-field>

      <b-field label="Email">
        <b-input
            placeholder="e.g johndoe@mail.com"
            type="email"
            icon="email"
            v-model="email">
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

      <b-field label="Password Confirmation">
        <b-input type="password"
          placeholder="Password Confirmation"
          password-reveal
          icon="lock"
          v-model="confirmPassword"
        >
        </b-input>
      </b-field>

      <b-field>
        <button class="button is-info is-fullwidth">
          <b-icon icon="account-plus"></b-icon>
          <span>Register</span>
        </button>
      </b-field>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'RegisterBox',
  data() {
    return {
      name: '',
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      isLoading: '',
    };
  },
  methods: {
    async submitRegister() {
      const registrationData = {
        name: this.name,
        username: this.username,
        email: this.email,
        password: this.password,
        confirmPassword: this.confirmPassword,
      };

      try {
        const { data } = await axios.post('http://localhost:5000/api/users/register', registrationData);
        console.log(data);
        this.$router.push({ name: 'home' });
      } catch (e) {
        console.log(e.response);
      }
    },
    back() {
      this.$router.go(-1);
    },
  },
};
</script>
