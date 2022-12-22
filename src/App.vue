<script setup>
import Menu from './presenters/menuPresenter.vue'
import {RouterView} from 'vue-router'
</script>

<script>
import CryptoModel from "@/CryptoModel";

export default {
  data() {
    return {
      model: {}
    }
  },

  created() {
    this.model = new CryptoModel();
  }
}

</script>

<template>

  <Menu :model="model"/>
  <RouterView :model="model"/>

</template>

