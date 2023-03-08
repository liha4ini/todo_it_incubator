import React, { useState } from 'react';
import Todolist from './components/Todolist';
import { TaskType } from './components/Todolist';

import './App.css';

function App() {

    let initialTasks: Array<TaskType> = [
        { id: 1, title: 'CSS', isDone: true },
        { id: 2, title: 'JS', isDone: true },
        { id: 3, title: 'React', isDone: false },
        { id: 4, title: 'Redux', isDone: false }
    ]

    let [tasks, setTasks] = useState(initialTasks)
    
    function deleteTask(id: number) {
        setTasks(tasks.filter((i) => i.id !== id))
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
