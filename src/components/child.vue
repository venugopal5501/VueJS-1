<template>
    <h6>{{ names }}</h6>
    <h6>{{ name }}</h6>
    <h6>{{ data }}</h6>
    <button v-on:click="getData()">Click</button>
</template>

<script>
export default {
    name: 'childParent',
    props: {
        names: String,
        name: String,
        getData: Function,
        data: Object
    }
}
</script>

<style></style>