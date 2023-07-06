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
}
