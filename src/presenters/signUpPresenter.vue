<template>
  <SignUpView
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
    createAccount() {
      if (this.password === "" || this.username === "") {
        alert("Invalid account details")
        return;
      }
      let signupSuccess = this.model.createAccount(this.username, this.password)
      console.log(this.model.accounts)
      if (signupSuccess) alert("Account created!")
      else alert("Account exists already!")
    },
    updateUsernameInput(username) {
      this.username = username;
    },
    updatePasswordInput(password) {
      this.password = password;
    }
  }
}
</script>

<style scoped>

</style>