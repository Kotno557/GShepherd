<script setup>
import login from "./components/login.vue";
import sign_up from "./components/sign_up.vue";
</script>

<script>
export default {
  data() {
    return {
      isLogin: false,
      selectBar: ["onSelect selecter", "selecter"]
    }
  },
  methods: {
    clickChange: function () {
      if (this.isLogin === true) {
        this.selectBar[0] = "selecter";
        this.selectBar[1] = "onSelect selecter";
      } else {
        this.selectBar[0] = "onSelect selecter";
        this.selectBar[1] = "selecter";
      }
    },
    emailchecker: function (email) {
      function find_at(str) {
        for (let i = 0; i < str.length; i++) {
          if (str[i] === "@") return i;
        }
        return -1;
      }
      function find_dot(str) {
        let res = [];
        for (let i = 0; i < str.length; i++) {
          if (str[i] === ".") res.push(i);
        }
        return res;
      }
      let at_index = find_at(email);
      if (at_index === -1) return false;
      let username = email.substring(0, at_index);
      let mailServer = email.substring(at_index + 1);

      if (username === "" || mailServer === "") return false;
      // check for user name
      for (let i = 0; i < username.length; i++) {
        let now = username[i];
        if (
          !(
            (now >= "a" && now <= "z") ||
            (now >= "A" && now <= "Z") ||
            (now >= "0" && now <= "9") ||
            now === "." ||
            now === "_"
          )
        ) {
          return false;
        }
        if (
          (i === 0 || i === username.length - 1) &&
          (now === "." || now === "_")
        ) {
          return false;
        }
      }
      //check for server name
      let dots_index = find_dot(mailServer);
      if (dots_index.length < 1) return false;
      for (let i = 0; i < dots_index.length - 1; i++) {
        if (dots_index[i + 1] - dots_index[i] === 1) {
          return false;
        }
      }

      return true;
    }
  }
};
</script>

<template>
  <div id="wrapper">
    <div id="container">
      <div>
        <div id="logo" class="d-flex justify-content-center">
          <a href="/"><img src="../../../assets/GShepherd_Logo.png" /></a>
        </div>
        <div id="select-bar">
          <div id="sign-up" :class="selectBar[0]" @click="
  isLogin = false;
clickChange();
          ">
            <h4>註冊</h4>
          </div>
          <div id="login" :class="selectBar[1]" @click="
  isLogin = true;
clickChange();
          ">
            <h4>登入</h4>
          </div>
        </div>
        <div id="input-aria">
          <login v-if="isLogin" emailchecker="emailchecker" userData="userData" />
          <sign_up v-else />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url("../../../../public/bootstrap-5.2.2/bootstrap-5.2.2-dist/css/bootstrap.css");

#logo img {
  width: 40vmin;
}

#container {
  display: flex;
  align-items: center;
  justify-content: center;
}

#wrapper {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(./components/background.png);
  background-size: cover;
  background-position: 50% 50%;
}

#select-bar {
  display: flex;
  text-align: center;
  justify-content: center;
}

#sign-up {
  border-radius: 2vmin 0 0 0;
}

#login {
  border-radius: 0 2vmin 0 0;
}

#container {
  width: 60vmin;
  height: 95vmin;
  border-radius: 4vmin;
  background-color: rgba(255, 255, 255, 0.6);
}

#input-aria {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0% 0% 2vmin 2vmin;
  height: 65vmin;
  width: 50vmin;
  background-color: rgba(145, 151, 144, 0.7);
}

.selecter {
  padding: 2vmin;
  width: 50%;
}

.onSelect {
  background-color: rgba(145, 151, 144, 0.7);
}

div {
  font-family: "Noto Sans TC", sans-serif;
}

h4 {
  font-size: 2.5vmin;
}
</style>
