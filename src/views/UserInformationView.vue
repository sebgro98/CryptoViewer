<template>
<div class="main">
    <div class="user-profile">
      <div class="left">
        <img src="../assets/logo.svg" alt="Profile Image" class="profile_image">
        <div class="profile_name">FirstName LastName</div>
      </div>
      <div class="right">
        <div class="profile_information">
          <h3>Information</h3>
          <div class="profile_email">
            <h4>Email</h4>
            <p>Email here</p>
          </div>
          <div class="profile_description">
            <h4>Description</h4>
            <p>Description here</p>
          </div>
      </div>
      </div>
    </div>
</div>
</template>

<script>
export default {
  name: "UserInformationView"
}
</script>

<style scoped>

*{
  margin: 0;
  padding:0;
  list-style: none;
  font-family: sans-serif;
  box-sizing: border-box;
}

.main{
  background: darkgrey;

}

.user-profile{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  width:90%;
  display: flex;
  box-shadow: 0 1px 20px 0 rgba(70,90,100,0.08);
  border-radius: 10%;
  background: darkgrey;

  margin: 10px;
}

.left{
  width: 35%;
  padding: 30px 25px;
}

.right{
  width: 65%;
  padding: 30px 25px;
}

.profile_information{
  margin-bottom: 25px;

}

.profile_description{
  margin-top: 50px;
}

.profile_email{
  margin-top: 25px;
}

.profile_image{
  width: 250px;
  height: 250px;
  object-fit: cover;
  display: block;
  border-radius: 20%;
}

.profile_name{
  font-size: 1.5em;
  font-weight: bold;
}

</style>