import React from 'react';
import './App.css';
import {Todo} from "./models/ITodo";
import {NestingResolver} from "./components/NestingResolver";

function App() {
    const tasks: Array<Todo> = [
        {
            id: '1',
            title: 'Task',
            description: 'description',
            completed: true,
            subTasks: [
                {
                    id: '2',
                    title: 'Sub task',
                    description: 'description',
                    subTasks: null,
                    creationDate: '21.12.2022',
                    completed: true,
                }
            ],
            creationDate: '21.12.2022'
        },
        {
            id: '3',
            title: 'Task',
            description: 'description',
            completed: false,
            subTasks: [
                {
                    id: '4',
                    title: 'Sub task',
                    description: 'description',
                    completed: false,
                    subTasks: [
                        {
                            id: '5',
                            title: 'Sub task',
                            description: 'description',
                            subTasks: null,
                            completed: false,
                            creationDate: '21.12.2022'
                        },
                        {
                            id: '6',
                            title: 'Sub task',
                            description: 'description',
                            subTasks: null,
                            completed: false,
                            creationDate: '21.12.2022'
                        }
                    ],
                    creationDate: '21.12.2022'
                }
            ],
            creationDate: '21.12.2022'
        },
        {
            id: '7',
            title: 'Sub task',
            description: 'description',
            subTasks: null,
            completed: false,
            creationDate: '21.12.2022'
        }
    ].map(task => new Todo(task));

    return (
        <div className="App">
            {
                tasks.map(task => <NestingResolver task={task} key={task.id}/>)
            }
        </div>
    );
}

export default App;
