<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="text--secondary mb-3 ml-3">Orders</h1>
        <v-list
          subheader
          two-line
        ><v-list-tile
          avatar
          v-for="item in orders"
          :key="item.id"
        >
          <v-list-tile-action>
            <v-checkbox
              :input-value="item.done"
              @click="markDone(item)"
              color="success"
              :disabled="item.done"
            ></v-checkbox>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{item.name}}</v-list-tile-title>
            <v-list-tile-sub-title>{{item.phone}}</v-list-tile-sub-title>
          </v-list-tile-content>
          <v-list-tile-action>
            <v-btn
              color="grey darken-2"
              class="white--text"
              :to="'/ad/' + item.adId"
            >Open</v-btn>
          </v-list-tile-action>
        </v-list-tile>

        </v-list>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data() {
      return {
        orders: [
          {id: 'sdfsd', name: `Pavel`, phone: '8-900-676-55-55',
            adId: '1', done: false},
        ],
      };
    },
    methods: {
      markDone(order) {
        order.done = true;
      },
    },
  };
</script>

<style scoped>

</style>
