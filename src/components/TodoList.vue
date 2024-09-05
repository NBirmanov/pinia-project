<template>
    <div class="">
        <h1>Todo List</h1>
        <input type="text" v-model="text" @keyup.enter="addTodo" placeholder="Add a new todo">

        <!-- <ul v-if="todos.length"> -->
        <ul>
            <li v-for="todo in todos" :key="todo.id">
            <span :style="{textDecoration: todo.completed ? 'line-through' : 'none'}">{{  todo.text }}</span>
            <button @click="removeTodo(todo.id)">Remove</button>
            <button @click="toggleTodo(todo.id)">Toggle</button>
        </li>
        </ul>
        <!-- <div v-else class="loading">
            <p>Загрузка</p>
            <div>
                <img src="../assets/4.gif" alt="">
            </div>
        </div> -->
    </div>
</template>

<script setup>
import {ref, onMounted, watch} from 'vue'
import { useTodoStore } from '../stores/todoStore'

const todoStore = useTodoStore()

const text = ref('')

const todos = ref([])

const addTodo = () => {
    if(text.value.trim()){
        todoStore.addTodo(text.value)
        text.value = ''
    }
}

const toggleTodo = (index) => {
    todoStore.toggleTodo(index)
}

const removeTodo = (index) => {
    todoStore.removeTodo(index)
}

todos.value = todoStore.todos

//const todos = ref([])

// onMounted(() => {
//     todoStore.listTodo()
// })

// watch(() => todoStore.todos, (newTodos) => {
//     todos.value = newTodos
// })

</script>

<style>
ul {
    list-style: none;
}
.loading{
    width: 50px;
    height: 50px;
    margin: 300px auto;
}
</style>