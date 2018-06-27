<template>
  <section class="register hero is-info is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-8-tablet is-7-desktop is-6-widescreen">
            <RegisterBox></RegisterBox>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import RegisterBox from '@/components/Register/RegisterBox.vue';

export default {
  name: 'Register',
  components: {
    RegisterBox,
  },
};
</script>

<style lang="scss">
.register {
  padding-top: 3.4rem;
}
</style>

