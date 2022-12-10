<template>
  <cryptoView
      :clone="clone"
      :textSearch="textSearch"
      @search-crypto="searchCrypto"
  />
</template>

<script>
import cryptoView from '../views/CryptoSearchFormView.vue';
import {clone} from "@/cryptoSource";
export default {
  name: "tempCryptoPresenter",
  components: {cryptoView},


  data() {
    return {
      clone,
      textSearch: "",
    }
  },

  methods: {
    searchCrypto() {
      this.take = clone
  this.take = this.take.filter(crypto => crypto.name.toLowerCase().includes(this.textSearch.toLowerCase()))
}
  }
}
</script>

<style>

</style>