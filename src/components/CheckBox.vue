<template>
    <h1>Get checkbox and radio button value using Two-Way Binding</h1>
    <h2>Technology:</h2>
    <label for="java">Java</label>
    <input type="checkbox" id="java" value="java" v-model="tech">
    <label for="javascript">javascript</label>
    <input type="checkbox" id="javascript" value="javascript" v-model="tech">
    <label for="C">C</label>
    <input type="checkbox" id="C" value="C" v-model="tech">
    <h2>Profession</h2>
    <label for="student">Student</label>
    <input type="radio" value="Student" id="student" v-model="profession">
    <label for="Developer">Developer</label>
    <input type="radio" value="Developer" id="Developer" v-model="profession">
    <h2>Technology : {{ tech }}</h2>
    <h2>{{ profession }}</h2>
    <!-- <button v-on:click="getData()">Click</button> -->
</template>

<script>
export default {
    name: 'checkBox',
    data() {
        return {
            tech: [],
            profession: null
        }
    }
}
//     methods: {
//     //     getData() {
//     //         console.log("Technology : ", this.tech);
//     //         console.log("Profession : ", this.profession);
//     //     }
//     // }
// }
</script>

<style></style>
