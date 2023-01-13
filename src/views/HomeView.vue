<template>
  <div class="text-for-home">Explore top Crypto's like Bitcoin, Ethereum
    and other popular Crypto's.</div>
  <div class="crypto-app">
    <div class="crypto-search">
      <form v-on:submit.prevent>
        <input
            type="text"
            placeholder="Search"
            class="crypto-input"
            @input="searchCoin"
        />
      </form>
    </div>
    <!-- Added a condition and something else to display if nothing fits the condition -->
    <div v-if="clone.length > 0">
      <tr v-for="crypto in clone" :key="crypto.id">
        <div v-on:click="updateCurrentCryptoACB(crypto.id)" class="crypto-container">
          <div class="crypto-row">
            <div class="crypto">
              <img :src="crypto.image" alt="crypto" />
              <span>
              <h1>{{ crypto.name }}</h1>
                </span>
              <p class="crypto-symbol">{{ crypto.symbol }}</p>
            </div>
            <div class="crypto-data">
              <p class="crypto-price">${{ crypto.current_price }}</p>
              <p class="crypto-volume">${{ crypto.total_volume }}</p>
              <p
                  :class="
                  crypto.price_change_percentage_24h > 0 ? 'green' : 'red'
                "
              >
                {{ crypto.price_change_percentage_24h.toFixed(2) }}%
              </p>
              <p class="crypto-marketCap">
                Mkth cap: ${{ crypto.market_cap.toLocaleString() }}
              </p>
            </div>
          </div>
        </div>
      </tr>
    </div>
    <div v-else>No matching data, Try to reload the webpage!</div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  props: {
    clone: Object,
    textSearch: String,
  },
  emits: ["search-crypto", "onCryptoClick"],
  methods: {
    searchCoin(e) {
      this.$emit("search-crypto", e.target.value);
    },
    updateCurrentCryptoACB(id) {
      this.$emit("onCryptoClick", id);
    },
  },
};
</script>

<style>

body {
  margin: 0;
  font-family: 'Rubik', 'Segoe UI', 'Roboto', 'Oxygen',
  'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
  sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #f4f4f4;
  background-color: #1a1a1c;
}

.crypto-container span:hover{
  color: #FF8C00;
  cursor: pointer
}

.crypto-container {
  display: flex;
  justify-content: center;
}

.crypto-row {
  display: flex;
  flex-direction: row;
  justify-items: start;
  align-items: center;
  height: 80px;
  border-bottom: 1px solid #d7d7d7;
  width: 900px;
}

.crypto {
  display: flex;
  align-items: center;
  padding-right: 24px;
  min-width: 300px;
}
.crypto h1 {
  font-size: 16px;
  width: 150px;
}

.crypto img {
  height: 30px;
  width: 30px;
  margin-right: 10px;
}

.crypto-symbol {
  text-transform: uppercase;
}

.crypto-data {
  display: flex;
  text-align: center;
  justify-content: space-between;
  width: 100%;
}

.crypto-price {
  width: 110px;
}

.crypto-volume {
  width: 200px;
}

.crypto-marketCap {
  width: 240px;
}

.red {
  color: #f00606;
}

.green {
  color: #11d811;
}

.crypto-app {
  padding-top: 64px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  background-color: #1a1a1c;
  font-family: "Monserrat", sans-serif;
  min-height: calc(100vh - 183px);
  padding-bottom: 50px;
}

.crypto-search {
  margin-bottom: 64px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.crypto-input {
  padding-left: 16px;
  width: 300px;
  height: 50px;
  border-radius: 4px;
  border: none;
  background-image: linear-gradient(
      -225deg,
      #ac32e4 0%,
      #7918f2 48%,
      #4801ff 100%
  );
  color: #e2e2e2;
}

.crypto-input::placeholder {
  color: #e2e2e2;
}

.text-for-home {
  font-weight: bold;
  font-size: 35px;
  margin-top: 25px;
  text-align: center;
  color: #e2e2e2
}
</style>
