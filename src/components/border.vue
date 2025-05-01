<template>
  <v-container grid-list-xl>
    <v-layout row wrap>
      <v-flex md1 xs0></v-flex>
      <v-flex md10 xs12>
        <h1>
          <span>NACHFOLGE</span>
        </h1>
        <v-layout justify-center>
          <div id="divIntroText">
            <span id="introText">
              Hier findest du, was du schon immer über die Nachfolge von Jesus erfahren wolltest: kurz – praktisch – verständlich. Als erstes erfährst du, was es bedeutet, Nachfolger von Jesus zu werden. Dann zeigen wir dir, wie du in der Nachfolge wachsen kannst. Zu jedem Thema findest du einen Videoclip zur Einführung. Unser <a href="https://www.jesus-nachfolgen.ch/downloads/Nachfolge_Booklet_V2.2_Web.pdf" target="_blank" style="color:white">Booklet</a> erklärt dir jedes Thema und zeigt dir die Bibelstellen dazu. Weiter helfen dir die Ressourcen bei der praktischen Umsetzung und bei der weiteren Vertiefung der Themen.<br><br>
            </span>
          </div>
        </v-layout>

        <h2>
          <span>Nachfolger werden</span>
        </h2>
        <show-content
          id="evangelium"
          style="margin-bottom:20px; background-color:rgba(255, 214, 134, 0.85)"
          titel="EVANGELIUM"
          video-id-c-h="ofUiyK4dRWM"
          video-id-deutsch="O9EvBdzHvqI"
          v-bind:RessourcenHTML="evang"
        ></show-content>
        <show-content
          id="umkehr"
          style="margin-bottom:20px; background-color:rgba(254, 244, 141, 0.85)"
          titel="UMKEHR"
          video-id-c-h="Mg4MAY7tjHs"
          video-id-deutsch="blcKeLDDzSM"
          v-bind:RessourcenHTML="umkehr"
          icon="Umkehr.png"
        ></show-content>
        <show-content
          id="wassertaufe"
          style="margin-bottom:20px; background-color:rgba(231, 228, 131, 0.85)"
          titel="WASSERTAUFE"
          video-id-c-h="A3aJIpVM5KY"
          video-id-deutsch="gsVlU-TFPfk"
          v-bind:RessourcenHTML="wassertaufe"
          icon="Wassertaufe.png"
        ></show-content>
        <show-content
          id="geistestaufe"
          style="margin-bottom:20px; background-color:rgba(176, 213, 125, 0.85)"
          titel="GEISTESTAUFE"
          video-id-c-h="gxD4gYKK5ok"
          video-id-deutsch="gsVlU-TFPfk"
          v-bind:RessourcenHTML="geistestaufe"
        ></show-content>
        <show-content
          id="gemeinde"
          style="margin-bottom:20px; background-color:rgba(158, 195, 141, 0.85)"
          titel="GEMEINDE"
          video-id-c-h="gxD4gYKK5ok"
          video-id-deutsch="gsVlU-TFPfk"
          v-bind:RessourcenHTML="gemeinde"
        ></show-content>
        <h2>
          <span>Nachfolger sein</span>
        </h2>
        <show-content
          id="heiligung"
          style="margin-bottom:20px; background-color:rgba(167, 214, 168, 0.85)"
          titel="HEILIGUNG"
          video-id-c-h="THzU5zGaJaM"
          video-id-deutsch="O9EvBdzHvqI"
          v-bind:RessourcenHTML="heiligung"
        ></show-content>
        <show-content
          id="glaubeweitergeben"
          style="margin-bottom:20px; background-color:rgba(140, 211, 216, 0.85)"
          titel="GLAUBE WEITERGEBEN"
          video-id-c-h="pNjwOuba4_8"
          video-id-deutsch="O9EvBdzHvqI"
          v-bind:RessourcenHTML="glaube"
        ></show-content>
          <show-content
          id="bibellesen"
          style="margin-bottom:20px; background-color:rgba(144, 179, 222, 0.85)"
          titel="BIBELLESEN"
          video-id-c-h="l4Hf7AWrdtY"
          video-id-deutsch="O9EvBdzHvqI"
          v-bind:RessourcenHTML="bibel"
        ></show-content>
        <show-content
          id="gebet"
          style="margin-bottom:20px; background-color:rgba(150, 137, 193, 0.85)"
          titel="GEBET"
          video-id-c-h="xM9F5G434Zs"
          video-id-deutsch="O9EvBdzHvqI"
          v-bind:RessourcenHTML="gebet"
        ></show-content>
        <show-content
          id="fasten"
          style="margin-bottom:20px; background-color:rgba(193, 129, 184, 0.85)"
          titel="FASTEN"
          video-id-c-h="94OAC0HTwvI"
          video-id-deutsch="O9EvBdzHvqI"
          v-bind:RessourcenHTML="fasten"
        ></show-content>
        <show-content
          id="grosszuegigkeit"
          style="margin-bottom:20px; background-color:rgba(245, 148, 150, 0.85)"
          titel="GROSSZÜGIGKEIT"
          video-id-c-h="fvnqdUJ7seE"
          video-id-deutsch="O9EvBdzHvqI"
          v-bind:RessourcenHTML="grosszuegigkeit"
        ></show-content>
        <show-content
          id="abendmahl"
          style="margin-bottom:20px; background-color:rgba(232, 163, 124, 0.85)"
          titel="ABENDMAHL &amp; ANBETUNG"
          video-id-c-h="uz-2BHnpBmQ"
          video-id-deutsch="O9EvBdzHvqI"
          v-bind:RessourcenHTML="abendmahl"
        ></show-content>

        <footerNachfolge id="footer" style=" background-color:rgba(45,45,45, 0.85)"></footerNachfolge>
      </v-flex>
      <v-flex md1 xs0>
        <v-layout justify-space-around>
          <fab style="position:fixed;"></fab>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Content from "./Content.vue";
