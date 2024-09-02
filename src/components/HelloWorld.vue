<template>
  <h1>{{ msg }}</h1>
  <h2>Home Component</h2>
</template>

<script>

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<style>
h2,h1{
  color: red;
}
</style>