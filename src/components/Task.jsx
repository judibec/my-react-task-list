import React, {useState} from "react";

export const Task = (props) =>{
    const {name, onDelete} = props;

    const [isChecked, setIsChecked] = useState(false);

  function handleCheckboxChange() {
    setIsChecked(!isChecked);
  }

  const handleDeleteItem= ()=>{
    onDelete(name);
  }

    return(
        <li>
        <article>
        <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange}/>
        <label htmlFor="myCheckbox" style={{textDecoration: isChecked ? "line-through" : ''}}> {name} </label>
          <button onClick={handleDeleteItem}>Delete</button>
        </article>
      </li>
    )

}