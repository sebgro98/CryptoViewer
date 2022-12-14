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
      username: undefined,
      password: undefined,
    }
  },
  methods: {
    createAccount() {
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