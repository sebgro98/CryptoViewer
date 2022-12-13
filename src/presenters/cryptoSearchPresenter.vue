<template>
  <cryptoView
      :apiData="promiseState.data"
      @OnTextChange="textChangeACB"
      @onSearch="doSearchACB"
  />
</template>
<script>

import cryptoView from '../views/CryptoSearchFormView.vue';
import {searchCryptos} from "@/cryptoSource";
import resolvePromise from "@/resolvePromise";
export default {
  name: "tempCryptoPresenter",
  components: {cryptoView},

  data() {
    return {
      promiseState: {},
      textSearch: '',
    }
  },

  methods: {
    textChangeACB(text) {
      this.textSearch = text;
    },
    doSearchACB() {
      resolvePromise(searchCryptos(this.textSearch), this.promiseState)
    }
  }
}
</script>

<style>

</style>