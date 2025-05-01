<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-Flex xs12 align-center style="display:inline-flex;" justify-center>
        <h3>
          <img v-bind:src="Icon" id="icon"><br>
          <span>{{this.titel}}</span>
        </h3>
      </v-Flex>
      <v-flex xl6 xs12>
        <div
          style="position: relative;	padding-bottom: 56.25%; /* 16:9 */	padding-top: 25px;	height: 0;"
        >
          <iframe
            :src="source"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            style="position: absolute;	top: 0;	left: 0;	width: 100%;	height: 100%;"
            allowfullscreen
          ></iframe>
        </div>
        <br>
        <!--
          <span class="ChangeVideo">
          <a @click="changeVideo" style="color: white;">{{buttonTitel}}</a>
        </span>
        -->
      </v-flex>
      <v-flex xl6 xs12 style="text-align: left;">
        <h4 class="ressourcen">
          <span>Ressourcen</span>
        </h4>
        <ul class="ressou">
          <li v-for="item in RessourcenLinks" :key="item.id">
            <a :href="item.link" target="_blank">{{ item.text }}</a>
          </li>
        </ul>
        <ul class="ressou">
          <li v-for="item in RessourcenTexts" :key="item.id">{{ item.text }}</li>
        </ul>
        <div :id="this.titel"></div>
      </v-flex>
     
    </v-layout>
  </v-container>
</template>
<script>
import imgEvangelium from "../assets/Evangelium.png";
import imgUmkehr from "../assets/Umkehr.png";
import imgWassertaufe from "../assets/Wassertaufe.png";
import imgGeistestaufe from "../assets/Geistestaufe.png";
import imgGemeinde from "../assets/Gemeinde.png";
import imgHeiligung from "../assets/Heiligung.png";
import imgGlaubeWeitergeben from "../assets/GlaubeWeitergeben.png";
import imgBibellesen from "../assets/Bibellesen.png";
import imgGebet from "../assets/Gebet.png";
import imgFasten from "../assets/FastenIcon.png";
import imgGrosszuegigkeit from "../assets/Grosszuegigkeit.png";
import imgAbendmahl from "../assets/Abendmahl.png";


export default {
  props: {
    titel: String,
    VideoIdDeutsch: String,
    VideoIdCH: String,
    RessourcenLinks: Array,
    RessourcenTexts: Array,
    RessourcenHTML: String
  },
  data() {
    return {
      buttonTitel: "Hochdeutsch",
      source: "https://www.youtube.com/embed/" + this.VideoIdCH,
      Icon: null
    };
  },
  computed: {
    sourceCH: function() {
      var sourceBasic = "https://www.youtube.com/embed/";
      return sourceBasic.concat(this.VideoIdCH);
    },
    sourceD: function() {
      var sourceBasic = "https://www.youtube.com/embed/";
      return sourceBasic.concat(this.VideoIdDeutsch);
    }
  },
  mounted: function() {
    this.setImage();
  this.setRessourcen();
  },
  methods: {
    changeVideo() {
      if (this.buttonTitel === "Hochdeutsch") {
        this.buttonTitel = "Schweizerdeutsch";
        this.source = this.sourceD;
      } else {
        this.buttonTitel = "Hochdeutsch";
        this.source = this.sourceCH;
      }
    },
    setRessourcen(){
      document.getElementById(this.titel).innerHTML = this.RessourcenHTML;
    },
    setImage() {
      switch (this.titel) {
        case "EVANGELIUM":
          this.Icon = imgEvangelium;
          break;
        case "UMKEHR":
          this.Icon = imgUmkehr;
          break;
        case "WASSERTAUFE":
          this.Icon = imgWassertaufe;
          break;
        case "GEISTESTAUFE":
          this.Icon = imgGeistestaufe;
          break;
        case "GEMEINDE":
          this.Icon = imgGemeinde;
          break;
        case "HEILIGUNG":
          this.Icon = imgHeiligung;
          break;
        case "GLAUBE WEITERGEBEN":
          this.Icon = imgGlaubeWeitergeben;
          break;
        case "BIBELLESEN":
          this.Icon = imgBibellesen;
          break;
        case "GEBET":
          this.Icon = imgGebet;
          break;
        case "FASTEN":
          this.Icon = imgFasten;
          break;
        case "GROSSZÜGIGKEIT":
          this.Icon = imgGrosszuegigkeit;
          break;
        case "ABENDMAHL & ANBETUNG":
          this.Icon = imgAbendmahl;
          break;
      }
    }
  }
};
</script>
<style>
@media screen and (max-width: 1903px) {
  #icon{
    width: 2em; height: 2em;
  }
}
@media screen and (min-width: 1904px) {
  #icon {
    width: 4em; 
    height: 4em;
  }
}
</style>