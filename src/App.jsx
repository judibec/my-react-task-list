import Header from "./components/Header"
import { TaskList } from "./components/TaskList";
import React, {useState, useEffect} from "react";
import { useCreateTask } from "./hooks/useTaskLists";
import Modal from "react-modal";


function App() {
  const [items, addItems, deleteItem, deleteAll] = useCreateTask([]);
  const [value, setValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  
  function handleChange(event) {
    setValue(event.target.value);
  }

  function handleSubmit(event){
    event.preventDefault();
    addItems(value)
    setValue("")
    handleCloseModal();
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

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return(
    <div className="App">
      <Header />
      <button onClick={handleOpenModal}>Agregar</button>
      <Modal isOpen={isOpen} onRequestClose={handleCloseModal}>
      <form onSubmit={handleSubmit}>
        <input type= "text" value = {value} onChange={handleChange}></input>
        <button type="submit">Agregar</button>
        </form>
      </Modal>
      
      <TaskList list={items} onDeleteTask={handleDeleteItem}/>
      <button onClick={handleDeleteAll}>Delete All</button>
    </div>
  );
}

export default App
