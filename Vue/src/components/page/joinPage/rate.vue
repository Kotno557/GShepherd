<script>
    export default{
        props: ['roomTopic'],
        data(){
            return{
                question: 
                {
                    name: '您覺得這次的活動如何？',
                    grade: 3
                }   
            }
        },
        methods:{
            decreaceRate: function(){
                if(this.question.grade>1){
                    this.question.grade--;
                }
            },
            increaseRate: function(){
                if(this.question.grade<5){
                    this.question.grade++;
                }
            }
        }
    }

</script>

<template>
    <div id="safe">
        <div class="myfont" style="justify-content: center;">
            <div style="text-align: center; height: 20vh; " class= "overflow-auto myfont">
                <h4>{{question.name}}</h4>
                <br>
                <div id="bn"><input type="button" value="-" class="btn btn-primary" style="width: 30px; height: 30px;" @click="decreaceRate()"/> 
                    <span id="grade" class="mx-2"> {{question.grade}} </span> 
                    <input type="button" class="btn btn-primary" value="+" style="width: 30px; height: 30px;" @click="increaseRate()" />
                </div>
                <span>
                    <span class="face" v-if="question.grade===1">😡</span>
                    <span class="face" v-if="question.grade===2">😒</span>
                    <span class="face" v-if="question.grade===3">😐</span>
                    <span class="face" v-if="question.grade===4">🙂</span>
                    <span class="face" v-if="question.grade===5">😀</span>
                </span>
            </div>
            <button class="btn btn-dark" >繳交</button>
        </div>
    </div>
</template>

<style scoped>
@import url('../../../../public/bootstrap-5.2.2/bootstrap-5.2.2-dist/css/bootstrap.css');
h4{
    font-size: 3.5vmin;
}
#bn .btn{
    --bs-btn-padding-x: 0rem;
    --bs-btn-padding-y: 0rem;
}
.bar{
    justify-content: center;
    width: 15vmin;
    border: solid;
}
.face{
    font-size: 4vmin;
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

#grade{
    background-color:aliceblue;
    border-radius: 2vmin;
    padding-left: 3vmin;
    padding-right: 3vmin;
    padding-top: 1vmin;
    padding-bottom: 1vmin;
    margin-top: 20vmin;
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
</style>