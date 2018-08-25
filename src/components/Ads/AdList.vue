<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="text--secondary mb-3">My ads</h1>

        <v-card
          class="elevation-10 mb-4"
          v-for="item in ads"
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
  </v-container>
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

</style>

