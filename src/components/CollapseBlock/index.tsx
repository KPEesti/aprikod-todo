import React from "react";
import styles from './collapseBlock.module.scss';
import {Todo} from "../../models/Todo";
import {TodoItem} from "../TodoItem";
import {useCollapse} from "../../hooks/useCollapse";
import {NestingResolver} from "../NestingResolver";
import {observer} from "mobx-react";

interface CollapseBlockProps {
    task: Todo
}


export const CollapseBlock = observer(({task}: CollapseBlockProps) => {
    const {collapsed, handleCollapse} = useCollapse(true);

    return (
        <div className={styles.collapseBlock}>
            <div
                className={styles.collapseBlock__header}
            >
                <img className={styles.collapseBlock__arrow}
                     onClick={handleCollapse}
                     src={!collapsed ? "./images/downArrow.svg" : "./images/downArrow.svg"} height={'20px'} alt="arrow"/>
                <TodoItem todo={task}/>
            </div>
            {
                !collapsed &&
                <div
                    className={styles.collapseBlock__body}
                >
                    {task.subTasks && task.subTasks.map(item => {
                            return <NestingResolver task={item} key={item.id}/>
                        }
                    )}
                </div>
            }
        </div>
    );
});
