<template>
  <div id="app">
    <v-app>
      <showBorder></showBorder>
    </v-app>
  </div>
</template>

<script>
import Border from "./components/border.vue";

export default {
  name: "app",
  components: {
    showBorder: Border
  }
};
</script>
<style >
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: "rgb(45,45,45)";
  background-image: url("./assets/MainBG.png");
  background-size: cover;
}
</style>
