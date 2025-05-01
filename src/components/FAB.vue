<template>
  <v-speed-dial
    v-model="fab"
    :top="top"
    :bottom="bottom"
    :right="right"
    :left="left"
    :direction="direction"
    :open-on-hover="hover"
    :transition="transition"
  >
    <v-btn slot="activator" v-model="fab" color="blue darken-2" dark fab class="MenuIcon">
      <v-icon>list</v-icon>
      <v-icon>close</v-icon>
    </v-btn>
    <v-tooltip left>
      <v-btn
        slot="activator"
        href="https://www.jesus-nachfolgen.ch/downloads/Nachfolge_Booklet_Web.pdf"
        target="_blank"
        fab
        dark
        class="primary MenuButtons"
      >
        <v-icon dark>save_alt</v-icon>
      </v-btn>
      <span>Download Booklet</span>
    </v-tooltip>
    <v-tooltip left>
      <v-btn slot="activator" class="MenuButtons" fab dark href="#evangelium">
        <img src="../assets/Evangelium.png" style="width: 100%; height:100%;">
      </v-btn>
      <span>Evangelium</span>
    </v-tooltip>
    <v-tooltip left>
      <v-btn slot="activator" fab dark href="#umkehr" class="MenuButtons">
        <img src="../assets/Umkehr.png" style="width: 100%; height:100%;">
      </v-btn>
      <span>Umkehr</span>
    </v-tooltip>
    <v-tooltip left>
      <v-btn slot="activator" fab dark href="#wassertaufe" class="MenuButtons">
        <img src="../assets/Wassertaufe.png" style="width: 100%; height:100%;">
      </v-btn>
      <span>Wassertaufe</span>
    </v-tooltip>
    <v-tooltip left>
      <v-btn slot="activator" fab dark href="#geistestaufe" class="MenuButtons">
        <img src="../assets/Geistestaufe.png" style="width: 100%; height:100%;">
      </v-btn>
      <span>Geistestaufe</span>
    </v-tooltip>
    <v-tooltip left>
      <v-btn slot="activator" fab dark href="#gemeinde" class="MenuButtons">
        <img src="../assets/Gemeinde.png" style="width: 100%; height:100%;">
      </v-btn>
      <span>Gemeinde</span>
    </v-tooltip>    
    <v-tooltip left>
      <v-btn slot="activator" fab dark href="#heiligung" class="MenuButtons">
        <img src="../assets/Heiligung.png" style="width: 100%; height:100%;">
      </v-btn>
      <span>Heiligung</span>
    </v-tooltip>
    <v-tooltip left>
      <v-btn slot="activator" fab dark href="#glaubeweitergeben" class="MenuButtons">
        <img src="../assets/GlaubeWeitergeben.png" style="width: 100%; height:100%;">
      </v-btn>
      <span>Glaube weitergeben</span>
    </v-tooltip>
      <v-tooltip left>
      <v-btn slot="activator" fab dark href="#bibellesen" class="MenuButtons">
        <img src="../assets/Bibellesen.png" style="width: 100%; height:100%;">
      </v-btn>
      <span>Bibellesen</span>
    </v-tooltip>
    <v-tooltip left>
      <v-btn slot="activator" fab dark href="#gebet" class="MenuButtons">
        <img src="../assets/Gebet.png" style="width: 100%; height:100%;">
      </v-btn>
      <span>Gebet</span>
    </v-tooltip>
    <v-tooltip left>
      <v-btn slot="activator" fab dark href="#fasten" class="MenuButtons">
        <img src="../assets/FastenIcon.png" style="width: 100%; height:100%;">
      </v-btn>
      <span>Fasten</span>
    </v-tooltip>
    <v-tooltip left>
      <v-btn slot="activator" fab dark href="#grosszuegigkeit" class="MenuButtons">
        <img src="../assets/Grosszuegigkeit.png" style="width: 100%; height:100%;">
      </v-btn>
      <span>Grossz&uuml;gigkeit</span>
    </v-tooltip>
    <v-tooltip left>
      <v-btn slot="activator" fab dark href="#abendmahl" class="MenuButtons">
        <img src="../assets/Abendmahl.png" style="width: 100%; height:100%;">
      </v-btn>
      <span>Abendmahl &amp; Anbetung</span>
    </v-tooltip>
  </v-speed-dial>
</template>
<script>
export default {
  data: () => ({
    direction: "bottom",
    fab: false,
    fling: false,
    hover: true,
    tabs: null,
    top: true,
    right: true,
    bottom: false,
    left: false,
    transition: "slide-y-reverse-transition"
  }),
  watch: {
    top(val) {
      this.bottom = !val;
    },
    right(val) {
      this.left = !val;
    },
    bottom(val) {
      this.top = !val;
    },
    left(val) {
      this.right = !val;
    }
  }
};
</script>
<style>
#create .v-btn--floating {
  position: relative;
}

@media screen and (max-height: 720px) {
  .MenuButtons {
    width: 30px;
    height: 30px;
  }
  .MenuIcon{
    width: 30px;
    height: 30px;
  }
}

</style>
