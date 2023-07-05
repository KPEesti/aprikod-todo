import {v4 as uuidv4} from 'uuid';
import {makeAutoObservable} from "mobx";

interface ITodo {
    id?: string;
    title: string;
    description: string;
    completed: boolean;
    subTasks: ITodo[] | null;
    creationDate: string;
}

export class Todo implements ITodo {
    id: string;
    title: string;
    description: string;
    creationDate: string;
    completed: boolean;
    subTasks: Array<Todo> | null;

    constructor({title, description, subTasks, creationDate, completed}: ITodo) {
        this.id = uuidv4();
        this.title = title;
        this.description = description;
        this.completed = completed;
        this.creationDate = creationDate;

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
    }

    changeTask({title, description}: { title?: string, description?: string }) {
        if (title !== undefined) {
            this.title = title;
        }

        if (description !== undefined) {
            this.description = description;
        }
    }

    addSubTask(task: Todo) {
        if (!this.subTasks) {
            this.subTasks = [task]
        } else {
            this.subTasks?.push(task);
        }
    }

    deleteSubTask(taskID: string) {
        if (this.subTasks) {
            this.subTasks = this.subTasks.filter((task) => task.id !== taskID);
        }
    }
}

