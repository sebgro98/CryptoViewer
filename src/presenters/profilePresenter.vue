<template>
  <UserInformationView
      v-if="currentUser"
      :username="this.currentUser"
      :cryptos = "this.favCrypto"
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
}
</script>

<style>

</style>
