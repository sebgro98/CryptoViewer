<template>
  <homeView
      :clone="clone"
      @searchCrypto="searchCrypto"

  />
</template>
<script>

import homeView from '../views/HomeView.vue';
import {clone} from "@/cryptoSource";
export default {
  props: ['model'],
  name: "CryptoPresenter",
  components: {homeView},

  data() {
    return {
      clone,
    }
  },

  created() {
    this.model.setSearchQuery('test')
    console.log(this.model.searchQuery)
  },

  methods: {
    searchCrypto() {
      let myTarget = JSON.parse(JSON.stringify(clone))
      this.copy = [];
      myTarget._rawValue.forEach((items) => {
        this.copy.push(items)
      })
      this.copy = this.copy.filter(crypto => crypto.name.toLowerCase().includes(this.textSearch.toLowerCase()))
    },
  }
}
</script>

<style>

</style>