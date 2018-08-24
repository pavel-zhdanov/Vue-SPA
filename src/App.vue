<template>
  <v-app>
    <v-navigation-drawer
      app
      temporary
      v-model="drawer"
      dark
    >
      <v-list>
        <v-list-tile
          :to="link.url"
          v-for="link of links"
          :key="link.title"
        >
          <v-list-tile-action>
            <v-icon>{{link.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="link.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      app
      color="grey darken-2"
      dark
    >
      <v-toolbar-side-icon
        @click="drawer = !drawer"
        class="hidden-md-and-up"
      ></v-toolbar-side-icon>
      <v-toolbar-title>Ad application</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items
        class="hidden-sm-and-down"
      >
        <v-btn
          v-for="link in links"
          :key="link.title"
          flat
          :to="link.url"
        >
          <v-icon left>{{link.icon}}</v-icon>
          {{link.title}}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <router-view>
      </router-view>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    data() {
      return {
        drawer: false,
        links: [
          {title: 'Home', icon: 'home', url: '/'},
          {title: 'Login', icon: 'lock', url: '/login'},
          {title: 'Registration', icon: 'face', url: '/registration'},
          {title: 'Orders', icon: 'bookmark_border', url: '/orders'},
          {title: 'New ad', icon: 'note_add', url: '/new'},
          {title: 'My ads', icon: 'list', url: '/list'},
        ],
      };
    },
  };
</script>
