<template>
  <h1>{{ msg }}</h1>
  <h2 v-on:mousemove="getConsole()">Home Component length of digital is {{ "Digital".length }}</h2>
  <h3>Email : {{ email }}</h3>
  <h3>Mobile : {{ mobile }}</h3>
  <h3>Address : {{ "Chennai" }}</h3>
  <h4>{{ get().hai }}{{ get().hi }}{{ get().Disp_email }}</h4>
  <h5>Sum of 10+10 is {{ 10 + 10 }}</h5>


</template>

<script>

export default {
  name: 'HelloWorld',
  data() {
    return {
      email: 'venugopal@gmail.com',
      mobile: '123456789',
      count: 0,

    }
  },
  methods: {
    getAddress(Address) {
      return Address
    },
    get() {
      return {
        hai: 'hello',
        hi: ' c u',
        Disp_email: this.email,
      }
    },
    getConsole() {
      // document.write("yes")
      console.log("Event Fired")
    },
    // // props: {
    // //   msg: String
    // // }


  }


}

// getata(){
//   return {
//   hai:'hi',
//   hello : 'hell'
//   }
// },


</script>

<style scoped>
h2 {
  color: red;
}
</style>