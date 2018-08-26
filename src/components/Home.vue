<template>
  <div v-if="!loading">
    <v-container fluid>
      <v-layout row>
        <v-flex xs12>
          <v-carousel>
            <v-carousel-item
              v-for="item in promoAds"
              :key="item.id"
              :src="item.imageSrc"
              reverse-transition="fade"
              transition="fade"
            >
              <div class="carousel-link">
                <v-btn class="white--text" color="grey darken-2" :to="'/ad/' + item.id">{{item.title}}</v-btn>
              </div>
            </v-carousel-item>
          </v-carousel>
        </v-flex>
      </v-layout>
    </v-container>

    <v-container grid-list-lg>
      <v-layout row wrap>
        <v-flex
          xs12
          sm6
          md4
          v-for="item in ads"
          :key="item.id"
        ><v-card>
            <v-card-media
              :src="item.imageSrc"
              height="200px"
            ></v-card-media>
            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">{{item.title}}</h3>
                <div>{{item.description}}</div>
              </div>
            </v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn flat color="grey darken-2" :to="'/ad/' + item.id">Open</v-btn>
              <app-buy-modal :ad="item"></app-buy-modal>
            </v-card-actions>
          </v-card>


        </v-flex>
      </v-layout>
    </v-container>
  </div>

  <div v-else>
    <v-container>
      <v-flex xs12 class="text-xs-center pt-5">
        <v-progress-circular
          indeterminate
          color="grey darken-2"
          :size="200"
          :width="20"
        ></v-progress-circular>
      </v-flex>
    </v-container>
  </div>
</template>

<script>
  export default {
    data() {
      return {
      };
    },
    computed: {
      promoAds() {
        return this.$store.getters.promoAds;
      },
      ads() {
        return this.$store.getters.ads;
      },
      loading() {
        return this.$store.getters.loading;
      },
    },
  };
</script>

<style scoped>
  .fade-enter-active,
  .fade-leave-active,
  .fade-leave-to {
    transition: 0.3s ease-out;
    position: absolute;
    top: 0;
    left: 0;
  }
  .fade-enter,
  .fade-leave,
  .fade-leave-to {
    opacity: 0;
  }
  .carousel-link{
    position:absolute;
    bottom:50px;
    left:50%;
    background: rgba(0,0,0,0.5);
    transform: translate(-50%,0);
    padding:5px 15px;
    border-radius: 5px 5px 0 0;
  }
</style>
