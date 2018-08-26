<template>
  <v-dialog
    width="400px"
    v-model="modal"
  >
    <v-btn flat slot="activator">Edit</v-btn>
    <v-card>
      <v-container>
        <v-layout row>
          <v-flex xs12>
            <v-card-title>
              <h1 class="text--primary">Edit ad</h1>
            </v-card-title>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
        <v-layout row>
          <v-flex xs12>
            <v-card-text>
              <v-form ref="form" v-model="valid" validation>
              <v-text-field
                name="title"
                label="Title"
                type="text"
                v-model="editedTitle"
                required
                :rules="[(v) => !!v || 'Title is required!']"
              ></v-text-field>
              <v-textarea
                name="description"
                label="Description"
                type="text"
                v-model="editedDescription"
                required
                :rules="[(v) => !!v || 'Description is required!']"
              ></v-textarea>
                </v-form>
            </v-card-text>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
        <v-layout row>
          <v-flex xs12>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn flat @click="onCancel">Cancel</v-btn>
              <v-btn
                raised
                @click="onSave"
                color="primary"
                class="white--text"
                :disabled="!valid || loading"
                :loading="loading"
              >Save</v-btn>
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
        editedTitle: this.ad.title,
        editedDescription: this.ad.description,
        valid: false,
      };
    },
    methods: {
      onCancel() {
        this.editedTitle = this.ad.title;
        this.editedDescription = this.ad.description;
        this.modal = false;
      },
      onSave() {
        this.$store.dispatch('updateAd', {
          title: this.editedTitle,
          description: this.editedDescription,
          id: this.ad.id,
        })
          .catch(() => {});
        this.modal = false;
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
