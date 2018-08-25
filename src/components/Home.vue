<template>
  <div>
    <v-container fluid>
      <v-layout row>
        <v-flex xs12>
          <v-carousel>
            <v-carousel-item
              v-for="item in ads"
              :key="item.id"
              :src="item.imageSrc"
              v-if="item.promo"
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
              <v-btn raised color="grey darken-2" class="white--text" :to="'/ad/' + item.id">Buy</v-btn>
            </v-card-actions>
          </v-card>


        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        ads: [
          {title: 'planet', description: 'It is a planet', promo: true,
            imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg', id: '1'},
          {title: 'bird', description: ' It is a bird', promo: true,
            imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg', id: '2'},
          {title: 'sky', description: 'It is a bird', promo: true,
            imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg', id: '3'},
          {title: 'squirrel', description: 'It is a squirrel', promo: false,
            imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg', id: '4'},
        ],
      };
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
