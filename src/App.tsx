import React, { useState } from 'react';
import Todolist from './components/Todolist';
import { TaskType } from './components/Todolist';

import './App.css';

// let tasks2: Array<TaskType> = [
//     { id: 1, title: 'Supernatural', isDone: true },
//     { id: 2, title: 'Wenseday', isDone: false },
//     { id: 3, title: 'Breaking Bad', isDone: true }
// ]

function App() {

    let initialTasks: Array<TaskType> = [
        { id: 1, title: 'CSS', isDone: true },
        { id: 2, title: 'JS', isDone: true },
        { id: 3, title: 'React', isDone: false },
        { id: 4, title: 'Redax', isDone: false }
    ]

    let [tasks, setTasks] = useState(initialTasks)
    
    function deleteTask(id: number) {
        let i = tasks.filter((i) => i.id !== id)
        setTasks(i)
        
    }

    return (
        <div className="App">
            <Todolist title='What to learn'
                      tasks={tasks} 
                      deleteTask={deleteTask}
            />
        </div>
    );
}

export default App;
