<template>
  <form @submit.prevent="submitGrowl" class="growl-box box is-info">
    <b-field>
      <div class="control">
        <textarea
        v-autosize="growl"
        v-model="growl"
        class="textarea is-primary"
        type="text"
        placeholder="What's on your mind?"
        minlength="1"
        maxlength="255"
        style="resize: none;"
        rows="3">
        </textarea>
      </div>
    </b-field>

    <b-field>
      <div class="level">
        <b-tooltip label="Upload a image" position="is-bottom">
          <b-field class="file">
            <b-upload v-model="files">
                <a class="button is-primary">
                    <b-icon icon="image"></b-icon>
                </a>
            </b-upload>
            <span class="file-name"
                v-if="files && files.length">
                {{ files[0].name }}
            </span>
          </b-field>
        </b-tooltip>
        <button class="button is-info is-pulled-right">
          Growl
        </button>
      </div>
    </b-field>
  </form>
</template>

<script>
import { mapActions } from 'vuex';
import autosize from '@/directives/autosize';

export default {
  name: 'GrowlerGrowlBox',
  data() {
    return {
      growl: '',
      files: [],
    };
  },
  directives: {
    autosize,
  },
  methods: {
    ...mapActions(['postGrowl']),
    submitGrowl() {
      const growlData = { content: this.growl };
      this.growl = '';
      this.postGrowl(growlData);
    },
  },
};
</script>

<style lang="scss">
.growl-box {
  background-color: #eee !important;
}
</style>
