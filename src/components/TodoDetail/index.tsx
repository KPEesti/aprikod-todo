import {observer} from "mobx-react";
import styles from "./todoDetail.module.scss";
import React, {useContext, useState} from "react";
import {StoreContext} from "../../App";
import {Modal} from "../../UIKit/Modal";
import {TaskCreation} from "../TaskCreation";

export const TodoDetail = observer(() => {
    const store = useContext(StoreContext);

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const handleDeleteTask = () => {
        console.log('Handle Delete');
        store.deleteTask(store.currentTask!.id);
    }


    if (!store.currentTask) {
        return (
            <div>
                <h2 className={styles.todoDetail__title}>Chose your task!</h2>
            </div>
        );
    }

    return (
        <div className={styles.todoDetail}>
            <div className={styles.todoDetail__header}>
                <h2 className={styles.todoDetail__title}>{store.currentTask?.title}</h2>
                <div>
                    <img className={styles.todoDetail__icons} src="/images/edit.svg" height="25px" alt=""/>
                    <img className={styles.todoDetail__icons} onClick={handleDeleteTask} src="/images/trash.svg" height="25px" alt=""/>
                </div>
            </div>
            <hr className={styles.todoDetail__divider}/>
            <p className={styles.todoDetail__description}>{store.currentTask?.description}</p>
            <div className={styles.todoDetail__detailBlock}>
                <span>Статус: {store.currentTask.completed ? "Завершена" : "Не завершена"}</span>
                <span>Дата Создания: {store.currentTask?.creationDate.toUTCString()}</span>
            </div>
            <button onClick={() => setIsModalOpen(true)}>Добавить подзадачу</button>

            <Modal isOpened={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <TaskCreation ctx={store.currentTask} onClose={() => setIsModalOpen(false)}/>
            </Modal>
        </div>
    );
});
