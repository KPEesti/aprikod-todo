import styles from './todoItem.module.scss';
import {Todo} from "../../models/Todo";
import {BaseSyntheticEvent, useContext} from "react";
import {observer} from "mobx-react";
import {StoreContext} from "../../App";

interface TodoProps {
    todo: Todo
}

export const TodoItem = observer(({todo}: TodoProps) => {

    const store = useContext(StoreContext);

    const handleCheck = (e: BaseSyntheticEvent) => {
        e.stopPropagation();
        todo.changeStatus(todo.completed);
    }

    const handleClick = (e:BaseSyntheticEvent) => {
        e.stopPropagation();
        store.setCurrentTask(todo);
    }

    return (
        <div className={styles.todoItem}>
            <h3 className={styles.todoItem__title} onClick={handleClick}>{todo.title}</h3>
            <input type="checkbox" checked={todo.completed} onChange={(event) => handleCheck(event)}/>
        </div>
    );
});

