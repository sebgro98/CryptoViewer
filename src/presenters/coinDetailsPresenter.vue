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
import {getCryptoDetails,getCryptoChart, cryptoChart} from "@/cryptoSource";
import resolvePromise from "@/resolvePromise";
import promiseNoData from "@/views/promiseNoData.vue";



export default {
  name: "coinDetailsPresenter",
  components: {promiseNoData, coinDetails},
  props: ['model'],


  data() {
    return {
      cryptoChart,
      promiseState: {},
      cryptoInFavorites: true

    }
  },

  created() {
    if (this.model.currentCrypto) {
      getCryptoChart(this.model.currentCrypto)
      console.log(cryptoChart._rawValue)
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