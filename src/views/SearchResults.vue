
<script>
import { RouterLink} from 'vue-router'
export default {
  name: "SearchResults"
}
</script>

<template>
  <div class="search-wrapper">
    <label for="search" id="search"></label>
    <input type="search" id="search">
  </div>
  <div class="user-cryptos">
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
    <div class="crypto">
      <div class="header">CryptoName</div>
      <div class="body">Other</div>
    </div>
  </div>
</template>

<template2>

</template2>
<style>
.nav {
  background-color: #16d545;
}
.nav a {
  float: left;
  color: black;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.search-wrapper {
  display: flex;
  flex-direction: column;
  gap: .25rem;

}

input{
  font-size: 1rem;
}

.user-cryptos{
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1300px));
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