<template>
  <homeView
      @searchCurrentCrypto="searchForCurCryptoACB"
  />
  <coinDetails
      :coinData="coinDetailsPromiseState.data"
  />
</template>

<script>
import coinDetails from '../views/coinDetailsView.vue';
import homeView from '../views/HomeView.vue';
import {myAPICall} from "@/cryptoSource";
import resolvePromise from "@/resolvePromise";

export default {
  name: "coinDetailsPresenter",
  components: {coinDetails, homeView},

  data() {
    return {
      coinDetailsPromiseState: {},
    }
  },

  methods: {
    searchForCurCryptoACB() {
      console.log("sdgd");
      resolvePromise(myAPICall(), this.coinDetailsPromiseState)
    }
  }
}
</script>

<style>

</style>