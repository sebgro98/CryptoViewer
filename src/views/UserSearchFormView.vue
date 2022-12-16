<template>
  <div class="user-search-app">
    <div class="search-format">
      <form>
        <input
            type="text"
            placeholder="Search"
            class="search-input"
            @input="updateSearchQuery"
        />
      </form>
    </div>
    <div v-if="Object.keys(this.searchData).length > 0">
      <tr v-for="(account, username) in searchData">
        <div v-on:click="updateCurrentUser(username)">
          <h1>{{username}}</h1>
        </div>
      </tr>
    </div>
    <h1 v-else>No users found</h1>
  </div>

</template>

<script>
export default {
  name: "UserSearchFormView",
  props: {
    searchData: Object,
  },
  methods: {
    updateSearchQuery(evt) {
      this.$emit("onInputChange", evt.target.value)
    },
    updateCurrentUser(username) {
      this.$emit("onUserClick", username)
    },
  },
}
</script>

<style scoped>

.user-search-app {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 64px;
  color: #fff;
  background-color: #1a1a1c;
  font-family: "Monserrat", sans-serif;
  min-height: calc(100vh - 183px);
  padding-bottom: 50px;
}

.search-format {
  margin-bottom: 64px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.search-input {
  padding-left: 16px;
  width: 300px;
  height: 50px;
  border-radius: 4px;
  border: none;
  background-image: linear-gradient(
      -225deg,
      #ac32e4 0%,
      #7918f2 48%,
      #4801ff 100%
  );
  color: #e2e2e2;
}

.search-input::placeholder {
  color: #e2e2e2;
}

</style>