<template>
  <v-container>
    <v-layout row>
      <v-flex xs12>
        <v-card>
          <v-card-media
            src="https://cdn.vuetifyjs.com/images/carousel/planet.jpg"
            height="300px"
          >
          </v-card-media>
          <v-card-text>
            <h1>Lorem ipsum dolor.</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, unde.</p>
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
  };
</script>

<style scoped>

</style>

