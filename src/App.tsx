import React, {useState} from 'react';
import Todolist, {TasksType} from './components/Todolist/Todolist';

import './App.css';
import bg_image from './assets/bg_image3.jpg';

import {v1} from 'uuid';
import Header from "./components/Header/Header";


export type FilterValuesType = 'all' | 'active' | 'completed';

function App() {

    let initialTasks = [
        {id: v1(), title: 'CSS', isDone: true},
        {id: v1(), title: 'JS', isDone: true},
        {id: v1(), title: 'React', isDone: false},
        {id: v1(), title: 'Redux', isDone: false}
    ]

    const [tasks, setTasks] = useState<TasksType[]>(initialTasks)
    const [filterTasks, setFilterTasks] = useState<FilterValuesType>('all')

    const deleteTask = (id: string) => {
        setTasks(tasks.filter(i => i.id !== id))
    }

    const addTask = (newTitle: string) => {
        const newTask = {id: v1(), title: newTitle, isDone: false}
        setTasks([newTask, ...tasks])
    }

    const changeFilter = (value: FilterValuesType) => {
        setFilterTasks(value)
    }

    let getFilterTasks = tasks;

    if (filterTasks === 'completed') {
        getFilterTasks = tasks.filter(i => i.isDone)
    }

    if (filterTasks === 'active') {
        getFilterTasks = tasks.filter(i => !i.isDone)
    }

    return (
        <div className="App">
            <Header />
            <div className='main_content'
                 style={{ backgroundImage: `url(${bg_image})`, backgroundRepeat: 'no-repeat', backgroundSize: "cover" }}>
                <Todolist
                    title='What to learn'
                    data={getFilterTasks}
                    deleteTask={deleteTask}
                    changeFilter={changeFilter}
                    addTask={addTask}
                />
            </div>


        </div>
    );
}

export default App;


// let initialSongs: Array<TaskType> = [
//     { id: 1, title: 'Nothing else metters', isDone: true },
//     { id: 2, title: 'Dani California', isDone: true },
//     { id: 3, title: 'Storytime', isDone: true },
//     { id: 4, title: 'Warriors of the world', isDone: false }
// ]
