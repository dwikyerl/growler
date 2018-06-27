<template>
  <div id="app">
    <AppHeaderHome></AppHeaderHome>
    <router-view/>
  </div>
</template>

<script>
import AppHeaderHome from '@/components/AppHeaderHome.vue';

export default {
  name: 'App',
  components: {
    AppHeaderHome,
  },
};
</script>


<style lang="scss">
</style>
