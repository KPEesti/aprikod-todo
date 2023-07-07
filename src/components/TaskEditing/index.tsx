import {useState} from "react";
import {Todo} from "../../models/Todo";
import styles from "./taskEditing.module.scss";

interface TaskEditingProps {
    ctx: Todo;
    onClose: () => void;
}

export const TaskEditing = ({ctx, onClose}: TaskEditingProps) => {
    const [title, setTitle] = useState<string>(ctx.title);
    const [description, setDescription] = useState<string>(ctx.description);

    const handleSubmit = () => {
        ctx.changeTask({
            title, description
        })
        onClose();
    };

    return (
        <div className={styles.modal}>
            <h2>Изменение задачи</h2>
            <input type="text" placeholder="Заголовок" value={title} onChange={(e) => setTitle(e.target.value)}/>
            <input type="text" placeholder="Описание" value={description}
                   onChange={(e) => setDescription(e.target.value)}/>
            <button onClick={handleSubmit}>Сохранить изменения</button>
        </div>
    );
}
