import {Todo} from "./Todo";
import {makeAutoObservable} from "mobx";
import {findTaskByID} from "../helpers/findTodo";

export class Store {
    tasks: Array<Todo> = [];
    currentTask: Todo | null = null;

    constructor(tasks?: Array<Todo>) {
        this.tasks = tasks!;
        makeAutoObservable(this);
    }

    setCurrentTask(task: Todo): void {
        this.currentTask = task;
    }

    getTaskByID(id: string): Todo | null {
        return findTaskByID(this.tasks, id);
    }

    addTask(task: Todo) {
        console.log(task);
        console.log(this);
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
