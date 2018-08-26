<template>
  <v-dialog
    width="400px"
    v-model="modal"
  >
    <v-btn raised color="primary" class="white--text" slot="activator">Buy</v-btn>
    <v-card>
      <v-container>
        <v-layout row>
          <v-flex xs12>
            <v-card-title>
              <h1 class="text--primary">Do you want to buy this</h1>
            </v-card-title>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
        <v-layout row>
          <v-flex xs12>
            <v-card-text>
              <v-form ref="form" v-model="valid" validation>
                <v-text-field
                  name="name"
                  label="Your name"
                  type="text"
                  v-model="name"
                  required
                  :rules="[(v) => !!v || 'Name is required']"
                ></v-text-field>
                <v-text-field
                  name="phone"
                  label="Your phone"
                  type="text"
                  v-model="phone"
                  required
                  :rules="[(v) => !!v || 'Phone is required!']"
                ></v-text-field>
              </v-form>
            </v-card-text>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
        <v-layout row>
          <v-flex xs12>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                flat
                @click="onCancel"
                :disabled="localLoading"
              >Close</v-btn>
              <v-btn
                raised
                @click="onSave"
                color="primary"
                class="white--text"
                :disabled="!valid || localLoading"
                :loading="localLoading"
              >Buy it!</v-btn>
            </v-card-actions>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
  export default {
    data() {
      return {
        modal: false,
        name: '',
        phone: '',
        valid: false,
        localLoading: false,
      };
    },
    methods: {
      onCancel() {
        this.name = '';
        this.phone= '';
        this.modal = false;
      },
      onSave() {
        this.localLoading = true;
        this.$store.dispatch('createOrder', {
          name: this.name,
          phone: this.phone,
          adId: this.ad.id,
          ownerId: this.ad.ownerId,
        })
          .finally(() => {
            this.name = '';
            this.phone= '';
            this.localLoading = false;
            this.modal = false;
          });
      },
    },
    props: ['ad'],
    computed: {
      loading() {
        return this.$store.getters.loading;
      },
    },
  };
</script>

<style scoped>

</style>
