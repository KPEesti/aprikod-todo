import {NestingResolver} from "../NestingResolver";
import React, {useContext, useState} from "react";
import {StoreContext} from "../../App";
import {observer} from "mobx-react";
import {Modal} from "../../UIKit/Modal";
import {TaskCreation} from "../TaskCreation";

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
        <div>
            <input type="text" onChange={(e) => store.searchTasks(e.target.value)}/>
            <button onClick={() => setIsModalOpen(true)}>Добавить задачу</button>

            <Modal isOpened={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <TaskCreation ctx={store} onClose={() => setIsModalOpen(false)}/>
            </Modal>
        </div>
    );
}
