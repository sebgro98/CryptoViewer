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
      cryptoInFavorites: true,

    }
  },

  async created() {
    if (this.model.currentCrypto) {
      resolvePromise(getCryptoDetails(this.model.currentCrypto), this.promiseState)
      if (this.model.currentLoggedInUser) {
        await this.model.getFavoritesFromFirestore(this.model.currentLoggedInUser)
        this.cryptoInFavorites = this.model.favCryptos.includes(this.model.currentCrypto)
      }
    }
  },
  methods: {
    addCryptoToFavorites() {
      this.cryptoInFavorites = this.model.saveFavoriteCrypto(this.model.currentCrypto)
    },
    removeCryptoFromFavorites() {
      this.cryptoInFavorites = this.model.removeFavoriteCrypto(this.model.currentCrypto)
    }
  }
}
</script>