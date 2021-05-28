import React, { useState } from "react";
import './todoitem.css';
function ToDoItem({text, onDelete, id}) {
    const [isDone, setIsDone] = useState(false);
    const onClick = () => {
        setIsDone(!isDone);
        setTimeout(() => onDelete(id), 600);
    }
    return (
        <div onClick={onClick}>
            <li className={isDone ? "list_item active": "list_item"}>{text}</li>
        </div>

    )
}

export default ToDoItem;