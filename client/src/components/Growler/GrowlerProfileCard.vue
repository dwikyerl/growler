<template>
  <div class="card">
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-5">{{ name }}</p>
          <p class="subtitle is-7">@{{ username }}</p>
        </div>
      </div>

      <div class="content">
        <div class="level">
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">Growls</p>
              <p class="title is-5">{{ totalUserGrowls }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'GrowlerProfileCard',
  computed: {
    ...mapGetters(['username', 'name', 'totalUserGrowls']),
  },
};
</script>
