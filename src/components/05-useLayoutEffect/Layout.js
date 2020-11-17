import React, { useLayoutEffect, useRef, useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import './layout.css';

export const Layout = () => {

    const { counter, increment } = useCounter(1);

    const {  data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

    const { quote } = !!data && data[0]; // si existe la data extraer la posición 0 de la data

    const pTag = useRef();
    const [boxSize, setBoxSize] = useState({});

    useLayoutEffect(() => {
        setBoxSize(pTag.current.getBoundingClientRect());
    }, [quote])
    console.log( quote);


    return (
        <div className="container" >
            <h1 className="text-center" >Layout Effect</h1>
            <hr />


            <blockquote className="blockquote text-right" >
                <p 
                ref={pTag}
                className="mb-0" 
                >
                    {quote}
                </p>
            
            </blockquote>

            <pre>
                { JSON.stringify(boxSize, null, 3)}
            </pre>


            <button
                onClick={increment}
                className="btn btn-primary" >
                Siguiente quote
            </button>


        </div>
    )
}