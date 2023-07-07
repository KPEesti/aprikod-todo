import {Todo} from "../models/Todo";

export function findTaskByID(tasks: Array<Todo>, id: string): Todo | null {
    for (let i = 0; i < tasks.length; i++) {
        let task = tasks[i];
        if (task.id === id) {
            return task;
        }
        if (task.subTasks) {
            let tmp = findTaskByID(task.subTasks, id);
            if (tmp !== null) {
                return tmp;
            }
        }
    }
    return null;
}

export function searchTaskByTitle(tasks: Array<Todo>, search: string): Array<Todo> {
    const result = new Array<Todo>();
    for (let i = 0; i < tasks.length; i++) {
        let task = tasks[i];
        if (task.title.includes(search) || (task.subTasks && searchSubTasks(task.subTasks, search))) {
            result.push(task);
        }
    }
    return result;
}

function searchSubTasks(tasks: Array<Todo>, search: string): boolean {
    for (let i = 0; i < tasks.length; i++) {
        let task = tasks[i];
        if (task.title.includes(search) || (task.subTasks && searchSubTasks(task.subTasks, search))) {
            return true;
        }
    }
    return false;
}
