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
    this.model.getAccountList()
    this.searchData = this.model.accounts;
  },
  methods: {
    setSearchQuery(text) {
      this.searchData = Object.fromEntries(Object.entries(this.model.accounts).filter((data) => data[1].email.includes(text)))
    },
    setCurrentUser(text) {
      this.model.setCurrentUser(text);
      this.$router.push({path: '/userProfile'})
    },
  }

}
</script>

<style scoped>

</style>