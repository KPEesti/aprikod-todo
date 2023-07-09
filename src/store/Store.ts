import {Todo} from "../models/Todo";
import {makeAutoObservable} from "mobx";
import {findTaskByID, searchTaskByTitle} from "../helpers/findTodo";

export class Store {
    tasks: Array<Todo> = [];
    searchingTask: Array<Todo> = [];
    currentTask: Todo | null = null;

    constructor(tasks?: Array<Todo>) {
        this.tasks = tasks!;
        this.searchTasks('');
        makeAutoObservable(this);
    }

    setCurrentTask(task: Todo): void {
        this.currentTask = task;
    }

    searchTasks(search: string): void {
        this.searchingTask = searchTaskByTitle(this.tasks, search);
    }

    getTaskByID(id: string): Todo | null {
        return findTaskByID(this.tasks, id);
    }

    addTask(task: Todo) {
        if (!this.tasks) {
            this.tasks = [task];
        } else {
            this.tasks.push(task);
        }
    }

    deleteTask(id: string) {
        this.currentTask = null;
        this.tasks = this.tasks.filter((task) => {
            task.deleteSubTask(id);
            return task.id !== id;
        });
    }
}
