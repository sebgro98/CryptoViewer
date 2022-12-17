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
  <div class="user-cryptos">
    <h1 style="color:white">{{apiData.name}}</h1>
    <p style="color:white" v-html="apiData.description['en']"></p>
    <button v-if="user && !cryptoInFavorites" class="butonAdd" @click="addToFavorites">Add to favorites</button>
    <button v-if="user && cryptoInFavorites" class="butonRemove" @click="removeFromFavorites">Remove from favorites</button>
  </div>

</template>

<style>

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