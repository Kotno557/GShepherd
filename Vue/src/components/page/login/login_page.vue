<script setup>
    import login from './components/login.vue'
    import sign_up from './components/sign_up.vue'
</script>

<script>
    export default {
        data() {
            return {
                isLogin: false,
                selectBar: ['onSelect selecter','selecter']
            }
        },
        methods: {
            clickChange: function(){
                if(this.isLogin==true){
                    this.selectBar[0]='selecter';
                    this.selectBar[1]='onSelect selecter'
                }
                else{
                    this.selectBar[0]='onSelect selecter';
                    this.selectBar[1]='selecter'
                }
            }
        }
    }
</script>

<template>
    <div id="wrapper">
        <div id="container">
            <div>
                <div id="logo"><img src="../../../assets/GShepherd_Logo.png"></div>
                <div id="select-bar">
                    <div id="sign-up" :class="selectBar[0]" @click="isLogin=false;clickChange()"><h4>註冊</h4></div>
                    <div id="login" :class="selectBar[1]" @click="isLogin=true;clickChange()"><h4>登入</h4></div>
                </div>
                <div id="input-aria">
                    <login v-if="this.isLogin" />
                    <sign_up v-else />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
@import url('../../../../public/bootstrap-5.2.2/bootstrap-5.2.2-dist/css/bootstrap.css');
#logo img{
    width: 40vmin;
}
#container{
    display: flex;
    align-items: center;
    justify-content: center;
}
#wrapper{
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url(./components/background.png);
    background-size: cover;
    background-position: 50% 50%;
}
#select-bar{
    display: flex;
    text-align: center;
    justify-content: center;
}
#sign-up{
    border-radius: 2vmin 0 0 0;
}
#login{
    border-radius: 0 2vmin 0 0;
}
#container{
    width: 50vmin;
    height: 80vmin;
    border-radius: 10vmin;
    background-color: rgba(255, 255, 255, 0.6);
}

#input-aria{
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0% 0% 2vmin 2vmin;
    height: 45vmin;
    background-color: rgba(145, 151, 144, 0.7);
}
.selecter{
    padding: 2vmin;
    width: 50%;
}
.onSelect{
    background-color:  rgba(145, 151, 144, 0.7);
}

div{
    font-family: 'Noto Sans TC', sans-serif;
}
h4{
    font-size: 2.5vmin;
}
</style>