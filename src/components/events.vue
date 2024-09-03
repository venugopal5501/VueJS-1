<template>
    <button v-on:click="alerts">Click Me</button>
    <button v-on:click="event('Button 1 click')">Event 1</button>
    <button v-on:dblclick="getDouble('Button 2 Double Click')">Event 2</button><br>
    <button v-on:click="getcount()">Increase</button>
    <button v-on:click="getdecrease()">Decrease</button>
    <h1>{{ count }}</h1>
</template>

<script>
export default {
    name: 'eventsPart',
    data() {
        return {
            count: 0,

        }
    },
    methods: {
        alerts() {
            alert("Button clicked");
        },

        event() {
            alert("button called");
        },
        getDouble() {
            alert('Double click function called');
        },
        getConsole() {
            // document.write("yes")
            console.log("Event Fired")
        },
        getcount() {

            this.count = this.count + 1;
        },
        getdecrease() {
            this.count = this.count - 1;
        }

    }
}
</script>

<style></style>