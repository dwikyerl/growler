<template>
  <div class="container">
    <div class="columns">
      <div class="column is-3">
        <GrowlerProfileCard></GrowlerProfileCard>
      </div>
      <div class="column is-9">
        <GrowlerGrowlBox></GrowlerGrowlBox>
        <GrowlerGrowlCard
          v-for="growl in allGrowls"
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
    ...mapGetters(['allGrowls']),
  },
  methods: {
    ...mapActions(['getAllGrowls']),
  },
  created() {
    this.getAllGrowls();
  },
};
</script>
