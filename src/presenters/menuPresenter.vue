<template>
  <MenuView
      :loggedIn="this.model.currentLoggedInUser"
      @OnLogoutClick="logout"
  />
</template>

<script>
import MenuView from "../views/MenuView.vue";
export default {
  name: "menuPresenter",
  components: {MenuView},
  props: ["model"],
  methods: {
    logout() {
      this.model.logout();
      alert("You have successfully logged out!")
    }
  }
}
</script>

<style scoped>

</style>