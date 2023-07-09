import {v4 as uuidv4} from 'uuid';
import {makeAutoObservable} from "mobx";
import {setTaskByIdToStorage} from "../helpers/storage";

export interface ITodo {
    id?: string;
    title: string;
    description: string;
    completed: boolean;
    subTasks: ITodo[] | null;
}

export class Todo implements ITodo {
    id: string;
    title: string;
    description: string;
    completed: boolean;
    subTasks: Array<Todo> | null;
    creationDate: Date;

    constructor({id, title, description, subTasks, completed}: ITodo) {
        if(id) {
            this.id = id;
        } else {
            this.id = uuidv4();
        }
        this.title = title;
        this.description = description;
        this.completed = completed;
        this.creationDate = new Date(Date.now());

        if (!subTasks) {
            this.subTasks = null;
        } else {
            this.subTasks = subTasks.map((task) => {
                return new Todo(task);
            });
        }

        makeAutoObservable(this);
    }

    changeStatus(newStatus: boolean) {
        this.completed = !newStatus;
        if (this.subTasks) {
            this.subTasks.forEach(task => task.changeStatus(newStatus));
        }
        setTaskByIdToStorage(this.id, this);
    }

    changeTask({title, description}: { title?: string, description?: string }) {
        if (title !== undefined) {
            this.title = title;
        }

        if (description !== undefined) {
            this.description = description;
        }
        setTaskByIdToStorage(this.id, this);
    }

    addTask(task: Todo) {
        if (!this.subTasks) {
            this.subTasks = [task];
            console.log('Я здесь был')
        } else {
            this.subTasks?.push(task);
        }
        setTaskByIdToStorage(this.id, this);
    }

    deleteSubTask(taskID: string): void {
        if (this.subTasks) {
            this.subTasks = this.subTasks.filter((task) => {
                task.deleteSubTask(taskID);
                return task.id !== taskID;
            });
        }
        setTaskByIdToStorage(this.id, this);
    }
}

