import React, {createContext} from 'react';
import './App.css';
import {Todo} from "./models/Todo";
import {TodoList} from "./components/TodoList";
import {Store} from "./models/Store";
import {TodoDetail} from "./components/TodoDetail";

export const StoreContext = createContext<Store>(new Store([]));

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
            title: 'Task',
            description: 'description',
            subTasks: null,
            completed: false,
            creationDate: '21.12.2022'
        }
    ].map(task => new Todo(task));

    const store = new Store(tasks);

    return (
        <StoreContext.Provider value={store}>
            <div className="App">
                <TodoList/>
                <TodoDetail/>
            </div>
        </StoreContext.Provider>
    );
}

export default App;
