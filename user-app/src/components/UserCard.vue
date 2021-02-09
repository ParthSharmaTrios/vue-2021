<template>
  <div class="container">
    <div class="card" style="width:400px" v-if="info_received == true">
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
import axios from 'axios'
export default{

  data(){
    return {
      user_id : 0,
      info_received : false,

      info: {}
    }
  },

  created() {
    this.user_id = this.$route.params.id
    this.fetch_user_info()
  },

  methods:{

    fetch_user_info(){

      axios.get('https://jsonplaceholder.typicode.com/users/'+this.user_id).then(res => {
        this.info = res.data
        this.info_received = true
      })
    }
  }
}
</script>