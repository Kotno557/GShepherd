<script>
export default {
  data() {
    return {
      email: {
        value: "",
        class: "d-none",
        valid: true
      },
      password: {
        value: "",
        class: "d-none",
        stredch: true
      },
      passwordAgain: {
        value: "",
        class: "d-none",
        valid: true
      },
      //假設資料庫目前有以下的使用者資料
      userData: this.$parent.$options.data().userData,
      emailchecker: this.$parent.$options.methods.emailchecker,
    };
  },
  methods: {
    jumpDashboard: function () {
      let v = `/dashboard/getUsername_temp`;
      window.location.href = v;
    },
    checkPasswordAgain(newElement){
      let class_arr = ["d-none", "badge bg-danger text-wrap"];
      if (newElement==this.password.value) {
        this.passwordAgain.class=class_arr[0];
        this.passwordAgain.valid=true;
      } else {
        this.passwordAgain.class=class_arr[1];
        this.passwordAgain.valid=false;
      }
    }
  },
  watch: {
    'email.value': function (newElement, oldElement) {
      console.log(newElement);
      let class_arr = ["d-none", "badge bg-danger text-wrap"];
      if (this.emailchecker(newElement)) {
        this.email.class=class_arr[0];
        this.email.valid=true;
      } else {
        this.email.class=class_arr[1];
        this.email.valid=false;
      }
    },
    password: function (newElement, oldElement) {
      console.log(newElement, oldElement);
      this.checkPasswordAgain(this.passwordAgain.value);
    },
    'passwordAgain.value': this.checkPasswordAgain
  },
};
</script>

<template>
  <div>
    <div>
      <div class="alert alert-danger" role="alert">
        {{ "請確認資料正確後再送出" }}
      </div>
    </div>
    <div>
      E-mail:<br />
      <input
        type="email"
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        placeholder="Enter email"
        v-model="email.value"
      />
      <span :class="email.class">E-mail格式錯誤!</span>
    </div>
    <div>
      Password:<br />
      <input
        type="password"
        class="form-control"
        id="exampleInputPassword1"
        placeholder="長度至少為8個字元的字串"
        v-model="password.value"
      />
      <div class="m-0">
        密碼強度: <span class="badge bg-danger text-wrap">不符規定!</span>
      </div>
    </div>

    <div>
      Password again:<br />
      <input
        type="password"
        class="form-control"
        id="exampleInputPassword2"
        placeholder="請輸入相同密碼"
        v-model="passwordAgain.value"
      /><span :class="passwordAgain.class">密碼不一致</span>
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
