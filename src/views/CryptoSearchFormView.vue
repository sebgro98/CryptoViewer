<template>
  <div class='crypto-app'>
    <div className='crypto-search'>
      <h1 className='crypto-text'> Search a currency</h1>
      <form>
        <input
            placeholder='Search'
            className='crypto-input'
            @input="setSearchTextACB"
        />
        <button
            type="button"
            @click="setSearchACB">Search</button>
      </form>

    </div>
    <div
    class="crypto-data"
    v-if="apiData !== undefined"
    >
      <tr v-for="crypto in this.apiData['coins']" :key="crypto.name">
        <div class='crypto-container'>
          <div class="crypto-row">
            <div class="crypto">
              <img :src="crypto.thumb" alt="crypto"/>
              <h1>{{crypto.name}}</h1>
              <p class="crypto-symbol">{{crypto.symbol}}</p>
            </div>
          </div>
        </div>
      </tr>
    </div>

  </div>
</template>

<script>

export default {
  name: "CryptoSearchFormView",
  props: {
    apiData: Object,
  },
  mounted() {
    console.log(this.apiData)
  },
  methods: {
    setSearchTextACB(evt) {
      this.$emit("OnTextChange", evt.target.value)
    },
    setSearchACB() {
      this.$emit("onSearch")
    }
  }
  }
</script>

<style>

div {
  width: 100%;
}

.crypto-data {
  display: flex;
  flex-direction: column;
  align-items: center;
}

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