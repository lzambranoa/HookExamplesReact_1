import React, { useEffect, useReducer } from 'react';
import './styles.css';
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';
import { todoReducer } from './todoReducer';



const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init);

   

    useEffect( () => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos]);

    const handleDelete = ( todoId ) => {
        console.log(todoId);

        //crear la action
        const action = {
            type: 'delete',
            payload: todoId
        }

        //dispatch
        dispatch(action);
    }

    const handleToogle = (todoId) => {


        dispatch({
            type: 'toogle',
            payload: todoId
        })
    }

    const handleAddTodo = (newTodo) => {
        dispatch({
            type: 'add',
            payload: newTodo
        });
    }



    return (
        <div>
            <h1>TodoApp ({todos.length}) </h1>
            <hr />

            <div className="row" >

                <div className="col-7" >
                    <TodoList 
                        todos={todos}
                        handleDelete={handleDelete}
                        handleToogle={handleToogle}
                    />
                </div>

                <div className="col-5" >
                   <TodoAdd 
                        handleAddTodo={handleAddTodo}
                   />
                </div>

            </div>



        </div>
    )
}