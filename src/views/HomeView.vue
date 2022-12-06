<template>
  <div class="Home">

      <SearchResults></SearchResults>
    <h1>This is where you would see a number of the most popular cryptos</h1>

      <h1><testCrp></testCrp></h1>

  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>


<script>
import testCrp from '../cryptoSource';
import SearchResults from './SearchResults.vue';
export default {
  components: {SearchResults, testCrp}
}
</script>
