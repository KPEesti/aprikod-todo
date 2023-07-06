import {useState} from "react";
import {Todo} from "../../models/Todo";
import styles from "./taskModal.module.scss";

interface CreateTaskModalProps {
    ctx: any;
    closeModal: () => void;
}

export const TaskModal = ({ctx, closeModal}: CreateTaskModalProps) => {
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
        closeModal();
    };

    return (
        <div className={styles.overlay} onClick={closeModal}>
            <div className={styles.modal} onClick={e => e.stopPropagation()}>
                <input type="text" placeholder="Заголовок" value={title} onChange={(e) => setTitle(e.target.value)}/>
                <input type="text" placeholder="Описание" value={description}
                       onChange={(e) => setDescription(e.target.value)}/>
                <button onClick={handleSubmit}>Создать задачу</button>
            </div>
        </div>
    );
}
