<template>
  <div class="profiles">
    <div class="profile">
      <img src="../assets/logo.svg" alt="Profile Image" class="profile_image">
      <div class="profile_name">User1</div>
    </div>
    <div class="profile">
      <img src="../assets/logo.svg" alt="Profile Image" class="profile_image">
      <div class="profile_name">User2</div>
    </div>
    <div class="profile">
      <img src="../assets/logo.svg" alt="Profile Image" class="profile_image">
      <div class="profile_name">User3</div>
    </div>
    <div class="profile">
      <img src="../assets/logo.svg" alt="Profile Image" class="profile_image">
      <div class="profile_name">User4</div>
    </div>
    <div class="profile">
      <img src="../assets/logo.svg" alt="Profile Image" class="profile_image">
      <div class="profile_name">User5</div>
    </div>
    <div class="profile">
      <img src="../assets/logo.svg" alt="Profile Image" class="profile_image">
      <div class="profile_name">User6</div>
    </div>
    <div class="profile">
      <img src="../assets/logo.svg" alt="Profile Image" class="profile_image">
      <div class="profile_name">User7</div>
    </div>
    <div class="profile">
      <img src="../assets/logo.svg" alt="Profile Image" class="profile_image">
      <div class="profile_name">User8</div>
    </div>
    <div class="profile">
      <img src="../assets/logo.svg" alt="Profile Image" class="profile_image">
      <div class="profile_name">User9</div>
    </div>
    <div class="profile">
      <img src="../assets/logo.svg" alt="Profile Image" class="profile_image">
      <div class="profile_name">User10</div>
    </div>
    <div class="profile">
      <img src="../assets/logo.svg" alt="Profile Image" class="profile_image">
      <div class="profile_name">User11</div>
    </div>
    <div class="profile">
      <img src="../assets/logo.svg" alt="Profile Image" class="profile_image">
      <div class="profile_name">User12</div>
    </div>
  </div>
</template>

<script>
export default{
  name: "FindUsersView"
}
</script>

<style>

.profiles{
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px,1fr));
  gap: .2rem;
  margin-top: .2rem;
}

.profile{
  margin: .2rem;
  font-family: sans-serif;
  text-align: center;
  max-width: 200px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  padding: 20px;
  background: #212121;

}

.profile_image{
  width: 150px;
  height: 150px;
  object-fit: cover;
  margin: 0 auto 20px auto;
  display: block;
  border-radius: 20%;

}

.profile_name{
  font-size: 1.2em;
  font-weight: bold;
  color: white;

}

@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
