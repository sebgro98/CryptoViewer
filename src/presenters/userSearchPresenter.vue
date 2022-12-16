<template>
<UserSearchFormView
    :searchData = searchData
    @onInputChange="setSearchQuery"
    @onUserClick="setCurrentUser"
/>
</template>

<script>
import UserSearchFormView from "../views/UserSearchFormView.vue";

export default {
  name: "userSearchPresenter",
  components: {UserSearchFormView},
  props: ["model"],
  data() {
    return {
      searchData: {},
    }
  },
  created() {
    this.searchData = this.model.accounts;
  },
  methods: {
    setSearchQuery(text) {
      this.searchData = Object.fromEntries(Object.entries(this.model.accounts).filter(([key]) => key.includes(text.toLowerCase())))
    },
    setCurrentUser(text) {
      this.model.setCurrentUser(text);
      this.$router.push({path: '/profile'})
    },
  }

}
</script>

<style scoped>

</style>