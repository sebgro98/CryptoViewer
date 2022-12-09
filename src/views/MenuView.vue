<template>
  <ul>
    <li id="menuName">CryptoViewer</li>

    <li><RouterLink to="/home">Home</RouterLink></li>
    <li><RouterLink to="/findUsers">Find Users</RouterLink></li>
    <li v-if="!logged_in"><RouterLink to="/login">Login</RouterLink></li>
    <li v-if="!logged_in"><RouterLink to="/signup">Sign up</RouterLink></li>
    <li v-if="logged_in"><RouterLink to="/profile">Profile</RouterLink></li>
    <li v-if="logged_in"><RouterLink to="/logout">Logout</RouterLink></li>

    <!--WE WANT TO CALL printCorrectMenu here!-->
  </ul>
</template>

<script>
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
  color: white;
  font-size: 20px;
}

body {
  margin: 0;
  padding: 0;
}

ul {
  background-color: #000000;
  height: 80px;
  display: flex;
  align-items: center;
  padding: 0;
  margin: 0;
  opacity: 0.7;
}
ul li a {
  color: #ffffff;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

ul a:hover {
  background: #490049;

}

ul li {
  list-style-type: none;
  padding-left: 10px;
}
</style>