<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <v-card v-if="!loading">
          <v-card-media
            :src="ad.imageSrc"
            height="300px"
          >
          </v-card-media>
          <v-card-text>
            <h1>{{ad.title}}</h1>
            <p>{{ad.description}}</p>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <app-edit-ad-modal :ad="ad" v-if="isOwner"></app-edit-ad-modal>
            <app-buy-modal :ad="ad"></app-buy-modal>
          </v-card-actions>
        </v-card>
        <div v-else class="text-xs-center">
          <v-progress-circular
            indeterminate
            color="primary"
            :size="200"
            :width="20"
          ></v-progress-circular>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import EditAdModal from './EditAdModal';

  export default {
    data() {
      return {
      };
    },
    computed: {
      ad() {
        const id = this.id;
        return this.$store.getters.adById(id);
      },
      loading() {
        return this.$store.getters.loading;
      },
      isOwner() {
        return this.ad.ownerId === this.$store.getters.user.id;
      },
    },
    props: ['id'],
    components: {
      appEditAdModal: EditAdModal,
    },
  };
</script>

<style scoped>

</style>

