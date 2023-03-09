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

    let initialSongs: Array<TaskType> = [
        { id: 1, title: 'Nothing else metters', isDone: true },
        { id: 2, title: 'Dani California', isDone: true },
        { id: 3, title: 'Storytime', isDone: true },
        { id: 4, title: 'Warriors of the world', isDone: false }
    ]

    let initialFilms: Array<TaskType> = [
        { id: 1, title: 'Terminator', isDone: true },
        { id: 2, title: 'Enemy of the state', isDone: true },
        { id: 3, title: 'Matrix', isDone: true },
        { id: 4, title: 'Avatar 2', isDone: false }
    ]

    let [tasks, setTasks] = useState(initialTasks)
    let [songs, setSongs] = useState(initialSongs)
    let [films, setFilms] = useState(initialFilms)
    
    function deleteTask(id: number) {
        setTasks(tasks.filter((i) => i.id !== id))
    }

    function deleteSong(id: number) {
        setSongs(songs.filter((i) => i.id !== id))
    }

    function deleteFilm(id: number) {
        setFilms(films.filter((i) => i.id !== id))
    }

    return (
        <div className="App">
            <Todolist title='What to learn'
                      tasks={tasks} 
                      deleteTask={deleteTask}
                      placeholder='Add a New Task'
            />
            <Todolist title='What song to listen'
                      tasks={songs} 
                      deleteTask={deleteSong}
                      placeholder='Add a New Song'
            />
            <Todolist title='What movie to watch '
                      tasks={films} 
                      deleteTask={deleteFilm}
                      placeholder='Add a New Film'
            />
        </div>
    );
}

export default App;
