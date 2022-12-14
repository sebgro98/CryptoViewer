<template>
  <loginView
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
      password: undefined,
      username: undefined,
    }
  },
  methods: {
    loginToAccount() {
      let signupSuccess = this.model.attemptLogin(this.username, this.password)
      if (signupSuccess) {
        //TODO Change to cryptoPresenter
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

<style scoped>

</style>