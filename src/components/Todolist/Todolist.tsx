import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {motion} from "framer-motion";
import {FilterValuesType, TodolistsType} from "../../App";

import './Todolist.css';
import {MultiButton} from "../MultiButton/MultiButton";
import {MultiInput} from "../MultiInput/MultiInput";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';


type TodolistPropsType = {
    title: string
    tasks: TasksType[]
    deleteTask: (todoID: string, taskID: string) => void
    addTask: (todoID: string, newTitle: string) => void
    changeTaskStatus: (todoID: string, taskId: string, checkedValue: boolean) => void
    todoID: string
    changeFilter: (todoID: string, value: FilterValuesType) => void
    todos: TodolistsType[]
    removeTodolist: (todoID: string) => void
}

export type TasksType = {
    id: string
    title: string
    isDone: boolean
}

export default function Todolist(props: TodolistPropsType) {

    const {
        title,
        tasks,
        deleteTask,
        addTask,
        changeTaskStatus,
        changeFilter,
        todos,
        todoID,
        removeTodolist,
        ...restProps
    } = props;

    const [inputValue, setInputValue] = useState('')
    const [error, setError] = useState<string | null>(null)
    // const [filterTasks, setFilterTasks] = useState<FilterValuesType>('all')

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

    // let getFilterTasks = tasks;
    //
    // if (filterTasks === 'completed') {
    //     getFilterTasks = tasks.filter(i => i.isDone)
    // }
    //
    // if (filterTasks === 'active') {
    //     getFilterTasks = tasks.filter(i => !i.isDone)
    // }
    //
    // const changeFilter = (value: FilterValuesType) => {
    //     setFilterTasks(value)
    // }

    const removeTaskHandler = (todoID: string, taskID: string) => {
        deleteTask(todoID, taskID)
    }

    const addTaskHandler = () => {
        if (inputValue.trim() !== '') {
            addTask(todoID, inputValue)
            setInputValue('')
        } else {
            setError('Title is required')
        }

    }

    const onEnterHandler = () => {
        addTask(todoID, inputValue)
    }

    const removeTodolistHandler = () => {
        removeTodolist(todoID)
    }

    const todoItems = tasks.map(i => {
        const changeTaskStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
            changeTaskStatus(todoID, i.id, e.currentTarget.checked)
        }
        return (
            <li key={i.id} className={i.isDone ? 'task_item is_done' : 'task_item'}>
                <input className='checkbox'
                       type="checkbox"
                       checked={i.isDone}
                       onChange={changeTaskStatusHandler}
                />
                <span>{i.title}</span>
                <button onClick={() => removeTaskHandler(props.todoID, i.id)}>Del</button>
            </li>
        )
    })

    return (
        <div
            className='card_wrapper'

        >
            <motion.div
                onClick={removeTodolistHandler}
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
                <DeleteForeverIcon
                    className='delete_icon'
                />
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
                    callBack={() => changeFilter(props.todoID, 'all')}
                    className={'filterButton'}
                    // className={todos.filter === 'all' ? 'active_filter_button' : 'filterButton'}
                >
                    All
                </MultiButton>
                <MultiButton
                    callBack={() => changeFilter(props.todoID, 'active')}
                    className={'filterButton'}
                    // className={filterTasks === 'active' ? 'active_filter_button' : 'filterButton'}
                >
                    Active
                </MultiButton>
                <MultiButton
                    callBack={() => changeFilter(props.todoID, 'completed')}
                    className={'filterButton'}
                    // className={filterTasks === 'completed' ? 'active_filter_button' : 'filterButton'}
                >
                    Completed
                </MultiButton>
            </motion.div>
        </div>
    );
}
