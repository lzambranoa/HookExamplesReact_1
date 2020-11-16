import React, { useEffect, useState } from 'react';
import './effects.css';
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, SetFormState] = useState({
        name: '',
        email: '',
    });

    //Extraemos las propiedades para trabajar de forma más facil
    const { name, email } = formState;

    useEffect( () => {
        // console.log('Hey!');

    }, []);
    useEffect( () => {
        // console.log('formState cambio');
    }, [formState]);
    useEffect( () => {
        // console.log('Hey!');
    }, [email]);

    const handleInputChange = ({ target }) => {
        
        SetFormState({
            ...formState,
            [ target.name ]: target.value
        })
    }
    return (
        <>
            <h1>UseEffect</h1>
            <hr />

            <div className="form-group" >
                <input 
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Tu Nombre"
                    autoComplete="off"
                    value={ name }
                    onChange={ handleInputChange }
                />
            </div>
            <div className="form-group" >
                <input 
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="email@gmail.com"
                    autoComplete="off"
                    value={ email }
                    onChange={ handleInputChange }
                />
            </div>

            { (name === '123') && <Message />}

        </>
    )
}