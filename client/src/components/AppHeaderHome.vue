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
    </div>
  </nav>
</template>

<script>
export default {
};
</script>
