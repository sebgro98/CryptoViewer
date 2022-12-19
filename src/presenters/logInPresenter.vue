<template>
  <loginView
      v-if="!this.model.currentLoggedInUser"
      @onLogButtonClick="loginToAccount"
      @onPasswordInput="LogInPasswordInput"
      @onUsernameInput="LogInUsernameInput"
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
      alert("Successfully logged in")
      this.$router.push({path: '/home'})
    },

  }
}
</script>


<style scoped>

</style>