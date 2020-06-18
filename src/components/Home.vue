<template>
  <div>
    <v-carousel>
      <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
      ></v-carousel-item>
    </v-carousel>
    <v-container>
      <v-row>
        <v-col cols="12" sm="6">
          <v-card height="400px" color="#1D0C42" class="white--text wifinity-card">
            <v-card-title class="justify-center">Wifinity Tv</v-card-title>
            <v-card-text class="text-left">
              <div class="wifinity-desc">
                WifinityTv brings you all the entertainment you need. With a diverse worldwide channel list, entertainment has never been better.
                You don’t have to worry on how to catch up with your favourite local content even while on travel.
                <br />
                <b>we got you covered!</b>
                <br />

                <b>All you need is a stable internet connection and Good taste!</b>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6">
          <v-card height="400px">
            <v-img
              :src="require('../assets/wifinity/cheerful-girlfriends.jpg')"
              height="400px"
              class="white--text"
              right
            >
              <div class="overlay">
                <v-card-title class="justify-center">Enjoy the Diversity</v-card-title>
                <v-card-text class="text-left">
                  <div class="wifinity-goodies">
                    WifinityTv brings you all the entertainment you need. With a diverse worldwide channel list, entertainment has never been better.
                    You don’t have to worry on how to catch up with your favourite local content even while on travel.
                    <br />
                    <b>we got you covered!</b>
                    <br />

                    <b>
                      All you need is a stable internet connection and
                      <br />Good taste!
                    </b>
                  </div>
                </v-card-text>
              </div>
            </v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <!-- pricing -->
    <v-row class="rate-cards" :justify="justify">
      <v-container class="mt-80">
        <v-slide-group
        v-model="model"
        class="pa-4"
        :prev-icon="true ? 'mdi-minus' : undefined"
        :next-icon="true ? 'mdi-plus' : undefined"
        :multiple="multiple"
        :mandatory="mandatory"
        :show-arrows="true"


      >
        <v-slide-item
          v-for="n in 4"
          :key="n"
          
        >
          <v-card
            :color="active ? 'primary' : 'grey lighten-1'"
            class="ma-4"
           
          >
            <v-img
            :src="require('../assets/wifinity/Ratecardbasic.svg')"
            
            ></v-img>
          </v-card>
        </v-slide-item>
      </v-slide-group>
      </v-container>
    </v-row>
    <!--tabs for wifinity features -->
    <v-row
    
    >
      <v-tabs
      v-model="tab"
      background-color="deep-purple accent-4"
      class="elevation-2"
      dark
      :centered="centered"
      :grow="grow"
      :vertical="true"
      :right="right"
      :prev-icon="prevIcon ? 'mdi-arrow-left-bold-box-outline' : undefined"
      :next-icon="nextIcon ? 'mdi-arrow-right-bold-box-outline' : undefined"
      :icons-and-text="icons"
      
    >
      <v-tabs-slider></v-tabs-slider>

      <v-tab
        v-for="i in tabs"
        :key="i"
        :href="`#tab-${i}`"
      >
        Tab {{ i }}
        <v-icon v-if="icons">mdi-phone</v-icon>
      </v-tab>

      <v-tab-item
        v-for="i in tabs"
        :key="i"
        :value="'tab-' + i"
      >
        <v-card
          flat
          tile
        >
          <v-card-text>{{ text }}</v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs>
    </v-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
        tab: null,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        icons: true,
        centered: false,
        grow: true,
        prevIcon: false,
        nextIcon: false,
        right: false,
        tabs: 4,
      items: [
        {
          src: require("../assets/wifinity/wifinitytv.jpg")
        },
        {
          src: require("../assets/wifinity/Family-Watching.jpg")
        },
        {
          src: require("../assets/wifinity/family-watching.jpg")
        },
        {
          //src:require("../assets/wifinity/wifinitytv.jpg"),
        }
      ]
    };
  }
};
</script>
<style lang="stylus">
.wifinity-desc {
  position: relative;
  top: 20px;
  line-height: 25px;
  font-family: Raleway;
  font-type: normal;
  font-weight: normal;
  font-size: 18px;
  color: white;
}

.wifinity-card, .overlay {
  background-color: rgba(8, 45, 114, 0.5);
  height: 100%;
}

.rate-cards {
  background: #EEEEF1;
  height: 400px;
}

.rate-card {
    height px
}
</style>