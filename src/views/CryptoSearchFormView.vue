<template>
  <div class='crypto-app1'>
    <div class='crypto-search1'>
      <h1 class='crypto-text1'></h1>
      <form
          @submit.prevent="setSearchACB">
        <input
            @input="setSearchTextACB"
            placeholder='Search'
            class='crypto-input1'

        />
      </form>
    </div>
    <div
        class="crypto-data1"
        v-if="apiData"
    >
      <tr v-for="crypto in this.apiData['coins']" :key="crypto.name">
        <div class='crypto-container1'>
          <div class="crypto-row1">
            <div class="crypto1">
              <img :src="crypto.thumb" alt="crypto1"/>
              <h1>{{crypto.name}}</h1>
              <p class="crypto-symbol1">{{crypto.symbol}}</p>
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

.crypto-data1 {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.crypto-container1{
  display: flex;
  justify-content: center;
}

.crypto-row1 {
  display: flex;
  flex-direction: row;
  justify-items: start;
  align-items: center;
  height: 80px;
  border-bottom: 1px solid #d7d7d7;
  width: 900px;
}

.crypto1 {
  display: flex;
  align-items: center;
  padding-right: 24px;
  min-width: 300px;

}
.crypto1 h1 {
  font-size: 16px;
  width: 150px;
}

.crypto1 img {
  height: 30px;
  width: 30px;
  margin-right: 10px;
}

.crypto-symbol1 {
  text-transform: uppercase;
}

.crypto-data1 {
  display: flex;
  text-align: center;
  justify-content: space-between;
  width: 100%;
}

.crypto-price1{
  width: 110px;
}

.crypto-volume1{
  width: 200px;

}

.crypto-marketCap1{
  width: 240px;
}

.crypto-percent1{
  width: 80px;
}

.red1{
  color: #f00606;
}

.green1{
  color: #11d811;
}

.crypto-app1{
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

.crypto-search1{
  margin-bottom: 64px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.crypto-text1{
  margin-bottom: 32px;
  text-align: center;
}

.crypto-input1{
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

.crypto-input1::placeholder {
  color: #e2e2e2;
}
</style>