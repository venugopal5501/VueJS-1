<template>
    <input type="text" v-model="user"><br><br>
    <input type="password" v-model="pass"><br><br>
    <button v-on:click="getData">Click Here</button>
</template>

<script>

export default {
    name: 'loginForm',
    data() {
        return {
            user: null,
            pass: null
        }
    },
    methods: {
        getData() {
            console.warn('values : ', this.user, this.pass)
        }
    }
}

</script>

<style></style>