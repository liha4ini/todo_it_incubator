import React, {useEffect, useState} from 'react';
import Todolist, {TasksType} from './components/Todolist/Todolist';

import {v1} from 'uuid';
import Header from "./components/Header/Header";

import './App.css';
import {ChangeBackgroundModal} from "./components/ChangeBackgroundModal/ChangeBackgroundModal";
import {bg_images} from './constants';


export type FilterValuesType = 'all' | 'active' | 'completed';

// export type BackgroundImagesItemsType = {
//     id: string
//     image: string
// }
//
// export type BackgroundImagesType = {
//     images: BackgroundImagesItemsType
// }

function App() {

    let initialTasks = [
        {id: v1(), title: 'CSS', isDone: true},
        {id: v1(), title: 'JS', isDone: true},
        {id: v1(), title: 'React', isDone: false},
        {id: v1(), title: 'Redux', isDone: false}
    ]

    const [tasks, setTasks] = useState<TasksType[]>(initialTasks)
    const [modalActive, setModalActive] = useState(false)
    const [bgImage, setBgImage] = useState<string>(bg_images[8].image)

    useEffect(() => {
        const SavedBG = localStorage.getItem('savedImageBackground')
        if (SavedBG){
            setBgImage(SavedBG)
        }
    }, [])

    const deleteTask = (id: string) => {
        setTasks(tasks.filter(i => i.id !== id))
    }

    const addTask = (newTitle: string) => {
        const newTask = {id: v1(), title: newTitle, isDone: false}
        setTasks([newTask, ...tasks])
    }

    const changeTaskStatus = (id: string) => {
        setTasks(tasks.map(el => el.id === id ? {...el, isDone: !el.isDone} : el))
    }

    return (
        <div className="App">
            <Header
                modalActive={modalActive}
                setModalActive={setModalActive}
            />
            <div className='main_content'
                 style={{
                     backgroundImage: `url(${bgImage})`,
                     backgroundRepeat: 'no-repeat',
                     backgroundSize: "cover"
                 }}
            >
                <ChangeBackgroundModal
                    modalActive={modalActive}
                    setModalActive={setModalActive}
                    setBgImage={setBgImage}
                />
                <Todolist
                    title='What to learn'
                    tasks={tasks}
                    deleteTask={deleteTask}
                    addTask={addTask}
                    changeTaskStatus={changeTaskStatus}
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
