<template>
  <div id="app">
    <h1>{{title}}</h1>
    <ul class="todos">
      <li v-for="(todo,index) in todos" :id="index" :key="index" :class="{'checked': todo.done}">
        <label>
          {{index+1}}.{{todo.value}}
        </label>
        <time>
          {{todo.created | date }}
        </time>
      </li>
    </ul>
  </div>
</template>

<script>
import './assets/todos.less'
import './assets/site.less'
import moment from 'moment'
import 'moment/locale/zh-cn'
moment.locale('zh-cn')
export default {
  name: 'app',
  data () {
    return {
      title: 'vue-todos',
      todos: [
        {
          value: 'AAAAAAA', 
          done: false,
          created: Date.now()
        },
        {
          value: 'BBBBBBB', 
          done: true,
          created: Date.now()+300000
        },
        {
          value: 'CCCCCCC', 
          done: false,
          created: Date.now()-3000000
        }
      ]
    }
  },
  filters :{
    date(val){
      return moment(val).calendar()
    }
  }
}
</script>
