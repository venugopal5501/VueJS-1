<template>
    <h1 v-if="show">If condition in vue JS</h1>
    <h1 v-else>else part in vue</h1>
    <button v-on:click="show = !show">Click Me</button>
</template>


<script>
export default {
    name: 'ifElse',
    data() {
        return {
            show: true
        }
    }
}

</script>

<style>

</style>