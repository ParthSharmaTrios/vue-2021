
<template>
  <div class="container">

    <div class="row">
      <div class="col-12">
        <h1> Todo List ({{ tasks.length }})</h1>
        <br><br>
            <div class="row">
             <div class="col-2"></div>
            <div class="col-6">
              <input class="form-control" type="text" v-model="task">
            </div>
            <div class="col-4 text-left">
              <input class="btn btn-primary" type="button" value="Add Task" @click="addTask()">

            </div>
            </div>
      </div>
      <div class="col-12">
        <br><br>

        <ul>
          <li class="tasks" v-for="(t, index) in tasks" :key="index" @click="removeTask(index)"> {{t}} </li>

        </ul>
      </div>
    </div>






  </div>
</template>

<script>

export default{
  name : 'Todo',

  data(){

    return {
      tasks : [ "go home", "eat food", "watch a good movie", "sleep"],

      task : ''

    }
  },

  methods:{

    addTask(){
      this.tasks.push(this.task)
      this.task = ""

    },

    removeTask(index)
    {
      this.tasks.splice(index, 1)
    }



  }


}

</script>

<style>

.tasks{
  list-style-type: none;
  border: 1px solid black;
  margin: 12px;
  padding: 10px;
}

.tasks:hover{
  list-style-type: none;
  border: 1px solid black;
  font-size: 20px;
}
</style>


