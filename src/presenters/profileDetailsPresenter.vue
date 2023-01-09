<template>
  <UserInformationView
      v-if="currentUser"
      :username="currentUser"
      :cryptos = "this.model.favCryptos"
  />
  <h1 v-else>Error 404</h1>
</template>

<script>
import UserInformationView from '../views/UserInformationView.vue';
export default {
  name: "profileDetailsPresenter",
  components: {UserInformationView},
  props: ["model"],
  data() {
    return {
      userCryptos: undefined,
      currentUser: undefined,
    }
  },
  created() {
    if (this.model.currentUser) {
      this.currentUser = this.model.currentUser
      this.model.getFavoritesFromFirestore(this.model.currentUser)
      console.log(this.model.favCryptos)
    }
  },
}
</script>

<style>

</style>
