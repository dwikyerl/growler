<template>
  <div class="container">
    <div class="columns">
      <div class="column is-3">
        <GrowlerProfileCard></GrowlerProfileCard>
        <div class="section">
          <div class="columns is-centered has-text-centered">
            <button @click="getAllGrowls" class="button is-danger">Refresh Timeline</button>
          </div>
        </div>
      </div>
      <div class="column is-9">
        <GrowlerGrowlBox></GrowlerGrowlBox>
        <GrowlerGrowlCard
          v-for="growl in growls"
          :key="growl._id"
          :growl="growl">
        </GrowlerGrowlCard>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import GrowlerProfileCard from '@/components/Growler/GrowlerProfileCard.vue';
import GrowlerGrowlBox from '@/components/Growler/GrowlerGrowlBox.vue';
import GrowlerGrowlCard from '@/components/Growler/GrowlerGrowlCard.vue';

export default {
  name: 'timeline',
  components: {
    GrowlerProfileCard,
    GrowlerGrowlBox,
    GrowlerGrowlCard,
  },
  computed: {
    ...mapGetters(['allGrowls', 'allGrowlsByCreated']),
    growls() {
      return this.allGrowlsByCreated;
    },
  },
  methods: {
    ...mapActions(['getAllGrowls']),
  },
  created() {
    this.getAllGrowls();
  },
};
</script>
