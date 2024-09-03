<template>
    <h1>For Loop</h1>
    <ul>
        <li id="technology" v-for="item in technology" :key="item">
            {{ item }}</li>

    </ul>
    <br>
    <ol>
        <li id="user" v-for="item in users" :key="item.name">
            User name is:{{ item.name }} and Email is : {{ item.email }}
        </li>
    </ol>
</template>

<script>
export default {
    name: 'loopJs',
    data() {
        return {
            technology: [
                'mssql',
                'html',
                'css',
                'js',
                'oracle mysql',
                'nodejs',
                'vuejs'
            ],
            users: [{
                name: 'anand',
                email: 'anand@gmail.com'
            },
            {
                name: 'arun',
                email: 'arun@gmail.com'
            },
            {
                name: 'dinesh',
                email: 'dinesh@gmail.com'

            }
            ]
        }
    }

}

</script>


<style></style>