<script setup>
import { RouterLink} from 'vue-router'
</script>

<template>
  <div class="nav">
    <p>CryptoViewer</p>
    <RouterLink to="/MostPopularCrypto">Home</RouterLink>
    <RouterLink to="/UserSearchForm">Find Users</RouterLink>
    <RouterLink to="/SignInForm">Sign in</RouterLink>
    <RouterLink to="/SignUpForm">Sign up</RouterLink>
  </div>
</template>

<style>
.nav {
  background-color: #26c545;
}
.nav a {
  float: left;
  color: black;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}
</style>