<template>
  <div class="main">
    <div class="user-profile">
      <div class="left-user">
        <img src="../assets/bitcoin_PNG47.png" alt="Profile Image" class="profile_image">
        <div class="profile_name">{{ username }} </div>
      </div>
      <div class="right-user">
        <div class="profile_information">
          <h3 class="caption">Favorite Cryptos &#128127; </h3>

          <div v-for="crypto in cryptos" :key="crypto">
            <div v-on:click="updateCurrentCryptoACB(crypto)" class="crypto-container">
              <span>
            <h2 class="crypto-name">{{ crypto.toUpperCase() }}</h2>
                </span>
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserInformationView",
  props: {
    username: String,
    cryptos: Array,
  },

  methods: {
    updateCurrentCryptoACB(id) {
      this.$emit("onCryptoClick", id);
    }
  }
}
</script>

<style>

.crypto-container span:hover{
  cursor: pointer;
}

.crypto-name {
  --color-background: #000119;
  --stroke-width: calc(1em / 16);
  --font-size: 30vmin;
  --font-weight: 700;
  --letter-spacing: calc(1em / 8);
  display: inline-block;
  background-image: linear-gradient(to right, #09f1b8, #00a2ff, #ff00d2, #fed90f);
  color: var(--color-background);
  font-weight: var(--font-weight);
  letter-spacing: var(--letter-spacing);
  -webkit-text-stroke-color: transparent;
  -webkit-text-stroke-width: var(--stroke-width);
}

.caption {
  font-weight: bold;
  font-size: 35px;
  margin-top: 25px;
  text-align: center;
}
.user-profile {
  padding: 0;
  list-style: none;
  font-family: sans-serif;
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  display: flex;
  box-shadow: 0 1px 20px 0 rgba(70, 90, 100, 0.08);
  border-radius: 12px;
  background: #212121;
  margin: 10px;
}

.left-user {
  width: 21%;
  padding: 30px 25px;
}

.right-user {
  width: 79%;
  padding: 30px 25px;
}

.profile_image {
  width: 250px;
  height: 250px;
  object-fit: cover;
  display: block;
  border-radius: 20%;
}

.profile_name {
  font-size: 35px;
  font-weight: bold;
  color: white;
  text-align: left;
  margin: 25px;
}

</style>