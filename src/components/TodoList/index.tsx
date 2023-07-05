import {NestingResolver} from "../NestingResolver";
import React, {useContext} from "react";
import {StoreContext} from "../../App";

export const TodoList = () => {

    const store = useContext(StoreContext);
    return (
        <div>
            {
                store.tasks.map(task => <NestingResolver task={task} key={task.id}/>)
            }
        </div>
    );
}
