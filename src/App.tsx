import React from 'react';
import './App.css';
import {Todo} from "./models/todo";
import {NestingResolver} from "./components/NestingResolver";

function App() {
    const tasks: Array<Todo> = [
        {
            id: 1,
            title: 'Task',
            description: 'description',
            subTasks: [
                {
                    id: 2,
                    title: 'Sub task',
                    description: 'description',
                    subTasks: null,
                }
            ],
            creationDate: '21.12.2022'
        },
        {
            id: 3,
            title: 'Task',
            description: 'description',
            subTasks: [
                {
                    id: 4,
                    title: 'Sub task',
                    description: 'description',
                    subTasks: [
                        {
                            id: 5,
                            title: 'Sub task',
                            description: 'description',
                            subTasks: null,
                        },
                        {
                            id: 6,
                            title: 'Sub task',
                            description: 'description',
                            subTasks: null,
                        }
                    ],
                }
            ],
            creationDate: '21.12.2022'
        },
        {
            id: 6,
            title: 'Sub task',
            description: 'description',
            subTasks: null,
            creationDate: '21.12.2022'
        }
    ];

    return (
        <div className="App">
            {
                tasks.map(task => <NestingResolver task={task}/>)
            }
        </div>
    );
}

export default App;
