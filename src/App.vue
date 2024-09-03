<template>
  <img alt="Vue logo" src="./assets/check.png" width="100">
  <HelloWorld />
  <eventsPart></eventsPart>
  <fieldWar />
  <loginForm/>
  <CheckBox/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import eventsPart from './components/events.vue'
import fieldWar from './components/field.vue';
import loginForm from './components/login.vue'
import CheckBox from './components/CheckBox.vue';


export default {
  name: 'App',
  components: {
    HelloWorld,
    eventsPart,
    fieldWar,
    loginForm,
    CheckBox
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
