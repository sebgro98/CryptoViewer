<template>
  <loginView
      v-if="!this.model.currentLoggedInUser"
      @onLogButtonClick="loginToAccount"
      @onPasswordInput="LogInPasswordInput"
      @onUsernameInput="LogInUsernameInput"
  />
  <h1 v-else><RouterLink to="loggedinProfile">Go to profile</RouterLink></h1>

</template>

<script>
import loginView from "../views/LoginView.vue";
export default {
  name: "logInPresenter",
  components: {loginView},
  props: ["model"],
  data() {
    return {
      logUsername: "",
      logPassword: "",
    }
  },
  methods: {
    LogInPasswordInput(password) {
      this.logPassword = password;
    },
    LogInUsernameInput(username) {
      this.logUsername = username;
    },
    loginToAccount() {
      if (this.logUsername === "" || this.logPassword === "") {
        alert("Invalid account details")
        return;
      }
      this.model.logIn(this.logUsername, this.logPassword);
    },
    goToProfile() {
      console.log("test")
      this.$router.push({path: '/profile'})
    }
  }
}
</script>


<style scoped>

</style>