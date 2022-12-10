<template>
  <div class='crypto-app'>
    <div className='crypto-search'>
      <h1 className='crypto-text'> Search a currency</h1>
      <form>
        <input
            type='text'
            placeholder='Search'
            className='crypto-input'
            @keyup="searchCoin()"
            v-model="textSearch"
        />
      </form>
    </div>
    <tr v-for="crypto in clone" :key="crypto.name">
        <div class='crypto-container'>
          <div class="crypto-row">
            <div class="crypto">
              <img :src="crypto.image" alt="crypto"/>
              <h1>{{crypto.name}}</h1>
              <p class="crypto-symbol">{{crypto.symbol}}</p>
            </div>
            <div class="crypto-data">
              <p class="crypto-price">${{crypto.current_price}}
              </p>
              <p class="crypto-volume">${{crypto.total_volume}}
              </p>
              <!-- percent green-->
              <p :class="crypto.price_change_percentage_24h > 0 ? 'green' : 'red'">
                {{crypto.price_change_percentage_24h.toFixed(2)}}%
              </p>
              <p class="crypto-marketCap"> Mkth cap: ${{crypto.market_cap.toLocaleString()}}</p>
            </div>
          </div>
        </div>
    </tr>
    </div>
</template>

<script>
import axios from 'axios'
import {ref, watchEffect} from "vue";


export default {
  name: "showCrypto",

  setup() {
   let textSearch = ''
    function searchCoin() {
      this.clone = this.clone.filter(crypto => crypto.name.toLowerCase().includes(this.textSearch.toLowerCase()))
    }

    const cryptos = ref([])
    const clone = ref([])
//api call
    const getCrypto = async () => {
      try {
        const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
        cryptos.value = response.data
      } catch (error) {
        //console.log(error);
      }
    };
//fetch timer do not overextend our limit
    setInterval(() => {
      getCrypto();
    }, 3000);

    watchEffect(() => {
      const dup = cryptos.value.slice(0,100);
      clone.value = dup;
    })

    return {clone,searchCoin, textSearch};
  }
}
</script>

<style>
.crypto-container{
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

.crypto-price{
  width: 110px;
}

.crypto-volume{
  width: 200px;

}

.crypto-marketCap{
  width: 240px;
}

.crypto-percent{
  width: 80px;
}

.red{
  color: #f00606;
}

.green{
  color: #11d811;
}

.crypto-app{
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 64px;
  color: #fff;
  background-color: #1a1a1c;
  font-family: 'Monserrat', sans-serif;
  min-height: calc(100vh - 194px);
  padding-bottom: 50px;
}

.crypto-search{
  margin-bottom: 64px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.crypto-text{
  margin-bottom: 32px;
  text-align: center;
}

.crypto-input{
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

</style>