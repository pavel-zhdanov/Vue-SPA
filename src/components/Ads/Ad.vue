<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
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
            <v-btn flat>Edit</v-btn>
            <v-btn raised color="grey darken-2" class="white--text">Buy</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
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
    },
    props: ['id'],
  };
</script>

<style scoped>

</style>

