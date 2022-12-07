

<script>

export default {
  name: "SearchResults"
}
</script>

<template>
  <div class="search-wrapper">
    <label for="search">Search Users</label>
    <input type="search" id="search">
  </div>
  <div class="user-cards" data-user-cards-container></div>
  <template data-user-template>
    <div class="card">
    <div class="header" data-header></div>
    <div class="body" data-body></div>
  </div>
  </template>
</template>

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

.user-cards{
  display: grid;
  grid-template-columns: 1fr;
  gap: .25rem;
  margin-top: 1rem;
}

.card{
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