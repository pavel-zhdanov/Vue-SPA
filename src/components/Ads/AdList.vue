<template>
  <v-container>
    <v-layout row v-if="!loading && myAds.length !== 0">
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="text--secondary mb-3">My ads</h1>
        <v-card
          class="elevation-10 mb-4"
          v-for="item in myAds"
          :key="item.id"
        >
          <v-layout row>
            <v-flex xs-4>
              <v-card-media
                :src="item.imageSrc"
                height="150px"
              ></v-card-media>
            </v-flex>
            <v-flex xs-8>
              <v-card-text>
                <h2> {{item.title}}</h2>
                <p>{{item.description}}</p>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn class="white--text" color="grey darken-2" :to="'/ad/' + item.id">Open</v-btn>
              </v-card-actions>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>

    <v-layout v-else-if="!loading && myAds.length === 0">
      <v-flex xs12 class="text-xs-center">
        <h1 class="text--primary">You have no ads</h1>
      </v-flex>
    </v-layout>

    <v-layout v-else>
      <<v-progress-circular
      indeterminate
      color="grey darken-2"
      :size="200"
      :width="20"
    ></v-progress-circular>
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
      myAds() {
        return this.$store.getters.myAds;
      },
      loading() {
        return this.$store.getters.loading;
      },
    },
  };
</script>

<style scoped>

</style>

