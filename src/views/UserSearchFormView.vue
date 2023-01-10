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
      <tr v-for="(account) in searchData">
        <div v-on:click="updateCurrentUser(account.email)" class="userContent">
          <h1 id="emailText"> {{account.email}}</h1>
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
    updateCurrentUser(email) {
      this.$emit("onUserClick", email)
    },
  },
}
</script>

<style scoped>

#emailText {
  text-align: center;
}

.userContent {
  background-color: #212226;
  width: 700px;
  padding-block: 1px;
  margin: 10px;
  border-radius: 30px;
}

.userContent:hover {
  background-color: #4e4f57;
  cursor: pointer
}
.userContent:hover h1 {
  color: #ffc400;
}

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