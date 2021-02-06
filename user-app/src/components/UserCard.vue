<template>
  <div class="container">
    <div class="card" style="width:400px">
      <img class="card-img-top" src="https://www.w3schools.com/bootstrap4/img_avatar1.png" alt="Card image">
      <div class="card-body">
        <h4 class="card-title">{{ info.name }}</h4>
        <p class="card-text">{{ info.email }}</p>
        <p class="card-text">{{ info.address.suite }}, {{ info.address.street}}, {{ info.address.city}}</p>
        <a href="#" class="btn btn-primary">See Profile</a>
      </div>
    </div>
  </div>
</template>

<script>
export default{

  props:['info']
}
</script>