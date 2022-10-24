<template>
    <inicio_component />
    <router-view style="
    position: absolute;
    top: 12%;
    bottom: 15%;
    left: 20%;
    right: 0%;
    margin-top: 10px;
    margin-bottom: 20px;" />
    <footer_component />
</template>
<script>

import inicio_component from '@/components/Inicio.vue'
import footer_component from '@/components/Footer.vue'
export default {
    name: 'inventory',
    components: {
        inicio_component,
        footer_component
    }
}
</script>
<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

nav {
    padding: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
