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
      <h3>{props.title}</h3>
      <div>
        <input />
        <button>+</button>
      </div>
      <ul>
        {props.tasks.map((i) => {
          return (
            <li>
              <input type="checkbox" checked={i.isDone} />
              <span>{i.title}</span>
              <button onClick={() => {props.deleteTask(i.id)}}>x</button>
            </li>
          );
        })}
      </ul>
      <div>
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>
    </div>
  );
}
