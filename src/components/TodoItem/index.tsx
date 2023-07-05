import styles from './todoItem.module.scss';
import {Todo} from "../../models/Todo";
import {BaseSyntheticEvent} from "react";
import {observer} from "mobx-react";

interface TodoProps {
    todo: Todo
}

export const TodoItem = observer(({todo}: TodoProps) => {

    const handleCheck = (e: BaseSyntheticEvent) => {
        e.stopPropagation();
        todo.changeStatus(todo.completed);
    }
    return (
        <div className={styles.todoItem}>
            <h3 className={styles.todoItem__title}>{todo.title}</h3>
            <input type="checkbox" checked={todo.completed} onClick={(event) => handleCheck(event)}/>
        </div>
    );
});

