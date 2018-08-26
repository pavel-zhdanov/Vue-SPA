<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3 v-if="loading">
        <v-progress-circular
          indeterminate
          color="grey darken-2"
          :size="200"
          :width="20"
        ></v-progress-circular>
      </v-flex>
      <v-flex xs12 sm6 offset-sm3 v-else-if="!loading && orders.length !==0">
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
      <v-flex xs12 sm6 offset-sm3 v-else>
        <h1 class="text--primary">You have no orders</h1>
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
    methods: {
      markDone(order) {
        this.$store.dispatch('markOrderDone', order.id)
          .then(() => {
            order.done = true;
          })
          .catch(() => {
          });
      },
    },
    computed: {
      loading() {
        return this.$store.getters.loading;
      },
      orders() {
        return this.$store.getters.orders;
      },
    },
    created() {
      this.$store.dispatch('fetchOrders');
    },
  };
</script>

<style scoped>

</style>
