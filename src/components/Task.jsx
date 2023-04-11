import { DeleteIcon } from "@chakra-ui/icons";
import { Button, IconButton } from "@chakra-ui/react";
import React, {useState} from "react";

export const Task = (props) =>{
    const {name, onDelete, taskDescrip, isTaskChecked, isCompleted} = props;

    const [isChecked, setIsChecked] = useState(isCompleted);

  function handleCheckboxChange() {
    setIsChecked(!isChecked);
    isTaskChecked(isChecked,name);
  }

  const handleDeleteItem= ()=>{
    onDelete(name);
  }


    return(
        <li>
        <article>
        <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange}/>
        <label htmlFor="myCheckbox" style={{textDecoration: isChecked ? "line-through" : ''}}> {name} </label>
        <label>{taskDescrip}</label>
          <IconButton onClick={handleDeleteItem} icon={<DeleteIcon/>} colorScheme="red" variant="outline" size={"sm"}>Delete</IconButton>
        </article>
      </li>
    )

}