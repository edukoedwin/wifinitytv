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
    <div class="rate-cards">
     <v-sheet
      class="d-flex justify-center sheet"
      elevation=""
      max-width="100%"
      color="#EEEEF1"
    >
      <v-slide-group
        v-model="model"
        class="pa-4"
        :mandatory="mandatory"
        :show-arrows="false"
  
      >
        <v-slide-item
          v-for="n in 4"
          :key="n"
       
        >
          <v-card
            
            class="ma-4"
            :width=cardWidth
            @click="toggle"
          >
          <v-img
          :src="require('../assets/wifinity/Ratecardvip.svg')"
          ></v-img>
          </v-card>
        </v-slide-item>
      </v-slide-group>
    </v-sheet>
    Every subscription includes
    </div> 
    <!--tabs for wifinity features -->
   <div class="features">
   <v-img
   height=""
   width=""
   :src="require('../assets/wifinity/happyCouple.svg')"
   ></v-img>
   </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
        cardWidth:200,
        screensize:0,
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
  },
  created() {
    window.addEventListener('resize',this.myEventHandler)
  },
  destroyed() {
    window.removeEventListener("resize", this.myEventHandler);

  },

  methods:{
    myEventHandler(e) {
      console.log(e)
      const width=window.innerWidth
      if(width<768) {
        this.cardWidth=150

      }
      else this.cardWidth=200
      
    }
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
.rate-cards
     height 300px
     width 100%
     background-color #EEEEF1
     position relative
.sheet
    position absolute 
    top 70px
    width 100%
.features
   position relative
   width 100%
   max-height 300px
   margin-top 20px
   
   
</style>