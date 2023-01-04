<template>
  <div class="login">
    <div class="text-login">
    <h2>Log in</h2>
    </div>
    <div class="change-form">
    <form v-on:submit.prevent
          @keyup.enter="setAccountDetails
          ">
      <label for="Username">Username</label><br>
      <input v-on:input="setUsernameInputLog" placeholder="Username" type="text" id="Username"> <br>
      <label for="Password">Password</label><br>
      <input v-on:input="setPasswordInputLog" placeholder="Password" type="password" id="Password" >
      <span>
      <button @click="setAccountDetails" type="button" class="login_button">Log in</button>
      </span>
    </form>
    </div>
  </div>
</template>

<script>
export default{
  name: "LoginView",
  methods: {
    setPasswordInputLog(evt) {
      this.$emit("onPasswordInput", evt.target.value)
    },
    setUsernameInputLog(evt) {
      this.$emit("onUsernameInput", evt.target.value)
    },
    setAccountDetails() {
      this.$emit("onLogButtonClick");
    }
  }
}
</script>


<style>

body {
  margin: 0;
  font-family: 'Rubik', 'Segoe UI', 'Roboto', 'Oxygen',
  'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
  sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #f4f4f4;
  background-color: #1a1a1c;
}

.login{
  padding: 50px;
  color: white;
  background: #212121;
  border-radius: 10px;
  margin: auto;
  width: 30%;
  margin-top: 60px;
}

.text-login h2{
  font-size: 30px;
}

                                                     /* CSS */
.login_button {
  background-color: white;
  border: 2px solid #4aafff;
  border-radius: 15px;
  color: #000000;
  cursor: pointer;
  display: inline-block;
  font-family: Roobert,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
  font-size: 16px;
  font-weight: 600;
  line-height: normal;
  height: 40px;
  text-align: center;
  transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
  width: 50%;
}


.login_button:hover {
  color: #fff;
  background-color: #1a1a1c;
  box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
  transform: translateY(-2px);
}

.login_button:active {
  box-shadow: none;
  transform: translateY(0);
}

.change-form form {
  text-align: center;
  padding-left: 10%;
  padding-right: 10%;
}
input {
  width: 80%;
  margin-bottom: 20px;
  height: 30px;
}

label{
  font-size: 17px;
  font-weight: 400;
}

@media only screen and (max-width: 900px) {
   .login{
     width: 60%;
  }
}

</style>
