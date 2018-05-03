<template>
  <div id="app">
    <h1>{{title}}</h1>
    <ul>
      <li v-for="(todo,index) in todos" :id="index" :key="index">
        <label>
          {{index+1}}.{{todo.value}}
        </label>
      </li>
    </ul>
  </div>
</template>

<script>
import './assets/todos.less'
export default {
  name: 'app',
  data () {
    return {
      title: 'vue-todos',
      todos: [
        {value: '一起学前端', done: false},
        {value: '一起学Vue', done: true},
        {value: '一起变强', done: false}
      ]
    }
  }
}
</script>
