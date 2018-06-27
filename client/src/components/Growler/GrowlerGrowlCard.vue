<template>
  <div class="box">
    <article class="media">
      <figure class="media-left">
        <p class="image is-64x64">
          <img src="https://bulma.io/images/placeholders/128x128.png">
        </p>
      </figure>
      <div class="media-content">
        <div class="content">
          <p>
            <strong>{{ growl.author.name || 'Anonymous' }}</strong>
            <small> @{{ growl.author.username }} </small>
            ·<small> 31m </small>
            <br>
            <span style="white-space: pre;">{{ growl.content }}</span>
          </p>
        </div>
        <nav class="level is-mobile">
          <div class="level-left">
            <a class="level-item">
              <span class="icon is-small"><b-icon icon="reply"></b-icon></span>
            </a>
            <a class="level-item">
              <span class="icon is-small"><b-icon icon="twitter-retweet"></b-icon></span>
            </a>
            <a class="level-item">
              <span class="icon is-small"><b-icon icon="heart-outline"></b-icon></span>
            </a>
          </div>
        </nav>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: 'GrowlerGrowlCard',
  props: {
    growl: {
      type: Object,
      required: true,
    },
  },
};
</script>
