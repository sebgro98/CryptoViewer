<template>
  <homeView v-if="copy.length <= 0"
            :clone="clone"
            @search-crypto="searchCrypto"
            @onCryptoClick="setCurrentCryptoACB"
  />
  <homeView v-if="copy.length > 0"
            :clone="copy"
            @search-crypto="searchCrypto"
            @onCryptoClick="setCurrentCryptoACB"
  />
</template>
<script>
import homeView from "../views/HomeView.vue";
import { clone } from "@/cryptoSource";

export default {
  props: ["model"],
  name: "CryptoPresenter",
  components: { homeView},

  data() {
    return {
      copy: [],
      textSearch: "",
      coinDetailsPromiseState: {},
      clone
    };
  },

  // We use a computed property so that we don't have to recompute the initial value on each request, making it way faster
  // Moreover, the initial value will be computed every time the clone object changes
  computed: {
    initial: {
      get() {
        let temp = [];
        JSON.parse(JSON.stringify(clone))._rawValue.forEach((item) => {
          temp = [...temp, item];
        });
        return temp;
      },
    },
  },
  created() {
    // Load the initial value to display all the cryptos at first render :)
    this.copy = this.initial;
  },

  methods: {
    searchCrypto(text) {
      this.textSearch = text;
      this.copy = this.initial.filter((crypto) => {
        // Added another condition with crypto.symbol to search by symbol as well ;)
        return (
            crypto.name.toLowerCase().includes(this.textSearch.toLowerCase()) ||
            crypto.symbol.toLowerCase().includes(this.textSearch.toLowerCase())

        );
      });
    },
    setCurrentCryptoACB(id) {
      this.model.setCurrentCrypto(id);
      this.$router.push({path: '/details' + "/" + id})
    },
  },
};
</script>

<style></style>
