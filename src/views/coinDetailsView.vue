<script>
export default {
  name: "coinDetails",
  props: {
    apiData: Object,
    user: String,
    cryptoInFavorites: Boolean,
  },
  data() {
    return {}
  },
  methods: {
    addToFavorites() {
      this.$emit("onAddToFavoritesClick")
    },
    removeFromFavorites() {
      this.$emit("onRemoveFromFavoritesClick")
    }
  }
}

</script>


<template>
  <div v-if="apiData" class="user-cryptos">
    <div>
      <div>
        <div class='coin-container'>
          <div class='content'>
            <div class="big-text">
              <button v-if="user && !cryptoInFavorites" class="buttonAdd" @click="addToFavorites">Add to favorites</button>
              <button v-if="user && cryptoInFavorites" class="buttonRemove" @click="removeFromFavorites">Remove from favorites
              </button>
              <h1>{{ apiData.name }}</h1>
            </div>
          </div>
          <div class='content'>
            <div class='rank'>
              <span class='rank-btn'>Rank # {{ apiData.market_cap_rank }}</span>
            </div>

            <div><coingecko-coin-price-chart-widget v-bind:coin-id="[apiData.id]" currency="usd" height="300" locale="en" background-color="#26272B"></coingecko-coin-price-chart-widget></div>
          </div>



          <div class='content'>
            <table class="table-table">
              <thead>
              <tr class="table-head">
                <th>1h</th>
                <th>24h</th>
                <th>7d</th>
                <th>14d</th>
                <th>30d</th>
                <th>1yr</th>
              </tr>
              </thead>

              <tbody>
              <tr
                  class="table-data"
              >
                <td><p :class="
                  apiData.market_data.price_change_percentage_1h_in_currency.usd.toFixed(1) > 0 ? 'green' : 'red'">
                  {{ apiData.market_data.price_change_percentage_1h_in_currency.usd.toFixed(1) }}%</p></td>
                <td><p :class="apiData.market_data.price_change_percentage_24h_in_currency.usd.toFixed(1) > 0 ? 'green' : 'red'">
                  {{ apiData.market_data.price_change_percentage_24h_in_currency.usd.toFixed(1) }}%</p></td>
                <td><p :class="apiData.market_data.price_change_percentage_7d_in_currency.usd.toFixed(1) > 0 ? 'green' : 'red'">
                  {{ apiData.market_data.price_change_percentage_7d_in_currency.usd.toFixed(1) }}%</p></td>
                <td><p :class="apiData.market_data.price_change_percentage_14d_in_currency.usd.toFixed(1) > 0 ? 'green' : 'red'">
                  {{ apiData.market_data.price_change_percentage_14d_in_currency.usd.toFixed(1) }}%</p></td>
                <td><p :class="apiData.market_data.price_change_percentage_30d_in_currency.usd.toFixed(1) > 0 ? 'green' : 'red'">
                  {{ apiData.market_data.price_change_percentage_30d_in_currency.usd.toFixed(1) }}%</p></td>
                <td><p :class="apiData.market_data.price_change_percentage_1y_in_currency.usd.toFixed(1) > 0 ? 'green' : 'red'">
                  {{ apiData.market_data.price_change_percentage_1y_in_currency.usd.toFixed(1) }}%</p></td>
              </tr>
              </tbody>
            </table>
          </div>
          <div class='content'>
            <div class='stats'>
              <div class='left'>
                <div class='row'>
                  <h4>24 Hour Low</h4>
                  <p>${{ apiData.market_data.low_24h.usd.toLocaleString() }}</p>
                </div>
                <div class='row'>
                  <h4>24 Hour High</h4>
                  <p>${{ apiData.market_data.high_24h.usd.toLocaleString() }}</p></div>

              </div>
              <div class='right'>
                <div class='row'>
                  <h4>Market Cap</h4>
                  <p>${{ apiData.market_data.market_cap.usd.toLocaleString() }}</p>
                </div>
                <div class='row'>
                  <h4>Circulating Supply</h4>
                  <p>{{ apiData.market_data.circulating_supply }}</p>
                </div>

              </div>
            </div>
          </div>

          <div class='content'>
            <div class='about'>
              <h3>About</h3>
              <p>{{ apiData.description.en }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
  <h1 v-else style="color:white">No data</h1>

</template>

<style>

.coin-container .content {
  max-width: 740px;
  margin: 1rem auto;
  padding: .7rem 1rem;
  display: flex;
  flex-direction: column;
  background-color: #26272b;
  box-shadow: 0px 0px 12px #18191b;
  border-radius: 8px;
}

.rank {
  margin: 1px;
}

.rank-btn {
  border: 1px solid #6900ff;
  box-shadow: 0px 0px 8px #6900ff;
  background-color: #6900ff;
  border-radius: 8px;
  padding: .2rem;
}

.info p {
  padding-right: 1rem;
}

.table-table table {
  margin: .5rem 0;
}

.table-data td, .table-head th {
  padding: 8px;
  text-align: center;
}

.table-head th {
  background-color: #333;
}

.stats {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;
  width: 100%;
}

.stats .row {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #808080;
  margin: .6rem 0;
  padding-bottom: .5rem;
}

.stats .row p:first-child {
  color: #d3d3d3;
}

.about h3 {
  text-align: center;
  margin: 1rem 0;
}

@media screen and (max-width: 700px) {
  .coin-container .content {
    max-width: 100%;
    margin: .5rem;
    padding: 0 .5rem;
  }

  .stats {
    grid-template-columns: 1fr;
  }

  td, th {
    padding: 3px;
  }

  .rank {
    margin: .5rem;
  }

  .rank-btn {
    margin: .5rem 0;
  }
}

.user-cryptos * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  margin: 0;
  font-family: 'Rubik', 'Segoe UI', 'Roboto', 'Oxygen',
  'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
  sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #f4f4f4;
  box-sizing: border-box;
  padding: 0;
}

.big-text {
  text-align: center;
  margin: 1rem;
}

.buttonRemove {
  margin: 10px;
  background-color: #fc5757;
  border-radius: 28px;
  border: 1px solid #fc2626;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 16px;
  padding: 16px 27px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #590000;
  width: 200px;
}

.buttonRemove:hover {
  background-color: #fa0000;
}

.buttonRemove:active {
  position: relative;
  top: 1px;
}

.buttonAdd {
  background-color: #44c767;
  border-radius: 28px;
  border: 1px solid #18ab29;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 16px;
  padding: 16px 27px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #2f6627;
  width: 200px;
}

.buttonAdd:hover {
  background-color: #5cbf2a;
}

.buttonAdd:active {
  position: relative;
  top: 1px;
}

body {
  background-color: #1a1a1c;
}


</style>