<template>
  <div v-if="!copy">No data</div>
  <img v-else-if="copy.length <= 0" src="https://i.gifer.com/origin/b4/b4d657e7ef262b88eb5f7ac021edda87.gif"/>
</template>

<script>
export default {
  name: "noDataPromise",
  props:['copy']
}
</script>

<style scoped>

</style>