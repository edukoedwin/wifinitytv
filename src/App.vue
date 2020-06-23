<template>
<v-app>
  <navbar></navbar>
  <v-main>
  <router-view></router-view>
  </v-main>
<app_footer></app_footer>
</v-app>
</template>

<script>
import Navbar from './components/nav'
import Footer from './components/footer'

export default {
  name: 'App',

  components: {
  navbar:Navbar,
  app_footer:Footer

  
  },
  data: () => ({
    //
  }),
};
</script>
