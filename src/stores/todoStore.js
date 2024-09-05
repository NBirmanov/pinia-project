import { defineStore } from "pinia"
import { v4 as uuidv4 } from 'uuid'
import axios from "axios"
import { ref, onActivated, onMounted } from "vue"

export const useTodoStore = defineStore("todo", {
    state: () => ({
        todos: [],
    }),
    actions: {
        addTodo(text) {
            this.todos.push({id: uuidv4(), text, completed: false})
        },
        toggleTodo(index) {
            const todo = this.todos.find((todo) => todo.id == index)
            todo && (todo.completed = !todo.completed)
        },
        removeTodo(index) {
            const todo = this.todo.findIndex((todo) => todo.id == index)
            todo !== 1 && this.todo.splice(todo, 1)
        }
    }

    // const todos = ref([])

    // const listTodo = async () => {
    //     try {
    //         const responseTodos = await axios.get("https://jsonplaceholder.typicode.com/todos")
    //         todos.value = responseTodos.data
    //     } catch (error) {
    //         console.error(error)
    //     }
    // }

    // const addTodo =  async (text) => {
    //     const responseTodos = await axios.post("https://jsonplaceholder.typicode.com/todos")
    //     responseTodos.value.push({title: text, completed: false })
    // }

    // const toggleTodo = (index) => {
    //     const todo = todos.value.find((todo) => todo.id == index)
    //     todo && (todo.completed = !todo.completed)
    // }

    // const removeTodo = async (index) => {
    //     const responseTodo = await axios.delete(`https://jsonplaceholder.typicode.com/todos/:${index}`)
    //     let todo = todos.value.findIndex((todo) => todo.id == index)
    //     if(todo !== -1) todos.value.splice(todo, 1)
    // }

    //return { todos, listTodo,  addTodo, toggleTodo, removeTodo }
})