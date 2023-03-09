import { useState } from 'react';
import { FilterValuesType } from '../App';
import './Todolist.css';


export type TaskType = {
  id: string;
  title: string;
  isDone: boolean;
};

type PropsType = {
  title: string;
  tasks: Array<TaskType>
  deleteTask: (id: string) => void
  placeholder: string
  changeFilter: (value: FilterValuesType) => void
  addTask: (title: string) => void
};

export default function Todolist(props: PropsType) {

    const [inputValue, setInputValue] = useState('');

    return (
        <div className='card_wrapper'>
        <div className='title'>{props.title}</div>
        <div className='input_block'>
            <input 
                placeholder={props.placeholder}
                value={inputValue} 
                onChange={(e) => {
                    setInputValue(e.currentTarget.value)
                }}
            />
            <button onClick={() => {
                props.addTask(inputValue);
                setInputValue('');
            }}>Add</button>
        </div>
        <ul className='tasks_block'>
            {props.tasks.map((i) => {
            return (
                <li key={i.id} className='task_item'>
                    <input type="checkbox" checked={i.isDone}/>
                    <span>{i.title}</span>
                    <button onClick={() => {props.deleteTask(i.id)}}>Del</button>
                </li>
            );
            })}
        </ul>
        <div className='filterButton_block'>
            <button onClick={() => {props.changeFilter('all')}}>All</button>
            <button onClick={() => {props.changeFilter('active')}}>Active</button>
            <button onClick={() => {props.changeFilter('completed')}}>Completed</button>
        </div>
        </div>
    );
}
