import {useState} from "react";
import {Todo} from "../../models/Todo";
import styles from "./taskCreation.module.scss";
import {Store} from "../../models/Store";

interface TaskCreationProps {
    ctx: Todo | Store;
    onClose: () => void;
}

export const TaskCreation = ({ctx, onClose}: TaskCreationProps) => {
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');

    const handleSubmit = () => {
        ctx.addTask(
            new Todo({
                title,
                description,
                subTasks: null,
                completed: false
            })
        );
        onClose();
    };

    return (
        <div className={styles.modal}>
            <h2>Создание задачи</h2>
            <input type="text" placeholder="Заголовок" value={title} onChange={(e) => setTitle(e.target.value)}/>
            <input type="text" placeholder="Описание" value={description}
                   onChange={(e) => setDescription(e.target.value)}/>
            <button onClick={handleSubmit}>Создать задачу</button>
        </div>
    );
}
