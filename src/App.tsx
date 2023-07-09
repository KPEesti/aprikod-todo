import React, {createContext} from 'react';
import './App.css';
import {Todo} from "./models/Todo";
import {TodoList} from "./components/TodoList";
import {Store} from "./store/Store";
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
                    completed: true,
                }
            ]
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
                        },
                        {
                            id: '6',
                            title: 'Sub task',
                            description: 'description',
                            subTasks: null,
                            completed: false,
                        }
                    ]
                }
            ]
        },
        {
            id: '7',
            title: 'Task',
            description: 'description',
            subTasks: null,
            completed: false
        }
    ].map(task => new Todo(task));

    const store = new Store(tasks);

    return (
        <StoreContext.Provider value={store}>
            <div className="App" id="App">
                <TodoList/>
                <TodoDetail/>
            </div>
        </StoreContext.Provider>
    );
}

export default App;
