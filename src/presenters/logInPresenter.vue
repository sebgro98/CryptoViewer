<template>
  <loginView
      v-if="!this.model.currentLoggedInUser"
      @onButtonClick="loginToAccount"
      @onPasswordUpdate="updatePasswordInput"
      @onUsernameUpdate="updateUsernameInput"
  />
</template>

<script>
import loginView from "../views/LoginView.vue";
export default {
  name: "logInPresenter",
  components: {loginView},
  props: ["model"],
  data() {
    return {
      password: "",
      username: "",
    }
  },
  methods: {
    loginToAccount() {
      console.log("tests")
      if (this.password === "" || this.username === "") {
        alert("Invalid account details")
        return;
      }
      console.log(this.username);
      console.log(this.username.valueOf());
      let signupSuccess = this.model.attemptLogin(this.username.valueOf(), this.password.valueOf())
      console.log("signupSuccess: ");
      console.log(signupSuccess);
      if (signupSuccess) {
        this.$router.push({path: '/loggedinProfile'})
        alert("Successfully logged in")
      }
      else alert("Incorrect account details. Try again!")

    },
    updatePasswordInput(password) {
      this.password = password;
    },
    updateUsernameInput(username) {
      this.username = username;
    }
  }
}
</script>

<script setup>

</script>

<style scoped>

</style>