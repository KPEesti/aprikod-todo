import {NestingResolver} from "../NestingResolver";
import React, {useContext, useState} from "react";
import {StoreContext} from "../../App";
import {observer} from "mobx-react";
import {Modal} from "../../UIKit/Modal";
import {TaskCreation} from "../TaskCreation";

export const TodoList = observer(() => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const store = useContext(StoreContext);
    return (
        <div>
            {
                store.tasks.map(task => <NestingResolver task={task} key={task.id}/>)
            }
            <button onClick={() => setIsModalOpen(true)}>Добавить задачу</button>

            <Modal isOpened={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <TaskCreation ctx={store} onClose={() => setIsModalOpen(false)}/>
            </Modal>
        </div>
    );
});
