<script>

export default {
  name: "coinDetails",
  props: {
    apiData: Object,
    user: String,
    cryptoInFavorites: Boolean,
  },
  data() {
    return {
      chartData: {
        '2022-12-16': 2,
        '2022-12-15': 5,
        '2022-12-14': 3
      }
    }
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
    <div class="cryptoNameAndPrice">
      <h2 style="color:white; margin:0px">{{apiData.name}}</h2>
      <h2 style="color:gold; margin:0px">({{apiData.symbol}})</h2>
    </div>

    <div class="cryptoPriceAndChange">
      <h3 style="color:white; margin:0px"  >
        ${{apiData.market_data.current_price['usd']}}
      </h3>
      <h3 style="margin:0px"
          :class="
                  apiData.market_data.price_change_percentage_24h > 0 ? 'coGreen' : 'coRed'
                "
      >{{apiData.market_data.price_change_percentage_24h}}%</h3>
    </div>

    <div>
      <div class="marketData">
        <h2 style="color:white; padding-left:10px" >Market Stats</h2>
      </div>

      <div class="marketStats">
        <div class="marketCap">
          <p>MARKET CAP </p>
          <p>USD  {{apiData.market_data.market_cap['usd']}}$</p>
        </div>
        <div class="POPULARITY">
          <p>POPULARITY </p>
          <p>#{{apiData.market_cap_rank}}</p>
        </div>
        <div>
          <p>ALL TIME HIGH DATE </p>
          <p> {{apiData.market_data.ath_date['usd']}}</p>
        </div>
        <div>
          <p>ALL TIME HIGH </p>
          <p>USD  {{apiData.market_data.ath['usd']}}</p>
        </div>
        <div>
          <p>HIGH(24H)</p>
          <p>USD  {{apiData.market_data.high_24h['usd']}}</p>
        </div>
        <div>
          <p>LOW(24H) </p>
          <p>USD  {{apiData.market_data.low_24h['usd']}}</p>
        </div>
        <div>
          <p>CIRCULATING SUPPLY </p>
          <p>{{apiData.market_data.circulating_supply}}</p>
        </div>
        <div>
          <p>MAX SUPPLY </p>
          <p>{{apiData.market_data.max_supply}}</p>
        </div>
      </div>
    </div>


    <div class="aboutCoin">
      <div class="aboutSec">
        <h2>About</h2>
      </div>
      <p style="color:white" v-html="apiData.description['en']"></p>
    </div>




    <button v-if="user && !cryptoInFavorites" class="butonAdd" @click="addToFavorites">Add to favorites</button>
    <button v-if="user && cryptoInFavorites" class="butonRemove" @click="removeFromFavorites">Remove from favorites</button>
  </div>
  <h1 v-else style="color:white">No data</h1>

</template>

<style>
.coGreen{
  color: #5cbf2a;
}

.coRed{
  color: red;
}

.cryptoNameAndPrice{
  display: flex;
}

.cryptoPriceAndChange{
  display: flex;
}

.cryptoPriceAndChange > h3{
  padding: 10px;
  margin: 0px;
}

.marketData{
  background-color: #00336c;
  height: 70px;
}

.marketData > h2{
  padding-top: 20px;
}


.marketStats{
  display: flex;
  flex-wrap: wrap;
  color: white;
  padding: 10px;
  text-align: center;
}

.marketStats > div{
  flex: 40%;
  padding: 10px;
  background-color: #00224d;
  margin: 10px;
  height: 50px;
  text-align: center;
}

.marketStats > div > p {
  margin-top: 0px;
}

.aboutCoin > p{
  background-color: #1c0000;
  padding: 10px;
}

.aboutSec{
  background-color: #00336c;
  color: white;
  padding: 1px;
}

.aboutSec > h2{
  margin: 15px;
}



.butonRemove {
  background-color: #fc5757;
  border-radius:28px;
  border:1px solid #fc2626;
  display:inline-block;
  cursor:pointer;
  color:#ffffff;
  font-family:Arial;
  font-size:17px;
  padding:16px 27px;
  text-decoration:none;
  text-shadow:0px 1px 0px #590000;
  width: 250px;
}

.butonRemove:hover {
  background-color: #fa0000;
}

.butonRemove:active {
  position:relative;
  top:1px;
}

.butonAdd {
  background-color:#44c767;
  border-radius:28px;
  border:1px solid #18ab29;
  display:inline-block;
  cursor:pointer;
  color:#ffffff;
  font-family:Arial;
  font-size:17px;
  padding:16px 27px;
  text-decoration:none;
  text-shadow:0px 1px 0px #2f6627;
  width: 250px;
}
.butonAdd:hover {
  background-color:#5cbf2a;
}
.butonAdd:active {
  position:relative;
  top:1px;
}

body {
  background-color: #1a1a1c;
}

p a {
  color: white;
}
.nav a {
  float: left;
  color: black;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

input{
  font-size: 1rem;
}
.user-cryptos{
  display: grid;
  grid-template-columns: 1fr;
  gap: .25rem;
  margin-top: 1rem;
}
.crypto{
  padding: .5rem;
}
.card > .header{
  margin-bottom: .25rem;
}
.card > .body {
  font-size: .8rem;
  color: black;
}
.hide{
  display: none;
}
</style>