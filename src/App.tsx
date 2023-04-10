import React, {useEffect, useState} from 'react';
import Todolist, {TasksType} from './components/Todolist/Todolist';

import {v1} from 'uuid';
import Header from "./components/Header/Header";

import './App.css';
import {ChangeBackgroundModal} from "./components/ChangeBackgroundModal/ChangeBackgroundModal";
import {bg_images} from './constants';


export type FilterValuesType = 'all' | 'active' | 'completed';

export type TodolistsType = {
    id: string
    title: string
    filter: string
}

// export type BackgroundImagesItemsType = {
//     id: string
//     image: string
// }
//
// export type BackgroundImagesType = {
//     images: BackgroundImagesItemsType
// }

function App() {

    // const todoList: TodoListItemType[] = [
    //     {id: v1(), title: 'What to learn', filter: 'all'},
    //     {id: v1(), title: 'What to bye', filter: 'all'}
    // ]
    //
    // const initialTasks = [
    //     {id: v1(), title: 'CSS', isDone: true},
    //     {id: v1(), title: 'JS', isDone: true},
    //     {id: v1(), title: 'React', isDone: false},
    //     {id: v1(), title: 'Redux', isDone: false}
    // ]
    let todolistID1 = v1()
    let todolistID2 = v1()

    let [todos, setTodos] = useState<Array<TodolistsType>>([
        {id: todolistID1, title: 'What to learn', filter: 'all'},
        {id: todolistID2, title: 'What to listen', filter: 'all'},
    ])

    let [tasks, setTasks] = useState({
        [todolistID1]: [
            {id: v1(), title: 'HTML&CSS', isDone: true},
            {id: v1(), title: 'JS', isDone: true},
            {id: v1(), title: 'ReactJS', isDone: false},
            {id: v1(), title: 'Redux', isDone: false},

        ],
        [todolistID2]: [
            {id: v1(), title: 'Nothing else metters', isDone: true},
            {id: v1(), title: 'Dani California', isDone: true},
            {id: v1(), title: 'Storytime', isDone: true},
            {id: v1(), title: 'Warriors of the world', isDone: false}
        ]
    })


    // const [tasks, setTasks] = useState<TasksType[]>(initialTasks)
    // const [todos, setTodos] = useState<TodoListItemType[]>(todoList)
    const [modalActive, setModalActive] = useState(false)
    const [bgImage, setBgImage] = useState<string>(bg_images[8].image)

    useEffect(() => {
        const SavedBG = localStorage.getItem('savedImageBackground')
        if (SavedBG){
            setBgImage(SavedBG)
        }
    }, [])

    const deleteTask = (todoID: string, taskID: string) => {
        setTasks({...tasks, [todoID]: tasks[todoID].filter(i => i.id !== taskID)})
    }

    const addTask = (todoID: string, newTitle: string) => {
        const newTask = {id: v1(), title: newTitle, isDone: false}
        setTasks({...tasks, [todoID]: [newTask, ...tasks[todoID]]})
    }

    const changeTaskStatus = (todoID: string, id: string, value: boolean) => {
        // setTasks(tasks.map(el => el.id === id ? {...el, isDone: !el.isDone} : el))
        setTasks({...tasks, [todoID]: tasks[todoID].map(el => el.id === id ? {...el, isDone: value} : el)})
    }

    // let getFilterTasks = tasks;
    //
    // if (filterTasks === 'completed') {
    //     getFilterTasks = tasks.filter(i => i.isDone)
    // }
    //
    // if (filterTasks === 'active') {
    //     getFilterTasks = tasks.filter(i => !i.isDone)
    // }

    const changeFilter = (todoID: string, value: FilterValuesType) => {
        setTodos(todos.map(el => el.id === todoID ? {...el, filter: value} : el))
    }

    const removeTodolist = (todoID: string) => {
        setTodos(todos.filter(el => el.id !== todoID))
        delete tasks[todoID]
    }

    const todoLists = todos.map(el => {
        let getFilterTasks = tasks[el.id];

        if (el.filter === 'completed') {
            getFilterTasks = tasks[el.id].filter(i => i.isDone)
        }
        if (el.filter === 'active') {
            getFilterTasks = tasks[el.id].filter(i => !i.isDone)
        }
        return (
            <Todolist
                todos={todos}
                changeFilter={changeFilter}
                todoID={el.id}
                key={el.id}
                title={el.title}
                tasks={getFilterTasks}
                deleteTask={deleteTask}
                addTask={addTask}
                changeTaskStatus={changeTaskStatus}
                removeTodolist={removeTodolist}
            />
        )
    })

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
                <div className='todolists_block'>
                    {todoLists}
                </div>
            </div>
        </div>
    );
}

export default App;
