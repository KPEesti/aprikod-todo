import {Todo} from "../models/Todo";
import {makeAutoObservable} from "mobx";
import {findTaskByID, searchTaskByTitle} from "../helpers/findTodo";
import {getTasksFromStorage, setTasksToStorage} from "../helpers/storage";

export class Store {
    tasks: Array<Todo> = [];
    search: string = '';
    searchingTask: Array<Todo> = [];
    currentTask: Todo | null = null;

    constructor() {
        let tmp = getTasksFromStorage();
        if(tmp !== null && tmp.length !== 0) {
            this.tasks = tmp;
        }
        this.searchTasks();
        makeAutoObservable(this);
    }

    setSearch(newSearch: string) {
        this.search = newSearch;
        this.searchTasks();
    }

    setCurrentTask(task: Todo): void {
        this.currentTask = task;
    }

    searchTasks(): void {
        this.searchingTask = searchTaskByTitle(this.tasks, this.search);
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
        setTasksToStorage(this.tasks);
        this.searchTasks();
    }

    deleteTask(id: string) {
        this.currentTask = null;
        this.tasks = this.tasks.filter((task) => {
            task.deleteSubTask(id);
            return task.id !== id;
        });
        setTasksToStorage(this.tasks);
        this.searchTasks();
    }
}
