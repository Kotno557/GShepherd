<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      emailIsValid: true,
      passwordValid: true,
      activeElement: null,
      //假設資料庫目前有以下的使用者資料
      userData: [
        {
          id: "356a192b7913b04c54574d18c28d46e6395428ab",
          email: "david@example.com",
          password: "mypassword001",
        },
        {
          id: "da4b9237bacccdf19c0760cab7aec4a8359010b0",
          email: "niz@example.com",
          password: "password2",
        },
        {
          id: "77de68daecd823babbb58edb1c8e14d7106e83bb",
          email: "jack@example.com",
          password: "jackpassword",
        },
        {
          id: "1b6453892473a467d07372d45eb05abc2031647a",
          email: "maria@example.com",
          password: "mariapassword",
        },
        {
          id: "ac3478d69a3c81fa62e60f5c3696165a4e5e6ac4",
          email: "deniel@example.com",
          password: "deniel_password",
        },
      ],
    };
  },
  methods: {
    submit: function () {
      this.emailIsValid = this.emailchecker(this.email);
      this.passwordValid = this.passwordchecker(this.password);
      console.log(this.emailIsValid);
      console.log(this.passwordValid);
      if(this.emailIsValid && this.passwordValid){
        location.href = `/dashboard/${this.userData.find(o => o.email==this.email).id}`;
      }
    },
    emailchecker: function () {
      let at_index = this.find_at(this.email);
      console.log(at_index);
      if (at_index == -1) return false;
      let username = this.email.substring(0, at_index);
      let mailServer = this.email.substring(at_index + 1);
      console.log(username);
      console.log(mailServer);

      if (username == "" || mailServer == "") return false;
      // check for user name
      for (let i = 0; i < username.length; i++) {
        let now = username[i];
        if (
          !(
            (now >= "a" && now <= "z") ||
            (now >= "A" && now <= "Z") ||
            (now >= "0" && now <= "9") ||
            now == "." ||
            now == "_"
          )
        ) {
          return false;
        }
        if (
          (i == 0 || i == username.length - 1) &&
          (now == "." || now == "_")
        ) {
          return false;
        }
      }
      //check for server name
      let dots_index = this.find_dot(mailServer);
      if (dots_index.length < 1) return false;
      for (let i = 0; i < dots_index.length - 1; i++) {
        if (dots_index[i + 1] - dots_index[i] == 1) {
          return false;
        }
      }

      return true;
    },
    passwordchecker: function () {
      let userIndex=this.userData.findIndex(o=>o.email===this.email);
      if(userIndex==-1) return false;
      else{
        return this.password==this.userData[userIndex].password;
      }
    },
    find_at: function (str) {
      for (let i = 0; i < str.length; i++) {
        if (str[i] == "@") return i;
      }
      return -1;
    },
    find_dot: function (str) {
      let res = [];
      for (let i = 0; i < str.length; i++) {
        if (str[i] == ".") res.push(i);
      }
      return res;
    },
  },
};
</script>

<template>
  <div>
    <div>
      <div
        v-if="emailIsValid == false || passwordValid == false"
        class="alert alert-danger"
        role="alert"
      >
        {{ emailIsValid == false ? "信箱格式錯誤" : "密碼錯誤，或帳戶不存在" }}
      </div>
    </div>
    <div>
      E-mail:<br />
      <input
        type="email"
        class="form-control"
        aria-describedby="emailHelp"
        placeholder="Enter email"
        v-model="email"
      />
    </div>
    <div>
      Password:<br />
      <input
        type="password"
        class="form-control"
        id="exampleInputPassword1"
        placeholder="Password"
        v-model="password"
      />
    </div>

    <div class="d-flex align-items-center justify-content-center">
      <button class="btn btn-dark" @click="submit()">Submit!</button>
    </div>
  </div>
</template>

<style scoped>
@import url("../../../../../public/bootstrap-5.2.2/bootstrap-5.2.2-dist/css/bootstrap.css");
div {
  margin-bottom: 1.5vmin;
  margin-top: 0.25vmin;
  font-size: 2vmin;
}
button {
  margin-top: 2vmin;
  font-size: 1.8vmin;
}
input {
  margin-top: 0.25vmin;
}
.form-control {
  font-size: 2vmin;
}
</style>
