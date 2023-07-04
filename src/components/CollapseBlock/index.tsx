import React from "react";
import styles from './collapseBlock.module.scss';
import {Todo} from "../../models/ITodo";
import {TodoItem} from "../TodoItem";
import {useCollapse} from "../../hooks/useCollapse";
import {NestingResolver} from "../NestingResolver";

interface CollapseBlockProps {
    task: Todo
}


export default function CollapseBlock({task}: CollapseBlockProps) {
    const {collapsed, handleCollapse} = useCollapse(true);

    return (
        <div className={styles.collapseBlock}>
            <div
                onClick={handleCollapse}
                className={styles.collapseBlock__header}
            >
                <img className={styles.collapseBlock__arrow}
                     src={!collapsed ? "/images/upArrow.svg" : "/images/downArrow.svg"} height={'20px'} alt=""/>
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
}
