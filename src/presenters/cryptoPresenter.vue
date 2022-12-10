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
      let myTarget = JSON.parse(JSON.stringify(clone))
      this.copy = [];
      myTarget._rawValue.forEach((items) => {
        this.copy.push(items)
      })
      this.copy = this.copy.filter(crypto => crypto.name.toLowerCase().includes(this.textSearch.toLowerCase()))
}
  }
}
</script>

<style>

</style>