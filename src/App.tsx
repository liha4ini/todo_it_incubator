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
    const [filterTasks, setFilterTasks] = useState<FilterValuesType>('all')
    const [modalActive, setModalActive] = useState(false)
    const [bgImage, setBgImage] = useState<string>(bg_images[8].image)
    console.log(bgImage)
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

    const changeFilter = (value: FilterValuesType) => {
        setFilterTasks(value)
    }

    const changeTaskStatus = (id: string) => {
        setTasks(tasks.map(el => el.id === id ? {...el, isDone: !el.isDone} : el))
    }

    // const onChangeBackgroundHandler = (imgID: string, bgI: string) => {
    //     let image = bg_images.filter(img => img.id === imgID)
        // setBgImage(image[id].image)
        // const createCss = (id: number, bgI: string) => {
        //     if (id === activeLinkId) {
        //         return {
        //             backgroundImage: `url(${bgI})`,
        //             backgroundSize: "cover",
        //             backgroundRepeat: "no-repeat"
        //         };
        //     } else return {};
        // };
    // }

    let getFilterTasks = tasks;

    if (filterTasks === 'completed') {
        getFilterTasks = tasks.filter(i => i.isDone)
    }

    if (filterTasks === 'active') {
        getFilterTasks = tasks.filter(i => !i.isDone)
    }

    return (
        <div className="App">
            <Header
                modalActive={modalActive}
                setModalActive={setModalActive}
            />
            <div className='main_content'
                 style={{
                     // backgroundImage: `url(${bg_image})`,
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
                    data={getFilterTasks}
                    deleteTask={deleteTask}
                    changeFilter={changeFilter}
                    addTask={addTask}
                    filterTasks={filterTasks}
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
