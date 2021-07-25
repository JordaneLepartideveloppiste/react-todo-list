
import { useState } from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(faTrash);



function App() {

  const [list, setList] = useState([{task: "boire", done:false}]);
  const [input, setInput] = useState("");


  const handleChange = (e) => {
    setInput(e.target.value);
  }
console.log({input});

  const handleSubmit = (e) => {
    e.preventDefault();
    const newList = [...list];
    newList.push({task:input, done:false});
    setList(newList);
  }





  console.log({list});

  return (
    <div className="App">
      <div className="list">{list.map(({task, done}, index) => {
        return (
          <div className="tasks">
            <input
              type="checkbox"
              name="task_done"
              onChange={
               !list[index].done ? (
                 () => {
                const newList = [...list];
                newList[index].done = true;
                setList(newList);
                 }
               ) : (
                () => {
                const newList = [...list];
                newList[index].done = false;
                setList(newList);
                }
              )
              }   
            
            />
            <span key={index} className={done ? "task_done" : "task_todo"}>
              {task}
            </span>
            <FontAwesomeIcon
              icon="trash"
              onClick={() => {
                const newList = [...list];
                newList.splice(index, 1);
                setList(newList);
              }}
            />
          </div>
        );

      })}</div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} />
        <input type="submit" value="New Task" />
      </form>
    </div>
  );
}

export default App;
