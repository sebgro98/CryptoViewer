<template>
  <UserInformationView
      v-if="currentUser"
      :username="currentUser"
      :cryptos = "this.favCrypto"
      @onCryptoClick="setCurrentCryptoACB"
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
      currentUser: String,
      favCrypto: Array
    }
  },
  created() {
    if (this.model.currentLoggedInUser) {
      this.currentUser = this.model.currentLoggedInUser;
    }
    if (this.model.favCryptos) {
      this.favCrypto = this.model.favCryptos;
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
