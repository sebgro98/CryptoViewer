<template>
  <SignUpView
      v-if="!this.model.currentLoggedInUser"
      @onButtonClick="createAccount"
      @onPasswordUpdate="updatePasswordInput"
      @onUsernameUpdate="updateUsernameInput"
  />
</template>

<script>
import SignUpView from "../views/SignUpView.vue";
export default {
  name: "signUpPresenter",
  components: {SignUpView},
  props: ["model"],
  data() {
    return {
      username: "",
      password: "",
    }
  },
  methods: {
    updateUsernameInput(username) {
      this.username = username;
    },
    updatePasswordInput(password) {
      this.password = password;
    },
    createAccount() {
      if (this.password === "" || this.username === "") {
        alert("Invalid account details")
        return;
      }
      this.model.setAccountDetails(this.username, this.password)
      alert("Account created!")
      this.$router.push({path: '/login'})
    },

  }
}
</script>

<style scoped>

</style>