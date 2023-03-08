import './Todolist.css';


export type TaskType = {
  id: number;
  title: string;
  isDone: boolean;
};

type PropsType = {
  title: string;
  tasks: Array<TaskType>
  deleteTask: Function
};

export default function Todolist(props: PropsType) {
  return (
    <div className='card_wrapper'>
      <div className='title'>{props.title}</div>
      <div className='input_block'>
        <input placeholder={'Add a New Task'}  />
        <button>Add</button>
      </div>
      <ul className='tasks_block'>
        {props.tasks.map((i) => {
          return (
            <li className='task_item'>
              <input type="checkbox" checked={i.isDone}/>
              <span>{i.title}</span>
              <button onClick={() => {props.deleteTask(i.id)}}>Del</button>
            </li>
          );
        })}
      </ul>
      <div className='filterButton_block'>
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>
    </div>
  );
}
