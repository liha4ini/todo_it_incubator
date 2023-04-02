import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {motion} from "framer-motion";
import {FilterValuesType} from "../../App";

import './Todolist.css';
import {MultiButton} from "../MultiButton/MultiButton";
import {MultiInput} from "../MultiInput/MultiInput";


type TodolistPropsType = {
    title: string
    data: TasksType[]
    deleteTask: (id: string) => void
    changeFilter: (value: FilterValuesType) => void
    addTask: (newTitle: string) => void
}

export type TasksType = {
    id: string
    title: string
    isDone: boolean
}

export default function Todolist(props: TodolistPropsType) {

    const {title, data, deleteTask, changeFilter, addTask} = props;

    const [inputValue, setInputValue] = useState('')
    console.log(inputValue)

    const removeTaskHandler = (id: string) => {
        deleteTask(id)
    }

    const addTaskHandler = () => {
        addTask(inputValue)
        setInputValue('')
    }

    // const onEnterHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    //     if (e.key === 'Enter') {
    //         addTask(inputValue)
    //         setInputValue('')
    //     }
    // }

    const todoItems = data.map(i => {
        return (
            <li key={i.id} className='task_item'>
                <input className='checkbox'
                       type="checkbox"
                       checked={i.isDone}
                />
                <span>{i.title}</span>
                <button onClick={() => removeTaskHandler(i.id)}>Del</button>
            </li>
        )
    })

    return (
        <div
            className='card_wrapper'

        >
            <motion.div
                className='title'
                initial={{
                    y: -300,
                    opacity: 0
                }}
                animate={{
                    y: 0,
                    opacity: 1
                }}
                transition={{
                    // delay: 0.7
                }}
            >
                {title}
            </motion.div>
            <div className='input_block'>
                {/*<input*/}
                {/*    value={inputValue}*/}
                {/*    onChange={changeInputValueHandler}*/}
                {/*    onKeyPress={onEnterHandler}*/}
                {/*/>*/}
                <MultiInput
                    inputValue={inputValue}
                    setInputValue={setInputValue}
                />
                <MultiButton
                    callBack={addTaskHandler}
                    className={''}
                >
                    <span>Add</span>
                </MultiButton>
            </div>
            <ul className='tasks_block'>
                {todoItems}
            </ul>
            <motion.div
                className='filterButton_block'
                initial={{
                    x: 1000,
                    opacity: 0
                }}
                animate={{
                    x: 0,
                    opacity: 1
                }}
                transition={{
                    delay: 0.5
                }}
            >
                <MultiButton callBack={() => changeFilter('all')} className={'filterButton'}>All</MultiButton>
                <MultiButton callBack={() => changeFilter('active')} className={'filterButton'}>Active</MultiButton>
                <MultiButton callBack={() => changeFilter('completed')} className={'filterButton'}>Completed</MultiButton>
            </motion.div>
        </div>
    );
}
