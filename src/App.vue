<template>
  <div id="app">
    <StudentsComponent/>
  </div>
</template>

<script>
import StudentsComponent from "./components/StudentsComponent";

export default {
  name: "App",
  components: {
    StudentsComponent
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
