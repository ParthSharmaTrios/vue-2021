<template>

  <div class="container">
      <div class="row">
          <div class="col-12">
              <h1> List of Users</h1>


          <div v-if="showAlert == true">
            <b-alert variant="success" show><strong>Success !</strong> Card is now hidden</b-alert>
          </div>

          </div>
      </div>

      <div class="row" v-if="showLoadingMsg == true">
        <div class="col-12">
          <square :loading="showLoadingMsg"></square>
        </div>
      </div>

      <div class="row" v-else>
        <div class="col-12">
          <table class="table table-dark table-hover">
            <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
            </tr>
            </thead>
            <tbody>
              <tr v-for="(user, index) in users" v-bind:key="index">
                <td><a :href="'/profile/'+user.id">{{ user.name }}</a></td>
                <td>{{ user.email }}</td>
              </tr>

            </tbody>
          </table>
        </div>

      </div>
  </div>

</template>

<script>
import axios from 'axios'

export default {

  data(){
    return {
      users : [],

      selectedUsers : "",

      showCard : false,
      showAlert : false,
      showLoadingMsg : true
    }
  },

  components:{

  },

  created() {
    this.getUsers()
  },

  methods:{

    hideCard(){
      this.showCard=false
      this.showAlert=true


      setTimeout(()=> this.showAlert = false, 3000)
    },

    getUsers(){

      axios.get('https://jsonplaceholder.typicode.com/users').then(response => {

        this.users = response.data
        this.showLoadingMsg = false
      })
    },

    selectUser(user){
        this.showCard = true
        this.showAlert = false
        this.selectedUsers = user

    }

  }

}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>