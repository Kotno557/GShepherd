<script>
import axios from 'axios';

export default {
    data() {
        return {
            nickName: "",
            userName: "",
            email: {
                value: "",
                class: "d-none",
                valid: false,
                initial: false,
            },
            password: {
                value: "",
                class: "d-show",
                stredch: "",
            },
            passwordAgain: {
                value: "",
                valid: false,
                initial: false,
            },
            okForSubmmit: true,
            okForSignin: false,
            emailchecker: this.$parent.$options.methods.emailchecker
        };
    },
    methods: {
        jumpDashboard: function () {
            this.email.initial = true;
            this.passwordAgain.initial = true;
            console.log(this.email.valid, this.password.stredch, this.passwordAgain.valid)
            if (this.email.valid && this.password.stredch.length === 1 && this.passwordAgain.valid) {
                this.okForSubmmit = true;
                axios.post('http://139.162.39.223/api/user', {
                    email: this.email.value,
                    nickname: this.nickName,
                    username: this.userName,
                    password: this.password.value
                })
                    .then(response => {
                        this.okForSignin = response.status === 200;
                        //看這裡要不要加重設輸入
                        console.log(response);
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            } else {
                this.okForSubmmit = false;
            }
        },
        checkPasswordAgain() {
            let class_arr = ["d-none", "badge bg-danger text-wrap"];
            if (this.passwordAgain.value === this.password.value) {
                this.passwordAgain.class = class_arr[0];
                this.passwordAgain.valid = true;
            } else {
                this.passwordAgain.class = class_arr[1];
                this.passwordAgain.valid = false;
            }
        },
        checkPasswordValid() {
            let password = this.password.value;
            let res = 0;
            let simbol = [true, true, true, true];
            if (password.length >= 8) res += 5;
            if (password.length >= 12) res += 1;
            for (let i = 0; i < password.length; i++) {
                if (password[i] >= "a" && password[i] <= "z" && simbol[0])
                    res++, (simbol[0] = !simbol[0]);
                else if (password[i] >= "A" && password[i] <= "Z" && simbol[1])
                    res++, (simbol[1] = !simbol[1]);
                else if (password[i] >= "0" && password[i] <= "9" && simbol[2])
                    res++, (simbol[2] = !simbol[2]);
                else if (
                    " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~".includes(password[i]) &&
                    simbol[3]
                )
                    res++, (simbol[3] = !simbol[3]);
            }
            if (res < 6)
                (this.password.stredch = "不符合規定"),
                    (this.password.class = "badge bg-danger text-wrap");
            else if (res >= 6 && res <= 7)
                (this.password.stredch = "弱"),
                    (this.password.class = "badge bg-warning text-wrap");
            else if (res >= 8 && res <= 9)
                (this.password.stredch = "中"),
                    (this.password.class = "badge bg-success text-wrap");
            else
                (this.password.stredch = "強"),
                    (this.password.class = "badge bg-primary text-wrap");
        },
        clearAll(){
            this.nickName="";
            this.userName="";
            this.email.value="";
            this.passwordAgain.value="";
            this.passwordAgain.value="";
        }
    },
    watch: {
        "email.value": function (newElement, oldElement) {
            this.email.initial = true;
            if (this.emailchecker(newElement)) {
                this.email.valid = true;
            } else {
                this.email.valid = false;
            }
        },
        "password.value"() {
            this.checkPasswordAgain();
            this.checkPasswordValid();
        },
        "passwordAgain.value"() {
            this.passwordAgain.initial = true;
            this.checkPasswordAgain();
        },
    },
};
</script>

<template>
    <div>
        <div>
            <div v-if="okForSubmmit === false" class="alert alert-danger" role="alert">
                {{ "請確認所有資料符合規定後再送出" }}
            </div>
            <div v-if="okForSignin === true" class="alert alert-success" role="alert">
                {{ "註冊成功，請登入！" }}
            </div>

        </div>
        <div>
            Username:<br />
            <input type="username" class="form-control" placeholder="Enter username" v-model="userName" />
        </div>
        <div>
            Nickname:<br />
            <input type="username" class="form-control" placeholder="Enter nickname" v-model="nickName" />
        </div>
        <div>
            E-mail:<br />
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                placeholder="Enter email" v-model="email.value" />
            <span v-if="email.initial">
                <span v-if="email.valid" class="badge bg-success text-wrap"> ✓</span>
                <span v-else class="badge bg-danger text-wrap">E-mail格式錯誤!</span>
            </span>
        </div>
        <div>
            Password:<br />
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="長度至少為8個字元的字串"
                v-model="password.value" />
            <div class="m-0">
                密碼強度: <span :class="password.class">{{ password.stredch }}</span>
            </div>
        </div>

        <div>
            Password again:<br />
            <input type="password" class="form-control" id="exampleInputPassword2" placeholder="請輸入相同密碼"
                v-model="passwordAgain.value" />
            <span v-if="passwordAgain.initial">
                <span class="badge bg-success text-wrap" v-if="passwordAgain.valid">
                    ✓
                </span>
                <span class="badge bg-danger text-wrap" v-else>密碼不一致或為空</span>
            </span>
        </div>
        <div class="d-flex align-items-center justify-content-center">
            <button class="btn btn-dark" @click="jumpDashboard()">Submit!</button>
        </div>
    </div>
</template>

<style scoped>
@import url("../../../../../public/bootstrap-5.2.2/bootstrap-5.2.2-dist/css/bootstrap.css");

div {
    margin-bottom: 0vmin;
    margin-top: 0.25vmin;
    font-size: 1.8vmin;
}

button {
    margin-top: 1vmin;
    font-size: 1.5vmin;
}

input {
    margin-top: 0.25vmin;
}

.form-control {
    font-size: 1.75vmin;
}
</style>
