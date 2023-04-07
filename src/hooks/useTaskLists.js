import { useEffect, useState } from "react"

export function useTaskList(){
    const [completed, setCompleted] = useState([]);

    function addCompleted(boolean, nameTask) {
        let newCompleted = [...completed]

        if(!completed.includes(nameTask) && !boolean){
            newCompleted = [...newCompleted,nameTask]
        }else{
            newCompleted = newCompleted.filter(task => nameTask != task)
        }

        setCompleted(newCompleted)
        localStorage.setItem('completed',JSON.stringify(newCompleted));
    }

    useEffect(()=>{
        const localStorageData = localStorage.getItem('completed');
        const storedCompleted = JSON.parse(localStorageData);
        if(storedCompleted!=null){
            setCompleted(storedCompleted)
        }
    },[])

    return [completed, addCompleted]
}
export function useCreateTask(){
    const [items, setItems] = useState([]);
    const [value, setValue] = useState('');

    function addItems(value){
    // event.preventDefault();
    let tasks = [...items]
    if(!tasks.includes(value)){
      tasks = [...tasks,{ name: value}]
      setValue(event.target.value)
    }
    setItems(tasks)
    localStorage.setItem('tasks',JSON.stringify(tasks));
  }

   function deleteItem(itemToDelete){
    const newList = items.filter(item => item.name !== itemToDelete);
    localStorage.setItem('tasks',JSON.stringify(newList))
    setItems(newList)
  }

  function deleteAll(){
    setItems([]);
  }

    useEffect(()=>{
        const localStorageTasks = localStorage.getItem('tasks');
        const storedTasks = JSON.parse(localStorageTasks);
        if(storedTasks!==null){
        setItems(storedTasks)
        }
    },[])
    return [items, addItems, deleteItem, deleteAll]
}

// export function useValue(){
//     const [value, setValue] = useState('');

// }