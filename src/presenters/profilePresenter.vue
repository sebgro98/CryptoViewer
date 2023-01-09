<template>
  <UserInformationView
      v-if="this.model.currentLoggedInUser"
      :username="this.model.currentLoggedInUser"
      :cryptos = "this.model.favCryptos"
      @onCryptoClick="setCurrentCryptoACB"
  />
</template>

<script>
 import UserInformationView from '../views/UserInformationView.vue';
export default {
  name: "profilePresenter",
  components: {UserInformationView},
  props: ["model"],

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
