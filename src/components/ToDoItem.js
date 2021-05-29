import React, { useState } from "react";
function ToDoItem({text, onDelete, id, number}) {
    const [isDone, setIsDone] = useState(false);
    const onClick = () => {
        setIsDone(!isDone);
        setTimeout(() => onDelete(id), 600);
    }
    return (
        <div onClick={onClick}>
            <li className={isDone ? "list_item active": "list_item"}>{number}. {text}</li>
        </div>

    )
}

export default ToDoItem;