import FAB from "./FAB.vue";
import FooterNachfolge from "./Footer.vue";
import json from "../json/Ressourcen.json";

export default {
  components: {
    "show-content": Content,
    fab: FAB,
    footerNachfolge: FooterNachfolge,
  },
  data() {
    return {
      evang: json.ressourcen[0].html,
      umkehr: json.ressourcen[1].html,
      wassertaufe: json.ressourcen[2].html,
      geistestaufe: json.ressourcen[3].html,
      gemeinde: json.ressourcen[11].html,
      heiligung: json.ressourcen[4].html,
      glaube: json.ressourcen[5].html,
      bibel: json.ressourcen[6].html,
      gebet: json.ressourcen[7].html,
      fasten: json.ressourcen[8].html,
      grosszuegigkeit: json.ressourcen[9].html,
      abendmahl: json.ressourcen[10].html
    };
  }
};
</script>

<style>
@font-face {
  font-family: "LinLibertine_R";
  src: url("../style/Schriftarten/LinLibertine_R.ttf") format("truetype");
}
@font-face {
  font-family: "LinLibertine_RB";
  src: url("../style/Schriftarten/LinLibertine_RB.ttf") format("truetype");
}
@font-face {
  font-family: "LemonMilk_R";
  src: url("../style/Schriftarten/LemonMilk.otf") format("opentype");
}
@font-face {
  font-family: "LemonMilk_L";
  src: url("../style/Schriftarten/LemonMilklight.otf") format("opentype");
}
@font-face {
  font-family: "Esphimere";
  src: url("../style/Schriftarten/Esphimere.otf") format("opentype");
}
h1 {
  font-family: "LemonMilk_R";
  margin-bottom: 15px;
}
h1 span {
  background-color: rgb(255, 255, 255);
  padding-left: 4px;
  padding-right: 4px;
  font-size: 1.5em;
}
h2 {
  font-family: "LinLibertine_RB";
  margin-bottom: 20px;
}
h2 span {
  background-color: rgb(255, 255, 255);
  padding-left: 4px;
  padding-right: 4px;
  font-size: 1.5em;
}
h3 {
  font-family: "LemonMilk_L";
}
h3 span {
  background-color: rgb(45, 45, 45);
  padding-left: 4px;
  padding-right: 4px;
  color: white;
  font-size: 1.5em;
}
#introText {
  font-family: "LinLibertine_R";
  background-color: rgb(45, 45, 45);
  color: white;
  font-size: 1.4em;
}
#divIntroText {
  width: 80%;
}

.ressourcen {
  font-family: "LinLibertine_RB";
  font-size: 26px;
}
.ressourcen span {
  border-top: 2px solid rgb(45, 45, 45);
  padding-left: 0.2em;
}
li {
  font-family: "Esphimere";
  font-size: 15px;
}
.ChangeVideo {
  background-color: rgb(45, 45, 45);
  padding-left: 4px;
  padding-right: 4px;
  text-decoration: none;
  font-family: "Esphimere";
}
#footer {
  font-family: "Esphimere";
  color: white;
}
</style>

