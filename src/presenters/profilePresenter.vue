<template>
  <UserInformationView
      v-if="currentUser"
      :username="this.currentUser"
  />
  <h1 v-else>Error 404</h1>
</template>

<script>
 import UserInformationView from '../views/UserInformationView.vue';
export default {
  name: "profilePresenter",
  components: {UserInformationView},
  props: ["model"],
  data() {
    return {
      currentUser: undefined,
    }
  },
  created() {
    if (this.model.currentLoggedInUser) {
      this.currentUser = this.model.currentLoggedInUser;
    }
  },
}
</script>

<style>

</style>
