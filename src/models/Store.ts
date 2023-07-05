import {Todo} from "./Todo";
import {makeAutoObservable} from "mobx";

export class Store {
    tasks: Array<Todo> = [];

    constructor(tasks?: Array<Todo>) {
        this.tasks = tasks!;
        makeAutoObservable(this);
    }
}
