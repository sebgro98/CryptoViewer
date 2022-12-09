<template>
  <div class="Home">
    <showCrypto></showCrypto>
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

import showCrypto from './ShowCrypto.vue';
export default {
  components: {showCrypto},


}
</script>
