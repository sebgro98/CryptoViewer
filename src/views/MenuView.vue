<template>
  <div class="menuNav" id="myMenuNav">'
    <a id="menuName">CryptoViewer </a>
    <a><RouterLink to="/home">Home</RouterLink></a>
    <a><RouterLink to="/findUsers">Find Users</RouterLink></a>
    <a v-if="logged_in" ><RouterLink to="/login">Login</RouterLink></a>
    <a v-if="logged_in"><RouterLink to="/signup">Sign up</RouterLink></a>
    <a v-if="!logged_in"><RouterLink to="/profile">Profile</RouterLink></a>
    <a v-if="!logged_in"><RouterLink to="/logout">Logout</RouterLink></a>
    <a href="javascript:void(0);" class="icon" onclick="myFunction()">
      <i class="fa fa-bars"></i>
    </a>
  </div>

</template>

<script>
function myFunction() {
  var x = document.getElementById("myMenuNav");
  if (x.className === "menuNav") {
    x.className += " responsive";
  } else {
    x.className = "menuNav";
  }
}

export default {

  data() {
    return {
      logged_in: true
    }
  },
  methods: {

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
  background-color: #2d2d2d;
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
}

.menuNav a:hover {
  background-color: #ddd;
  color: black;
}

.menuNav a.active {
  background-color: #04AA6D;
  color: white;
}

.menuNav .icon {
  display: none;
}

@media screen and (max-width: 600px) {
  .menuNav a:not(:first-child) {display: none;}
  .menuNav a.icon {
    float: right;
    display: block;
  }
}

@media screen and (max-width: 600px) {
  .menuNav.responsive {position: relative;}
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
}

</style>