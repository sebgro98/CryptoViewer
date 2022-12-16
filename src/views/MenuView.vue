<template>
  <div class="menuNav" id="myMenuNav">
    <a id="menuName" class="menuResOpenBG">CryptoViewer </a>
    <a><RouterLink to="/home">Home</RouterLink></a>
    <a><RouterLink to="/findUsers">Find Users</RouterLink></a>
    <a v-if="!loggedIn" ><RouterLink to="/login">Login</RouterLink></a>
    <a v-if="!loggedIn"><RouterLink to="/signup">Sign up</RouterLink></a>
    <a v-if="loggedIn"><RouterLink to="/loggedinProfile">Profile</RouterLink></a>
    <a v-on:click="logoutFromAccount" v-if="loggedIn"><RouterLink to="/home">Logout</RouterLink></a>
    <a href="javascript:void(0);" class="icon" v-bind:onclick="responsMenuACB">
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
    responsMenuACB() {
      var x = document.getElementById("myMenuNav");
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
#menuName:hover{
  background-color: #5d5d5d;
}

body {
  margin: 0;
  padding: 0;
}
.menuNav {
  overflow: hidden;
  background-color: #5d5d5d;
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
  background-color: #ddd;
  color: black;
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