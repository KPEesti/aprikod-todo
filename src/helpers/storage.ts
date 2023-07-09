import {Todo, ITodo} from "../models/Todo";
import {findTaskByID} from "./findTodo";

export function setTasksToStorage(tasks: Array<Todo>) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

export function getTasksFromStorage(): Array<Todo> {
    let string = localStorage.getItem('tasks');
    if (!string) {
        return [];
    }
    let array = JSON.parse(string);

    return array.map((task: ITodo) => new Todo(task));
}

export function setTaskByIdToStorage(id: string, newTask: Todo) {
    let tasks = JSON.parse(localStorage.getItem('tasks')!)
        .map((task: ITodo) => new Todo(task));

    let task = findTaskByID(tasks, id);
    Object.assign(task!, newTask);

    localStorage.setItem('tasks', JSON.stringify(tasks));
}
