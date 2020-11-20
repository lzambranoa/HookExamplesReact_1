import React from 'react';

export const TodoListItem = ({todo, index, handleDelete, handleToogle}) => {
    return (
        <li
        key={todo.id}
        className="list-group-item"
    > <p 
        onClick={ () => handleToogle(todo.id) }
        className={`${todo.done && 'complete'}`} 
    >
        {index + 1}. {todo.desc}</p>
        <button
        onClick={() => handleDelete(todo.id)}
        className="btn btn-danger" >
            Borrar
</button>
    </li>
    )
}