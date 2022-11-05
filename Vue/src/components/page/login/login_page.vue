<script setup>
    import login from './components/login.vue'
    import sign_up from './components/sign_up.vue'
</script>

<script>
    export default {
        data() {
            return {
                isLogin: false
            }
        },
        methods: {
            
        },
        mounted() {
            this.isLogin = false /* fetch something */
        }
    }
</script>

<template>
    <div id="wrapper">
        <div id="select-bar">
            <div id="sign-up">sign-up</div>
            <div id="login">login</div>
        </div>
        <div id="input-aria">
            <login v-if="this.isLogin" />
            <sign_up v-else />
            <button @click="this.isLogin = !this.isLogin">{{this.isLogin ? 'logout' : 'login'}}</button>
        </div>
    </div>
</template>

<style scoped>

</style>