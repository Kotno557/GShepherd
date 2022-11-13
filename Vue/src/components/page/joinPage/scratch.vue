<script>
import ScratchCard from '../../../../node_modules/vue-scratchcard/src/ScratchCard.vue';
export default{
        props: ['roomTopic'],
        components: {
            ScratchCard
        },
        data(){
            return{
                isWining: false,
                //vue scratch need it
                renderCount: 0,
                cardWidth: 300,
                cardHeight: 300,
                finishPercent: 70,
                forceReveal: false,
            }
        }
    }
</script>

<template>
    <div class="cheet-bar">
        <small>Cheet Board</small><br>
        是否中獎?
        <input type="checkbox" v-model="this.isWining" />
    </div>
    <div id="safe">
        <div class="myfont" style="jusfy-content: center;">
            <h4>{{roomTopic}}</h4>
            <scratch-card :key="renderCount"
                :cardWidth="cardWidth"
                :cardHeight="cardHeight"
                :finishPercent="finishPercent"
                imageUrl='/Gshepherd/src/components/page/joinPage/scratchbg.png'
                :forceReveal="forceReveal">
                <h1 class="card-content">{{isWining?"恭喜您！您中獎了！":"銘謝惠顧，下次加油..."}}</h1>
            </scratch-card>
        </div>
    </div>
</template>

<style scoped>
@import url('../../../../public/bootstrap-5.2.2/bootstrap-5.2.2-dist/css/bootstrap.css');
h4{
    font-size: 3.5vmin;
}
.form-control{
    border: 0;
}
.bar{
    justify-content: center;
    width: 15vmin;
    border: solid;
}
#safe{
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
}
body {
   overflow-y: hidden;
}
#safe div{
    text-align: center;
}
.cheet-bar{
    background-color: rgba(205, 207, 204,0.6);
    position: absolute;
    top: 5vmin;
    left: 2vmin;
    border: 1px black solid;
    height: 200px;
    width: 200px;
}
.myfont{
    font-family: 'Noto Sans TC', sans-serif;
    font-size: 2vmin; 
}

::-webkit-scrollbar {
    width: 6px;
    height: 6px;
}

::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.1); 
    border-radius: 10px;
}

::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.2); 
}



.card-content{
    margin-top: 35%;
    background-color: white;
    color: red;
}
</style>