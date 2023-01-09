<template>
  <UserInformationView
      v-if="this.model.currentUser"
      :username="this.model.currentUser"
      :cryptos = "this.model.favCryptos"
      @onCryptoClick="setCurrentCryptoACB"
  />
  <h1 v-else>Error 404</h1>
</template>

<script>
import UserInformationView from '../views/UserInformationView.vue';
export default {
  name: "profileDetailsPresenter",
  components: {UserInformationView},
  props: ["model"],
  created() {
    if (this.model.currentUser) {
      this.model.getFavoritesFromFirestore(this.model.currentUser)
    }
  },
  methods: {
    setCurrentCryptoACB(id) {
      this.model.setCurrentCrypto(id);
      this.$router.push({path: '/details' + "/" + id})
    }
  }
}
</script>

<style>

</style>
