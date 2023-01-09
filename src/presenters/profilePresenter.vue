<template>
  <UserInformationView
      v-if="currentUser"
      :username="this.currentUser"
      :cryptos = "this.model.favCryptos"
  />
  <h1 v-else>Error 404</h1>
</template>

<script>
 import UserInformationView from '../views/UserInformationView.vue';
export default {
  name: "profilePresenter",
  components: {UserInformationView},
  props: ["model"],
  data() {
    return {
      userCryptos: undefined,
      currentUser: undefined,
    }
  },
  created() {
    if (this.model.currentLoggedInUser) {
      this.currentUser = this.model.currentLoggedInUser;
      this.model.getFavoritesFromFirestore(this.model.currentLoggedInUser)
    }
  },
}
</script>

<style>

</style>
