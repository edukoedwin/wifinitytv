<template>
  <div>
    <v-carousel
     cycle="true"
     interval="4000"
    >
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
            <v-card-title class="justify-center">WifinityTv</v-card-title>
            <v-card-text class="text-left">
              <div class="wifinity-desc text-justify">
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
          <v-card height>
            <v-img
              :src="require('../assets/wifinity/cheerful-girlfriends.jpg')"
              height="400px"
              class="white--text"
              right
            >
              <div class="overlay">
                <v-card-title class="justify-center">Enjoy the Diversity</v-card-title>
                <v-card-text class="text-center">
                 
                </v-card-text>
              </div>
            </v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <!-- #EEEEF1 -->
    <!-- pricing -->
     <div class="price-cards-label d-flex justify-center">Select your plan</div>
    <div class="price-cards-container d-flex justify-center align-center">
     <v-slide-group
        v-model="model"
        class="pa-4"
        :prev-icon="true"
        :next-icon="true"
        :multiple="multiple"
        :mandatory="mandatory"
        :show-arrows="false"
        :center-active="centerActive"
         height="400"
      >
        <v-slide-item
          v-for="n in rateCards"
          :key="n"
          v-slot:default="{ active, toggle }"
        >
          <v-card
            :color="active ? 'primary' : 'grey lighten-1'"
            class="ma-4"
            width=""
            height="220"
            to="/checkout"
            
            @click="toggle"
          >
            <v-img
            :src="n.src"
            width="250"
            class="d-none d-sm-flex"
            ></v-img>
        
          </v-card
          >
        </v-slide-item>
      </v-slide-group>

      <div class="">
      <v-card
      max-height="400"
      to="/checkout"
      class="mobile-price-card d-flex d-sm-none"
      >
      <v-img
      :src="rateCards[rateCard].src"
      width="400"
      
      >
      </v-img>
      </v-card>
      </div>
      </div>
      <div class="d-flex justify-center"> Every Subscription includes</div>
    
    
    <!--tabs for wifinity features -->
    <div class="features-label d-flex justify-center align-center">Features you will Enjoy.</div>
    <v-img
      height="500"
      gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
      aspect-ratio="2"
      :src="require('../assets/wifinity/man-chearing.jpg')"
    >
      <div class="features">
        <v-container>
          <div class="tabs">
            <ul class="tab-items d-flex justify-center">
              <li>
                <button
                  type="button"
                  @click="updateTabContent(0)"
                  class="tab_buttn active_link1"
                  id="tab1"
                >
                  <v-icon color="white" large class="px-20">phonelink</v-icon>
                  <span class="btn-txt d-none d-flex">MultiDevice</span>
                </button>
              </li>
              <li>
                <button type="button" @click="updateTabContent(1)" class="tab_buttn" id="tab2">
                  <v-icon color="white" large class="px-20">vertical_split</v-icon>
                  <span class="btn-txt d-flex">SplitScreen</span>
                </button>
              </li>
              <li>
                <button type="button" @click="updateTabContent(2)" class="tab_buttn" id="tab3">
                  <v-icon color="white" large class="px-20">hd</v-icon>
                  <span class="btn-txt">HighDefination</span>
                </button>
              </li>
              <li>
                <button type="button" @click="updateTabContent(3)" class="tab_buttn" id="tab4">
                  <v-icon color="white" large class="px-20">public</v-icon>
                  <span class="btn-txt d-flex">GlobalAccess</span>
                </button>
              </li>
            </ul>
          </div>
          <div class="tab-content text-justify">
            <v-container class="content-container">{{tabsContent[tab_no].content}}</v-container>
          
            <div class="devices-list-label d-flex justify-center mt-100">Supported Technologies.</div>
            <div class="devices d-flex align-center">
              <ul class="devices-list">
                <li v-for="n in other_devices" :key="n">{{n}}</li>
              </ul>
            </div>
          </div>
        </v-container>
      </div>
    </v-img>
  </div>
