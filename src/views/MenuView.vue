<template>
  <div class="menuNav" id="myMenuNav">
    <a id="menuName" class="menuResOpenBG">CryptoViewer</a>
    <a><RouterLink to="/home"><span>Home</span></RouterLink></a>
    <a><RouterLink to="/findUsers"><span>Find Users</span></RouterLink></a>
    <a v-if="!loggedIn" ><RouterLink to="/login"><span>Login</span></RouterLink></a>
    <a v-if="!loggedIn"><RouterLink to="/signup"><span>Sign up</span></RouterLink></a>
    <a v-if="loggedIn"><RouterLink to="/loggedinProfile"><span>Profile</span></RouterLink></a>
    <a v-on:click="logoutFromAccount" v-if="loggedIn"><RouterLink to="/home">Logout</RouterLink></a>
    <a href="javascript:void(0);" class="icon" v-bind:onclick="responseMenuACB">
      <label for="checkbox_toggle" class="menuCheckBox">&#9776;</label>
    </a>
  </div>

</template>

<script>

export default {
  props: {
    loggedIn: String,
  },
  methods: {
    responseMenuACB() {
      let x = document.getElementById("myMenuNav");
      if (x.className === "menuNav") {
        x.className += " responsive";
      } else {
        x.className = "menuNav";
      }
    },
    logoutFromAccount() {
      this.$emit("OnLogoutClick")
    }
  }
}
</script>

<style>

#menuName {
  color: #FFD700;
  font-size: 21px;
  padding-top: 20px;
}
body {
  margin: 0;
  padding: 0;
}
.menuNav {
  overflow: hidden;
  background-color: #31313A;
}

.menuNav a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 12px 16px;
  text-decoration: none;
  font-size: 18px;
  font-weight: 500;
  height: 100%;
}

.menuNav a:hover {
  color: #FF8C00;

}

.menuNav .icon {
  display: none;
}

@media screen and (max-width: 650px) {
  .menuNav a:not(:first-child) {display: none;}
  .menuNav a.icon {
    float: right;
    display: block;
  }
}

@media screen and (max-width: 650px) {
  .menuNav.responsive {
    position: relative;
  }

  .menuNav.responsive .icon {
    position: absolute;
    right: 0;
    top: 0;
  }
  .menuNav.responsive a {
    float: none;
    display: block;
    text-align: left;
  }

  .menuResOpenBG{
    background-color:#2e2e2e;
  }

  .menuResOpenBG:hover{
    background-color:#2e2e2e;
  }
  #menuName:hover{
    background-color:#2e2e2e;
  }
}

</style>