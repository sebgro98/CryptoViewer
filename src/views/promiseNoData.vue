<template>
  <div v-if="!promiseState.promise">No data</div>
  <img v-else-if="!promiseState.data && !promiseState.error" src="https://i.gifer.com/origin/b4/b4d657e7ef262b88eb5f7ac021edda87.gif"/>
  <div v-else-if="promiseState.error">{{promiseState.error.toString()}}</div>

</template>

<script>
export default {
  name: "promiseNoData",
  props:['promiseState']
}
</script>

<style scoped>

</style>