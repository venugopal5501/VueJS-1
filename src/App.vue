<template>
  <img alt="Vue logo" src="./assets/check.png" width="100">
  <HelloWorld />
  <eventsPart></eventsPart>
  <fieldWar />
  <loginForm />
  <CheckBox />
  <ifElse />
  <loopJs />
  <childParent names="qwerty" />
  <childParent name="name1" :data="user" :getData="getData" />


</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import eventsPart from './components/events.vue'
import fieldWar from './components/field.vue';
import loginForm from './components/login.vue'
import CheckBox from './components/CheckBox.vue';
import ifElse from './components/if-else.vue';
import loopJs from './components/loop.vue';
import childParent from './components/child.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    eventsPart,
    fieldWar,
    loginForm,
    CheckBox,
    ifElse,
    loopJs,
    childParent
  },
  data() {
    return {
      name1: 'Digital',
      user: {
        name: 'venugopal',
        email: 'hai123'
      }
    }
  },
  methods:{
    getData(){
      alert("Function Called")
    }
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
