import styles from './todoItem.module.scss';
import {Todo} from "../../models/todo";

interface TodoProps {
    todo: Todo
}

export default function TodoItem({todo}: TodoProps) {
    return (
        <div className={styles.todoItem}>
            <h3 className={styles.todoItem__title}>{todo.title}</h3>
            <input type="checkbox"/>
        </div>
    );
}
