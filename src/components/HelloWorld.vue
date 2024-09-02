<template>
  <h1>{{ msg }}</h1>
  <h2>Home Component length of digital is {{ "Digital".length }}</h2>
  <h3>Email : {{ email }}</h3>
  <h3>Mobile : {{ mobile }}</h3>
  <h3>Address : {{ "Chennai" }}</h3>

</template>

<script>

export default {
  name: 'HelloWorld',
  data() {
    return {
      email: 'venugopal@gmail.com',
      mobile: '123456789',
    }
  },
  methods:{
    getAddress(Address) {
        return Address
      }

  },
  props: {
    msg: String
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