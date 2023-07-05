import {Todo} from "../../models/Todo";
import {TodoItem} from "../TodoItem";
import CollapseBlock from "../CollapseBlock";

interface NestingResolverProps {
    task: Todo
}
export function NestingResolver({task}: NestingResolverProps) {
    if(!task.subTasks) {
        return <TodoItem todo={task}/>;
    }

    return (
        <CollapseBlock task={task}/>
    );
}
