import {Todo} from "../../models/Todo";
import {TodoItem} from "../TodoItem";
import {CollapseBlock} from "../CollapseBlock";
import {observer} from "mobx-react";

interface NestingResolverProps {
    task: Todo
}

export const NestingResolver = observer(({task}: NestingResolverProps) => {
    if (!task.subTasks || task.subTasks.length === 0) {
        return <TodoItem todo={task}/>;
    }

    return (
        <CollapseBlock task={task}/>
    );
});
