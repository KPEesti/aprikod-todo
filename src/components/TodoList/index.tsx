import {NestingResolver} from "../NestingResolver";
import React from "react";
import {Todo} from "../../models/ITodo";

interface TodoListProps {
    tasks: Array<Todo>
}

export const TodoList = ({tasks}: TodoListProps) => {
    return (
        <div>
            {
                tasks.map(task => <NestingResolver task={task} key={task.id}/>)
            }
        </div>
    );
}
