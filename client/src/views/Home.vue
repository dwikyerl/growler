<template>
  <section class="home has-background-info">
    <div class="home__columns columns">
      <div class="home__columns-right column is-6-desktop">
        <HomeSigninBox></HomeSigninBox>
      </div>
      <div class="home__columns-left column is-6-desktop has-text-white">
        <div class="section">
          <b-field>
            <b-icon icon="account-multiple" size="is-medium"></b-icon>
            <span class="hero-message is-size-5">Connecting with your other people</span>
          </b-field>
          <b-field>
            <b-icon icon="magnify" size="is-medium"></b-icon>
            <span class="hero-message is-size-5">Find your interest</span>
          </b-field>
          <b-field>
            <b-icon icon="earth" size="is-medium"></b-icon>
            <span class="hero-message is-size-5">Explore everthing</span>
          </b-field>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import HomeSigninBox from '@/components/Home/HomeSigninBox.vue';

export default {
  name: 'home',
  components: {
    HomeSigninBox,
  },
};
</script>

<style lang="scss">
@import "@/assets/sass/main.scss";

.home {
  height: 100vh;

  &__columns {
    height: 100%;
    margin-top: 0 !important;
    flex-direction: row-reverse;
    &-left {
      width: 100%;
      display: flex !important;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      text-align: right;
    }

    &-right {
      background-color: $light;
      display: flex !important;
      justify-content: center;
      align-items: center;
    }
  }
}

.hero-message {
  margin-left: 1rem;
}
</style>