</template>
<script>
export default {
  data() {
    return {
      rateCard:2,
      screensize: 0,
      tab: null,
       rateCards:[
         {src:require("../assets/wifinity/Ratecardbasic.svg")},
          {src:require("../assets/wifinity/Ratecardplus.svg")},
           {src:require("../assets/wifinity/Ratecardpremium.svg")},
            {src:require("../assets/wifinity/Ratecardvip.svg")}
       ],

      
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
          src:require("../assets/wifinity/multisport.webp"),
        }
      ],
     

      tabsContent: [
        {
          tab: 0,
          item: "MultiDevice",
          icon: "phonelink",
          content:
            "WifinityTv is available on mobilePhones, Tablets, Web, SmartTv's, AndroidBox and Other technologies.We have saved you the hussle, so that any time you feel like watching your favourite programme, just grab your nearest device and you are Good to go!.Download the WifinityTv app and get streaming."
        },
        {
          tab: 1,
          item: "SplitScreen",
          icon: "vertical_split",
          content:
            "SplitView lets you watch up to four videos at once, all on the same screen, on selected devices.With this feature you can follow up on multiple programmes airing at the same time. We know you love multi-tasking and that feature is right here for you."
        },
        {
          tab: 2,
          item: "HighDefination",
          icon: "hd",
          content:
            "Get up close and personal with your favourite Tv programmes. As good as being there live.Every glorious moment delivered in the clearest detail. All content streamed in WifinityTv is available in a HD stream, provided you have a reliable internet connection."
        },

        {
          tab: 3,
          item: "GlobalAccess",
          icon: "public",
          content:
            "WifinityTv lets you catch up with your favourite programmes from any location in the world. So next time you are on travel save yourself the worry about missing the next episode of your favourite show because we have your back. Get your device , SignIn and there you go."
        }
      ],
      other_devices: [
        "M3u",
        "Zorro",
        "Revolution|Sunplus",
        "Spark",
        "Ariva",
        "Octagon",
        "StarLive",
        "Enigma",
        "MediaStar",
        "DreamBox",
        "GigaBlue",
        "Geant",
        "Fortec999"
      ],
      tab_no: 0
    };
  },
  created() {
    window.addEventListener("resize", this.myEventHandler);
  },
   mounted() {
  // alert(this.$vuetify.breakpoint.name)
   
  },
  destroyed() {
    window.removeEventListener("resize", this.myEventHandler);
  },

  methods: {
    myEventHandler(e) {
      console.log(e);
      const width = window.innerWidth;
      if (width < 768) {
        this.cardWidth = 150;
      } else this.cardWidth = 250;
    },
    updateTabContent(e) {
      console.log("user clicked tab " + e);
      this.active_link = true;
      var addElement;
      var removeElement;
      switch (e) {
        case 0:
          this.tab_no = 0;
          addElement = document.getElementById("tab1");
          addElement.classList.add("active_link1");
          removeElement = document
            .getElementById("tab2")
            .classList.remove("active_link1");
          removeElement = document
            .getElementById("tab3")
            .classList.remove("active_link1");
          removeElement = document
            .getElementById("tab4")
            .classList.remove("active_link1");
          console.log("Clicked the following" + removeElement);
          break;
        case 1:
          this.tab_no = 1;
          addElement = document.getElementById("tab2");
          addElement.classList.add("active_link1");
          removeElement = document
            .getElementById("tab1")
            .classList.remove("active_link1");
          removeElement = document
            .getElementById("tab3")
            .classList.remove("active_link1");
          removeElement = document
            .getElementById("tab4")
            .classList.remove("active_link1");
          console.log("Clicked the following" + removeElement);
          break;
        case 2:
          this.tab_no = 2;
          addElement = document.getElementById("tab3");
          addElement.classList.add("active_link1");
          removeElement = document
            .getElementById("tab1")
            .classList.remove("active_link1");
          removeElement = document
            .getElementById("tab2")
            .classList.remove("active_link1");
          removeElement = document
            .getElementById("tab4")
            .classList.remove("active_link1");
          console.log("Clicked the following" + removeElement);
          break;
        case 3:
          this.tab_no = 3;
          addElement = document.getElementById("tab4");
          addElement.classList.add("active_link1");
          removeElement = document
            .getElementById("tab1")
            .classList.remove("active_link1");
          removeElement = document
            .getElementById("tab3")
            .classList.remove("active_link1");
          removeElement = document
            .getElementById("tab2")
            .classList.remove("active_link1");
          console.log("Clicked the following" + removeElement);
          break;
        default:
          this.tab_no = 0;
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
$footer = #0A0A10;
$footer1 = #1A518E;
$feature = #1D0C42;
$feature1 = #0D0F19;
$active_link = #FFDC39;
$active_link_background = #0F0C2E;

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


.features-label {
  position: relative;
  width: 100%;
  height: 100px;
  background: $feature;
  color: white;
  font-size: 40px;

  @media screen and (max-width: 576px) {
    font-size: 25px;
    height 70px
  }
}

.features 
  position: relative;
  width: 100%;
  height: 200px;
  

.tab-content {
  color: white;
  font-weight: 600;
  height: 300px;
  position: relative;
}
.content-container
      height 150px
      margin-left 180px
      max-width 820px
      @media  screen and (max-width:1256px) {
         margin-left 0
         height 40px
      }
.tabs {
  height: 150px;
  width: 100%;
  position: relative;
  color: white;
  margin: 0px;
}

.tab-items {
  width: 100%;
  position: absolute;
  top: 20px;
  margin: 0;
}

.tabs li {
  list-style-type: none;
  display: inline;
  margin: 0 50px;

  @media screen and (max-width: 576px) {
    margin: 0 8px;
  }
}

.tab_buttn {
  padding: 20px;
  position: relative;
  display: block;
  width: 130px;
  text-align: center;

  @media screen and (max-width: 576px) {
    width: 90px;
  }

  &:hover::after {
    content: '';
    position: absolute;
    left: 25%;
    right: 25%;
    bottom: 0;
    border: 2px solid $active_link;
    border-radius: 2px;
  }
}

.btn-txt {
  margin-top: 15px;

  @media screen and (max-width: 576px) {
    font-size: 10px;
    margin-top: 5px;
  }
}

.active_link1 {
  color: white;
  background: $active_link_background;
  border-radius: 4px;
}

.active_link1::after {
  content: '';
  position: absolute;
  left: 25%;
  right: 25%;
  bottom: 0;
  border: 2px solid $active_link;
  border-radius: 2px;
}

.devices {
  color: white;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 80px;
  background: rgba(15, 12, 46, 0.56);

  @media screen and (max-width: 1260px) {
    overflow-x: scroll;
    scrollbar-color: white;
  }
  @media screen and (max-width: 576px) {
    height 50px
  }
}

.devices li {
  list-style-type: none;
  display: inline;
  margin: 10px;
  width: 30px;
}

.devices-list {
  width: 100%;
  padding: 10px;
  margin: 0;
}

.devices-list-label {
  color: white;
  position: absolute;
  top: 160px;
  width: 100%;
  height: 80px;
  font-size: 40px;

  @media screen and (max-width: 576px) {
    font-size: 25px;
    top 210px
  }
}
.price-cards-container
     width 100%
     height 400px
     background #EEEEF1
     position relative
     @media screen and (max-width:576px) {
       height 400px
     }


.mobile-price-card
    position absolute
    left 50px
    top  20px
   
</style>