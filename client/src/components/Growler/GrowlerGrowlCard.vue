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
            ·<small> {{ createdTime }} </small>
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
            <a @click="() => likeGrowl({ growlId: growl._id, likeThisGrowl })" class="level-item">
              <span class="icon is-small"><b-icon :icon="likeIcon"></b-icon></span>
            </a>
          </div>
        </nav>
      </div>
      <div class="media-right" v-if="username === this.growl.author.username">
        <b-dropdown position="is-bottom-left">
            <a slot="trigger">
                <b-icon icon="menu-down"></b-icon>
            </a>

            <b-dropdown-item>
                <div class="is-flex">
                  <b-icon icon="pencil"></b-icon>
                  <span>Edit</span>
                </div>
            </b-dropdown-item>

            <b-dropdown-item @click="() => deleteGrowl(growl._id)">
                <div class="is-flex">
                  <b-icon icon="delete"></b-icon>
                  <span>Delete</span>
                </div>
            </b-dropdown-item>

        </b-dropdown>
      </div>
    </article>
  </div>
</template>

<script>
import moment from 'moment';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'GrowlerGrowlCard',
  props: {
    growl: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapGetters(['username']),
    createdTime() {
      return moment(this.growl.createdAt).fromNow();
    },
    likeThisGrowl() {
      const { likes } = this.growl;
      const hasAlreadyLiked = likes.some(like => like.user.username === this.username);
      if (hasAlreadyLiked) {
        return true;
      } else {
        return false;
      }
    },
    likeIcon() {
      if (this.likeThisGrowl) {
        return 'heart';
      } else {
        return 'heart-outline';
      }
    }
  },
  methods: {
    ...mapActions(['deleteGrowl', 'likeGrowl']),
  },
};
</script>
