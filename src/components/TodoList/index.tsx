import {NestingResolver} from "../NestingResolver";
import React, {useContext, useState} from "react";
import {StoreContext} from "../../App";
import {observer} from "mobx-react";
import {Modal} from "../../UIKit/Modal";
import {TaskCreation} from "../TaskCreation";
import styles from "./todoList.module.scss"

export const TodoList = observer(() => {
    const store = useContext(StoreContext);

    return (
        <div>
            <ListHeader/>
            {
                store.searchingTask.map(task => <NestingResolver task={task} key={task.id}/>)
            }
        </div>
    );
});

const ListHeader = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const store = useContext(StoreContext);

    return (
        <>
            <div className={styles.header}>
                <input className={styles.header__search} type="text" placeholder="Поиск..."
                       onChange={(e) => store.setSearch(e.target.value)}/>
                <button className={styles.header__button} onClick={() => setIsModalOpen(true)}>Добавить задачу</button>
            </div>

            <Modal isOpened={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <TaskCreation ctx={store} onClose={() => setIsModalOpen(false)}/>
            </Modal>
        </>
    );
}
