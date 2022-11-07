<script>
    export default { 
        data(){
            return {
               roomId: this.$route.params.id,
               participantName: ""
            }
        },
        methods: {
            getParticipantName: function(){
                console.log('test');
                this.participantName="temp_name";
            }
        },
        beforeMount(){
            this.getParticipantName()
        }
    }
</script>
<template>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..300,0..1,-50..200" />

    <div id="page">
        <nav>
            
            <span class="material-symbols-outlined">
                <button class="btn">home</button>
            </span>
            <div id="band">${Room name}</div>
            <span class="material-symbols-outlined">
                <button class="btn">person</button>
            </span>
        </nav>
        <div id="middle">middle</div>
        <div id="btm"><img src="../../../assets/GShepherd Logo.png"></div>
    </div>
</template>

<style scoped>
@import url('../../../../public/bootstrap-5.2.2/bootstrap-5.2.2-dist/css/bootstrap.css');
nav{
    width: 100vm;
    height: 10vh;
    background-color: #fff0b3;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
span{
    margin-left: 10vw;
    margin-right: 10vw;
}
.btn{
    font-size: 1.8rem;
}
nav #band{
    font-family: 'Noto Sans TC', sans-serif;
    font-size: 2rem; 
}
#page{
    width: 100vm;
    height: 100vh;
}
#middle{
    width: 100vm;
    height: 80vh;
    background-image: url(./background.png);
    background-size: cover;
}
#btm{
    width: 100vm;
    height: 10vh;
    border-top: 2px rgba(163, 42, 42,0.8) solid;
    display: flex;
    align-content: center;    
    justify-content: center;
}
.material-symbols-outlined {
    font-size: 1.8rem;
}
</style>