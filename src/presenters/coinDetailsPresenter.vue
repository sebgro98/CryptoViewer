<template>
  <coinDetails
      :apiData="promiseState.data"
      :user="this.model.currentLoggedInUser"
      :cryptoInFavorites = "cryptoInFavorites"
      @onAddToFavoritesClick="addCryptoToFavorites"
      @onRemoveFromFavoritesClick="removeCryptoFromFavorites"
  />
</template>

<script>
import coinDetails from '../views/coinDetailsView.vue';
import {getCryptoDetails} from "@/cryptoSource";
import resolvePromise from "@/resolvePromise";

export default {
  name: "coinDetailsPresenter",
  components: {coinDetails},
  props: ['model'],

  data() {
    return {
      promiseState: {},
      cryptoInFavorites: true

    }
  },

  created() {
    if (this.model.currentCrypto) {
      resolvePromise(getCryptoDetails(this.model.currentCrypto), this.promiseState)
    }
    if (this.model.currentLoggedInUser) {
      this.cryptoInFavorites = Object.values(this.model.accounts[this.model.currentLoggedInUser]['cryptos']).includes(this.model.currentCrypto)
    }
  },
  methods: {
    addCryptoToFavorites() {
      this.cryptoInFavorites = this.model.addCryptoToFavorites(this.model.currentCrypto)

    },
    removeCryptoFromFavorites() {
      this.cryptoInFavorites = this.model.removeCryptoToFavorites(this.model.currentCrypto)
    }
  }
}
</script>

<style>

</style>