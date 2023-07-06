import {Todo} from "../models/Todo";

export function findTaskByID(tasks: Array<Todo>, id: string): Todo | null {
    for (let i = 0; i < tasks.length; i++) {
        let task = tasks[i];
        if (task.subTasks) {
            let tmp = findTaskByID(task.subTasks, id);
            if(tmp !== null) {
                return tmp;
            }
        }
        if(task.id === id) {
            return task;
        }
    }
    return null;
}
