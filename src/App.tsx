import React, {createContext} from 'react';
import './App.css';
import {TodoList} from "./components/TodoList";
import {Store} from "./store/Store";
import {TodoDetail} from "./components/TodoDetail";

export const StoreContext = createContext<Store>(new Store());

function App() {

    const store = new Store();

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
