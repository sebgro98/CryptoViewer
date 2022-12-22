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
    }
  }
}
</script>