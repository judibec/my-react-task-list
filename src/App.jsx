import Header from "./components/Header"
import { TaskList } from "./components/TaskList";
import React, {useState, useEffect} from "react";
import { useCreateTask } from "./hooks/useTaskLists";
import Modal from "react-modal";


function App() {
  const [items, addItems, deleteItem, deleteAll] = useCreateTask([]);
  const [value, setValue] = useState('');
  const [description, setDesciption] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [formValidation, setFormValidation] = useState({
    task:undefined,
    description:undefined,
  })

  function handleChange(event) {
    const val = event.target.value;
    setFormValidation({
      ...formValidation,
      task:val.length < 3? "task is too short":"",
    })
    setValue(val);

  }

  function handleDescriptionChange(event){
    const val = event.target.value;
    setFormValidation({
      ...formValidation,
      description:val.length === 0? "Description is required":"",
    })
    setDesciption(val);
  }

  function handleSubmit(event){
    event.preventDefault();
    addItems(value)
    setValue("")
    setDesciption("")
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
    setFormValidation({task:undefined,description:undefined})
    setIsOpen(false);
  };

  const isValid = Object.keys(formValidation).every(key=>formValidation[key]==="")

  return(
    <div className="App">
      <Header />
      <button onClick={handleOpenModal}>Agregar</button>
      <Modal isOpen={isOpen} onRequestClose={handleCloseModal}>
      <form onSubmit={handleSubmit}>
        <div>
          <label> Task
            <input type= "text" value = {value} onChange={handleChange}></input>
          </label>
          <span role = "alert" style={{color:"red"}}>{formValidation.task}</span>
        </div>
        <div>
          <label> Description
            <input type= "text" value = {description} onChange={handleDescriptionChange}></input>
          </label>
          <span role = "alert" style={{color:"red"}}>{formValidation.description}</span>
        </div>
        <button disabled={!isValid} type="submit">Agregar</button>
        </form>
      </Modal>
      
      <TaskList list={items} onDeleteTask={handleDeleteItem}/>
      <button onClick={handleDeleteAll}>Delete All</button>
    </div>
  );
}

export default App
