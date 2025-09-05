import { makeAutoObservable } from "mobx";

class Todo {
    todos = [
        { id: 1, title: 'Покакать', completed: false },
        { id: 2, title: 'Изучить разные state менеджеры', completed: false },
        { id: 3, title: 'Выпить байкальчик', completed: false },
    ];

    constructor() {
        makeAutoObservable(this);
    }

    addTodo = (todo) => {
        this.todos.push(todo);
    };

    removeTodo = (id) => {
        this.todos = this.todos.filter(todo => todo.id !== id);
    };

    completeTodo = (id) => {
        this.todos = this.todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo);
    };

    fetchTodo = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(res => res.json())
            .then(json => {
                this.todos = [...this.todos, ...json]
            })
    }
}

export default new Todo();