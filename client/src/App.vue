<template>
  <div id="app">
    <AppHeader></AppHeader>
    <router-view/>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
  },
};
</script>


<style lang="scss">
.icon {
  margin-left: -.25em;
  margin-right: .25em;
}

html, body {
  background-color: #ECF0F3;
}
</style>
