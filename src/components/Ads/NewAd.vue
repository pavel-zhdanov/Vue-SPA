<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="text--secondary">Create New AD</h1>

        <v-form ref="form" v-model="valid" validation>
          <v-text-field
            name="title"
            label="Ad title"
            type="text"
            v-model="title"
            required
            :rules="[(v) => !!v || 'Title is required!']"
          ></v-text-field>
          <v-textarea
            name="description"
            label="Ad description"
            type="text"
            v-model="description"
            :rules="[(v) => !!v || 'Description is required!']"
          ></v-textarea>
        </v-form>

        <v-layout row>
          <v-flex xs12>
            <v-btn class="white--text mb-3" color="grey darken-2">Upload
              <v-icon right dark>cloud_upload</v-icon>
            </v-btn>
          </v-flex>
        </v-layout>

        <v-layout row>
          <v-flex xs12>
            <img src="" alt="" height="100">
          </v-flex>
        </v-layout>

        <v-layout row>
          <v-flex xs12>
            <v-switch
              label="Add to promo"
              v-model="promo"
              color="grey darken-2"
            ></v-switch>
          </v-flex>
        </v-layout>

        <v-layout row>
          <v-flex xs12>
            <v-spacer></v-spacer>
            <v-btn
              class="white--text"
              color="grey darken-2"
              @click="createAd"
              :disabled="!valid"
            >Create Ad</v-btn>
          </v-flex>
        </v-layout>

      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data() {
      return {
        title: '',
        description: '',
        valid: false,
        promo: false,
      };
    },
    methods: {
      createAd() {
        if (this.$refs.form.validate()) {
          const ad = {
            title: this.title,
            description: this.description,
            promo: this.promo,
            imageSrc: 'https://user-images.githubusercontent.com/7110136/29002857-9e802f08-7ab4-11e7-9c31-604b5d0d0c19.png',
          };
          this.$store.dispatch('createAd', ad);
          console.log(ad);
        }
      },
    },
  };
</script>

<style scoped>

</style>
