<script>
export default {
    data() {
        return {
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
            //假設資料庫目前有以下的使用者資料
            userData: this.$parent.$options.data().userData,
            emailchecker: this.$parent.$options.methods.emailchecker,
        };
    },
    methods: {
        jumpDashboard: function () {
            this.email.initial = true;
            this.passwordAgain.initial = true;
            let v = `/dashboard/getUsername_temp`;
            console.log(this.email.valid, this.password.stredch, this.passwordAgain.valid)
            if (this.email.valid && this.password.stredch.length == 1 && this.passwordAgain.valid) {
                this.okForSubmmit = true;
                window.location.href = v;
            } else {
                this.okForSubmmit = false;
            }
        },
        checkPasswordAgain() {
            let class_arr = ["d-none", "badge bg-danger text-wrap"];
            if (this.passwordAgain.value == this.password.value) {
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
            <div v-if="okForSubmmit == false" class="alert alert-danger" role="alert">
                {{ "請確認所有資料符合規定後再送出" }}
            </div>
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
    margin-bottom: 1vmin;
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
    font-size: 2vmin;
}
</style>
