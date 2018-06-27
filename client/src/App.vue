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
  margin-right: .25em;
}

.columns {
  margin: 0 !important;
}

html, body {
  background-color: #ECF0F3;
  min-height: 100vh;
}
</style>
