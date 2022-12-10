<template>
  <cryptoView
      :clone="clone"
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
      clone
    }
  },

  methods: {

  }
}
</script>

<style>

</style>