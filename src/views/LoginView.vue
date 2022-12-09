<template>
  <div class="login">
    <form>
      <label for="Username">Username</label><br>
      <input type="text" id="Username" required> <br>
      <label for="Password">Password</label><br>
      <input type="password" id="Password" required>
      <button>Log in</button>
    </form>
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
form {
  padding-top: 50px;
  width: 300px;
  margin: 0 auto;
}
input {
  width: 290px;
  margin-bottom: 20px
}

button {
  width: 100%;
  height: 25px;
}
</style>
