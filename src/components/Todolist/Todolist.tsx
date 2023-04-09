import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {motion} from "framer-motion";
import {FilterValuesType} from "../../App";

import './Todolist.css';
import {MultiButton} from "../MultiButton/MultiButton";
import {MultiInput} from "../MultiInput/MultiInput";


type TodolistPropsType = {
    title: string
    tasks: TasksType[]
    deleteTask: (id: string) => void
    addTask: (newTitle: string) => void
    changeTaskStatus: (taskId: string, checkedValue: boolean) => void
}

export type TasksType = {
    id: string
    title: string
    isDone: boolean
}

export default function Todolist(props: TodolistPropsType) {

    const {title, tasks, deleteTask, addTask, changeTaskStatus, ...restProps} = props;

    const [inputValue, setInputValue] = useState('')
    const [error, setError] = useState<string | null>(null)
    const [filterTasks, setFilterTasks] = useState<FilterValuesType>('all')

    const changeFilter = (value: FilterValuesType) => {
        setFilterTasks(value)
    }

    // const filteredTasks = () => {
    //     let getFilterTasks = tasks;
    //
    //     if (filterTasks === 'completed') {
    //         getFilterTasks = tasks.filter(i => i.isDone)
    //     }
    //
    //     if (filterTasks === 'active') {
    //         getFilterTasks = tasks.filter(i => !i.isDone)
    //     }
    //     return getFilterTasks
    // }

    let getFilterTasks = tasks;

    if (filterTasks === 'completed') {
        getFilterTasks = tasks.filter(i => i.isDone)
    }

    if (filterTasks === 'active') {
        getFilterTasks = tasks.filter(i => !i.isDone)
    }

    const removeTaskHandler = (id: string) => {
        deleteTask(id)
    }

    const addTaskHandler = () => {
        if (inputValue.trim() !== '') {
            addTask(inputValue)
            setInputValue('')
        } else {
            setError('Title is required')
        }

    }

    const onEnterHandler = () => {
        addTask(inputValue)
    }

    const todoItems = getFilterTasks.map(i => {
        const changeTaskStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
            changeTaskStatus(i.id, e.currentTarget.checked)
        }
        return (
            <li key={i.id} className={i.isDone ? 'task_item is_done' : 'task_item'}>
                <input className='checkbox'
                       type="checkbox"
                       checked={i.isDone}
                       onChange={changeTaskStatusHandler}
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
                <MultiInput
                    inputValue={inputValue}
                    setInputValue={setInputValue}
                    // inputClasses={error ? 'error' : 'input'}
                    inputClasses={'input'}
                    callBack={onEnterHandler}
                    placeholder={'Add a new task'}
                />
                {/*{error && <div className={'error-message'}>{error}</div>}*/}
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
                <MultiButton
                    callBack={() => changeFilter('all')}
                    className={filterTasks === 'all' ? 'active_filter_button' : 'filterButton'}
                >
                    All
                </MultiButton>
                <MultiButton
                    callBack={() => changeFilter('active')}
                    className={filterTasks === 'active' ? 'active_filter_button' : 'filterButton'}
                >
                    Active
                </MultiButton>
                <MultiButton
                    callBack={() => changeFilter('completed')}
                    className={filterTasks === 'completed' ? 'active_filter_button' : 'filterButton'}
                >
                    Completed
                </MultiButton>
            </motion.div>
        </div>
    );
}
