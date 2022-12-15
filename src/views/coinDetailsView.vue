<script>
export default {
  name: "coinDetails",
  props: {
    coinData: Object,
  }
}
</script>

<template>

  <section class="search-section">
  <div class="search-wrapper">
    <label for="search" id="search"></label>
    <input type="search" id="search">
  </div>
  </section>


  <div class="user-cryptos">
    <div class="crypto">
      <div class="header">fd</div>
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
.nav {
  background-color: #16d545;
}
.search-section{
  background:linear-gradient(45deg, #570057, #2b0079);
  background-size:cover;
  height: 80px;
  display:flex;
  align-items:center;
  justify-content:center;
}

.search-wrapper {
  width: 40%;
}
input{
  background:#fff;
  padding:10px;
  width:100%;
  border-radius:5px;
  font-size:1.2em;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
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
  border: 1px solid black;
  background-color: grey;
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