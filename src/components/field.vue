<template>
    <input type="text" v-model="data">
    <h1>{{ data }}</h1>
</template>

<script>
export default {
    name: 'fieldWar',
    data() {
        return {
            data: 0,
        }

    }
}
</script>

<style></style>