<script>
export default {
  name: "coinDetails",
  props: {
    coinData: Object,
  }
}
</script>

<template>

  <div class="user-cryptos">
    <div class="crypto">
      <div class="header"></div>
      <div class="body">Other</div>
    </div>
    <div class="crypto">
      <div class="header">CryptoName</div>
      <div class="body">Other</div>
    </div>
    <div class="crypto">
      <div class="header">CryptoName</div>
      <div class="body">Other</div>
    </div>
    <div class="crypto">
      <div class="header">CryptoName</div>
      <div class="body">Other</div>
    </div>
    <div class="crypto">
      <div class="header">CryptoName</div>
      <div class="body">Other</div>
    </div>
  </div>
</template>

<style>

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