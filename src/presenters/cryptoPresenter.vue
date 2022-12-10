<template>
  <cryptoView
      :apiData="apiData"
      @display-apiData="displayData"
  />
</template>

<script>
import cryptoView from '../views/CryptoSearchFormView.vue';
import resolvePromise from "@/resolvePromise";
import {searchCryptos} from "@/cryptoSource";
export default {
  name: "tempCryptoPresenter",
  components: {cryptoView},
  data() {
    return {
      promiseState: {},
      apiData: undefined,
    }
  },
  created() {
    resolvePromise(searchCryptos(), this.promiseState)
  },
  methods: {
    displayData() {
      this.apiData = this.promiseState.data;
      console.log(this.apiData)
    }
  }
}
</script>

<style>

</style>