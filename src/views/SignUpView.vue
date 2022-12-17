<template>
  <div class="login">
    <h2>Register</h2>
    <form v-on:submit.prevent>
      <label for="Username">Username</label><br>
      <input v-on:input="setUsernameInput" placeholder="Username" type="text" id="Username" v-model="email"> <br>
      <label for="Password">Password</label><br>
      <input v-on:input="setPasswordInput" placeholder="Password" type="password" id="Password" v-model="password">
      <p>OBS: We have access to passwords, use a password that is not important for you</p>
      <button @click="setAccountDetails" type="button" class="login_button">Register</button>
    </form>
  </div>
</template>

<script>
export default{
  name: "SignUpView",
  methods: {
    setPasswordInput(evt) {
      this.$emit("onPasswordUpdate", evt.target.value)
    },
    setUsernameInput(evt) {
      this.$emit("onUsernameUpdate", evt.target.value)
    },
    setAccountDetails() {

      this.$emit("onButtonClick");
    }
  }
}
</script>


<script setup>
/* In firebaseConfig paste:
initializeApp(firebaseConfig);

const app = createApp(App);

app.use(router);

app.mount("#app")
*/

  import {ref} from "vue";
  import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
  import {useRouter} from 'vue-router'

  const email = ref("");
  const password = ref("");

  // set the const below to "setAccountDetails" to attempt to connect to firebase
  const setAccountDetails1 = () => {
    console.log("test1");
    const auth = getAuth();
    console.log("test1.5");
    createUserWithEmailAndPassword(auth, email.value, password.value).then((data) => {
      console.log("Successfully registered!");
    }).catch((error) => {
      console.log("Error occurred!");
      console.log(error.code);
      alert(error.message);
    })
    console.log("test2");
  };


</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
body {
  background-color: #1a1a1c;
  color: #606468;
  margin: 0;
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
h2{
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
  background-color: #1A1A1A;
  box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
  transform: translateY(-2px);
}
.login_button:active {
  box-shadow: none;
  transform: translateY(0);
}
form {
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