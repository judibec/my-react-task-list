import Header from "./components/Header"
import { TaskList } from "./components/TaskList";
import React, {useState, useEffect} from "react";
import { useCreateTask } from "./hooks/useTaskLists";


function App() {
  const [items, addItems, deleteItem, deleteAll] = useCreateTask([]);
  const [value, setValue] = useState('');
  
  function handleChange(event) {
    setValue(event.target.value);
  }

  function handleSubmit(event){
    event.preventDefault();
    addItems(value)
    setValue("")
    // let tasks = [...items]
    // if(!tasks.includes(value)){
    //   tasks = [...tasks,{ name: value}]
    //   setValue('')
    // }
    // setItems(tasks)
    // localStorage.setItem('tasks',JSON.stringify(tasks));
  }

  // useEffect(()=>{
  //   const localStorageTasks = localStorage.getItem('tasks');
  //   const storedTasks = JSON.parse(localStorageTasks);
  //   if(storedTasks!==null){
  //     setItems(storedTasks)
  //   }
  // },[])

  function handleDeleteAll(){
    localStorage.clear()
    deleteAll()
  }

  function handleDeleteItem(itemToDelete){
    deleteItem(itemToDelete)
  }

  return(
    <div className="App">
      <Header />
      <form onSubmit={handleSubmit}>
        <input type= "text" value = {value} onChange={handleChange}></input>
        <button type="submit">Agregar</button>
      </form>
      <TaskList list={items} onDeleteTask={handleDeleteItem}/>
      <button onClick={handleDeleteAll}>Delete All</button>
    </div>
  );
}

export default App
