<template>
<div>
  <v-footer app color="#2A0175" height="200px" absolute="">
    <v-container>
      <v-row>
        <v-col cols="12" sm="3" class="text-center">
          <a class="footer_links" href="#" @click.prevent>Privacy Policy</a>
        </v-col>
        <v-col cols="12" sm="3" class="text-center">
          <a class="footer_links" href="#" @click.prevent>Terms&Conditions</a>
        </v-col>
        <v-col cols="12" sm="3" class="text-center">
          <a class="footer_links" href="#" @click.prevent>Help</a>
        </v-col>
        <v-col cols="12" sm="3" class="text-center">
          <a class="footer_links" href="#" @click.prevent>Contact Us</a>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
  </div>
</template>
<script>
</script>
<style lang="stylus" scoped>
$background = #6201A7;
$background1 = #2A0175;

.footer_links {
  color: white;
  dispay: block;
  text-decoration: none;
}

.v-divider {
  background-color: white !important;
}
</style>