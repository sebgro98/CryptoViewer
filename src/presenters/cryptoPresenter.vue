<template>
  <homeView :clone="copy" @search-crypto="searchCrypto" />
</template>
<script>
import homeView from "../views/HomeView.vue";
import { clone } from "@/cryptoSource";
export default {
  props: ["model"],
  name: "CryptoPresenter",
  components: { homeView },

  data() {
    return {
      copy: [],
      textSearch: "",
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
    this.model.setSearchQuery("test");
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
  },
};
</script>

<style></style>
