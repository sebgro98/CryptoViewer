<template>
  <promiseNoData
      :promiseState="promiseState"
  />
  <coinDetails v-if="promiseState.data"
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
import promiseNoData from "@/views/promiseNoData.vue";

export default {
  name: "coinDetailsPresenter",
  components: {promiseNoData, coinDetails},
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