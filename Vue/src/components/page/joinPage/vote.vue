<script>
    export default{
        props: ['roomTopic'],
        data(){
            return{
                slection: ""
            }
        },
        methods:{
            setSelection: function(){
                this.slection=document.getElementById('selections').value.split(',');
                console.log(this.slection);
            }
        }
    }
</script>

<template>
    <div class="cheet-bar">
        <small>Cheet Board</small><br>
        選項:<input id="selections" type="text" placeholder="選項" style="width: 70%;"/>
        <br>
        <input type="button" value="OK" @click="setSelection()"/> 
    </div>
    <div id="safe">
        <div style="jusfy-content: center;">
            <h4>{{roomTopic}}</h4>
            <div>
                <div class="bar" v-for="item in this.slection" style="margin: 5px">
                    <input type="radio" name="radAnswer" />{{item}}
                </div>
            </div>
            <button class="btn btn-primary">Submmit</button>
        </div>
    </div>
</template>

<style scoped>
@import url('../../../../public/bootstrap-5.2.2/bootstrap-5.2.2-dist/css/bootstrap.css');
h4{
    font-size: 3.5vmin;
}
.bar{
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
</style>