<template>
  <div class="login">
    <h2>Register</h2>
    <form>
      <label for="Username">Username</label><br>
      <input type="text" id="Username" required> <br>
      <label for="Password">Password</label><br>
      <input type="password" id="Password" required>
      <button class="login_button">Register</button>
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

body {
  background: #2c3338;
  color: #606468;
  margin: 0;
}

.login{
  padding: 50px;
  color: white;
  background: #212121;
  border-radius: 10px;
  margin: auto;
  width: 30%;
  margin-top: 60px;
}

h2{
  font-size: 30px;
}

/* CSS */
.login_button {
  background-color: white;
  border: 2px solid #4aafff;
  border-radius: 15px;
  color: #000000;
  cursor: pointer;
  display: inline-block;
  font-family: Roobert,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
  font-size: 16px;
  font-weight: 600;
  line-height: normal;
  height: 40px;
  text-align: center;
  transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
  width: 50%;
}


.login_button:hover {
  color: #fff;
  background-color: #1A1A1A;
  box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
  transform: translateY(-2px);
}

.login_button:active {
  box-shadow: none;
  transform: translateY(0);
}

form {
  text-align: center;
  padding-left: 10%;
  padding-right: 10%;
}
input {
  width: 80%;
  margin-bottom: 20px;
  height: 30px;
}

label{
  font-size: 17px;
  font-weight: 400;
}

@media only screen and (max-width: 900px) {
  .login{
    width: 60%;
  }
}

</style>
