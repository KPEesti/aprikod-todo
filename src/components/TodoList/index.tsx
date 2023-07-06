import {NestingResolver} from "../NestingResolver";
import React, {useContext, useState} from "react";
import {StoreContext} from "../../App";
import {observer} from "mobx-react";
import {createPortal} from "react-dom";
import {TaskModal} from "../TaskModal";

export const TodoList = observer(() => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const store = useContext(StoreContext);
    return (
        <div>
            {
                store.tasks.map(task => <NestingResolver task={task} key={task.id}/>)
            }
            <button onClick={() => setIsModalOpen(true)}>Добавить задачу</button>
            {isModalOpen && createPortal(<TaskModal ctx={store} closeModal={() => setIsModalOpen(false)}/>, document.body)}
        </div>
    );
});
