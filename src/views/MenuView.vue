<template>
  <ul>
    <li id="menuName">CryptoViewer</li>
    <li><RouterLink to="/home">Home</RouterLink></li>
    <li><RouterLink to="/findUsers">Find Users</RouterLink></li>
    <!--WE WANT TO CALL printCorrectMenu here!-->
  </ul>
</template>

<script>
const logged_in = true;
export default {
  methods: {
    printCorrectMenu() {
      let newNode = document.createElement('p');
      if (logged_in) {
        let html ='<li id="SecondLastChild"><RouterLink to="/Profile">Profile</RouterLink></li><li id="lastChild"><RouterLink to="/Logout">Logout</RouterLink></li>';
        newNode.appendChild(document.createTextNode(html));
      }
      else {
        let html ='<li id="SecondLastChild"><RouterLink to="/SignInForm">Sign in</RouterLink></li><li id="lastChild"><RouterLink to="/SignUpForm">Sign up</RouterLink></li>';
        newNode.appendChild(document.createTextNode(html));
      }
    }
  }
}
</script>

<style>
#lastChild {
  position: absolute;
  right: 20px;
}

#SecondLastChild {
  position: absolute;
  right: 100px;
}

#menuName {
  color: white;
  font-size: 20px;
}

body {
  margin: 0;
  padding: 0;
}

ul {
  background-color: #001687;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0;
  margin: 0;
}
ul li a {
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

ul a:hover {
  background-color: #8eb3dc;
}

ul li {
  list-style-type: none;
  padding-left: 10px;
}
</style>