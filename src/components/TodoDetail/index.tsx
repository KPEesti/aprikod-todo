import {observer} from "mobx-react";
import styles from "./todoDetail.module.scss";

export const TodoDetail = observer(() => {
    return (
        <div className={styles.todoDetail}>
            <h2 className={styles.todoDetail__title}>Title</h2>
            <hr className={styles.todoDetail__divider}/>
            <p className={styles.todoDetail__description}>Description</p>
            <div className={styles.todoDetail__detailBlock}>
                <span>Статус: Не закончена</span>
                <span>Дата Создания: 21.12.2022</span>
            </div>
        </div>
    );
});
