import Header from "./components/Header"
import { TaskList } from "./components/TaskList";
import React, {useState} from "react";


function App() {
  const [items, setItems] = useState([]);
  const [value, setValue] = useState('');
  
  function handleChange(event) {
    setValue(event.target.value);
  }

  function handleSubmit(event){
    event.preventDefault();
    setItems([...items, { name: value}]);
    setValue('')
  }

  function handleDeleteAll(){
    setItems([]);
  }

  function handleDeleteItem(itemToDelete){
    const newList = items.filter(item => item.name !== itemToDelete);
    setItems(newList)
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
