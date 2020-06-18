<template>
<v-app>
  <navbar></navbar>
  <v-main>
  <router-view></router-view>
  </v-main>
</v-app>
</template>

<script>
import Navbar from './components/nav'

export default {
  name: 'App',

  components: {
  navbar:Navbar
  },

  data: () => ({
    //
  }),
};
</script>
