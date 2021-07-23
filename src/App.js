
import { useState } from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(faTrash);



function App() {

  const [list, setList] = useState([]);
  const [task, setTask] = useState("");
  const [taskDone, setTaskDone] = useState(false);

  const handleChange = (e) => {
    setTask(e.target.value);
  }
console.log({task});

  const handleSubmit = (e) => {
    e.preventDefault();
    const newList = [...list];
    newList.push(task);
    setList(newList);
  }

  const handleCheckOn = () => {
    setTaskDone(true);
  }
  const handleCheckOff = () => {
    setTaskDone(false);
  }

  const handleDelete = () => {
    const newList = [...list];
    newList.delete;
    setList(newList);
  }

  console.log({list});

  return (
    <div className="App">
      <div className="list">{list.map((elem, index) => {
        return (
          <div className="tasks">
        <input id="check" type="checkbox" onClick={#check.checked ? handleCheckoff : handleCheckOn}/>
        <span key={index} className={taskDone ? "task_done" : ""}>{elem}</span>
        <FontAwesomeIcon icon="trash" onClick={handleDelete}/>
        </div>)

      })}</div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} />
        <input type="submit" value="New Task" />
      </form>
    </div>
  );
}

export default App;
