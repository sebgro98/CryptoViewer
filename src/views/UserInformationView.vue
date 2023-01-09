<template>
<div class="main">
    <div class="user-profile">
      <div class="left-user">
        <img src="../assets/bitcoin_PNG47.png" alt="Profile Image" class="profile_image">
        <div class="profile_name">{{username}}</div>
      </div>
      <div class="right-user">
        <div class="profile_information">
          <h3>Favorite Crypto</h3>
          <h2>{{cryptos}}</h2>
      </div>
      </div>
    </div>
</div>
</template>

<script>
export default {
  name: "UserInformationView",
  props: {
    username: String,
    cryptos: Array,
  },
}
</script>

<style>

.user-profile{
  padding:0;
  list-style: none;
  font-family: sans-serif;
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  width:90%;
  display: flex;
  box-shadow: 0 1px 20px 0 rgba(70,90,100,0.08);
  border-radius: 12px;
  background: #212121;
  margin: 10px;
}
.profile_information{
  color: white;
  text-align: center;

}
.left-user{
  width: 21%;
  padding: 30px 25px;
}

.right-user{
  width: 79%;
  padding: 30px 25px;
}

.profile_information{
  margin-bottom: 25px;

}

.profile_description{
  margin-top: 50px;
  color: white;

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
  color: white;
  text-align: center;
  margin: 10px;
}

</style>
