<script>
    export default { 
        data(){
            return {
               id: this.$route.params.id
            }
        },
    }
</script>

<template>
    <h1>This is a dashBoard page room: {{id}}</h1>
</template>

<style scoped>
</style>