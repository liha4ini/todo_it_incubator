import React, { useState } from 'react';
import Todolist from './components/Todolist';
import { TaskType } from './components/Todolist';

import './App.css';
import { v1 } from 'uuid';


export type FilterValuesType = 'all' | 'active' | 'completed';

function App() {

    let initialTasks: Array<TaskType> = [
        { id: v1(), title: 'CSS', isDone: true },
        { id: v1(), title: 'JS', isDone: true },
        { id: v1(), title: 'React', isDone: false },
        { id: v1(), title: 'Redux', isDone: false }
    ]

    // let initialSongs: Array<TaskType> = [
    //     { id: 1, title: 'Nothing else metters', isDone: true },
    //     { id: 2, title: 'Dani California', isDone: true },
    //     { id: 3, title: 'Storytime', isDone: true },
    //     { id: 4, title: 'Warriors of the world', isDone: false }
    // ]

    // let initialFilms: Array<TaskType> = [
    //     { id: 1, title: 'Terminator', isDone: true },
    //     { id: 2, title: 'Enemy of the state', isDone: true },
    //     { id: 3, title: 'Matrix', isDone: true },
    //     { id: 4, title: 'Avatar 2', isDone: false }
    // ]

    let [tasks, setTasks] = useState(initialTasks)
    // let [songs, setSongs] = useState(initialSongs)
    // let [films, setFilms] = useState(initialFilms)

    let [filter, setFilter] = useState<FilterValuesType>('all')
    
    function deleteTask(id: string) {
        setTasks(tasks.filter((i) => i.id !== id))
    }

    function addTask(title: string) {
        let newTask = {id: v1(), title: title, isDone: false}
        let newTasks = [newTask, ...tasks];
        setTasks(newTasks);
    }

    function changeStatus(taskId: string, isDone: boolean) {
        let task = tasks.find(t => t.id === taskId);
        if (task) {
            task.isDone = isDone;
        }
        setTasks([...tasks])
    }

    function changeFilter(value: FilterValuesType) {
        setFilter(value);
    }

    let tasksForTodoList = tasks;
    if (filter === 'completed') {
        tasksForTodoList = tasks.filter(i => i.isDone)
    }

    if (filter === 'active') {
        tasksForTodoList = tasks.filter(i => !i.isDone)
    }

    // function deleteSong(id: number) {
    //     setSongs(songs.filter((i) => i.id !== id))
    // }

    // function deleteFilm(id: number) {
    //     setFilms(films.filter((i) => i.id !== id))
    // }

    return (
        <div className="App">
            <Todolist title='What to learn'
                      tasks={tasksForTodoList} 
                      deleteTask={deleteTask}
                      changeFilter={changeFilter}
                      placeholder='Add a New Task'
                      addTask={addTask}
                      changeStatus={changeStatus}
            />
            {/* <Todolist title='What song to listen'
                      tasks={songs} 
                      deleteTask={deleteSong}
                      placeholder='Add a New Song'
            />
            <Todolist title='What movie to watch '
                      tasks={films} 
                      deleteTask={deleteFilm}
                      placeholder='Add a New Film'
            /> */}
        </div>
    );
}

export default App;
