import React from 'react';
import Todolist from './components/Todolist';
import { TaskType } from './components/Todolist';

import './App.css';


let tasks1: Array<TaskType> = [
    { id: 1, title: 'CSS', isDone: true },
    { id: 2, title: 'JS', isDone: true },
    { id: 3, title: 'React', isDone: false }
]

let tasks2: Array<TaskType> = [
    { id: 1, title: 'Supernatural', isDone: true },
    { id: 2, title: 'Wenseday', isDone: false },
    { id: 3, title: 'Breaking Bad', isDone: true }
]

function App() {
    return (
        <div className="App">
            <Todolist title='What to learn' tasks={tasks1} />
            <Todolist title='Movies' tasks={tasks2} />
            {/* <Todolist title='Songs' /> */}
        </div>
    );
}

export default App;
