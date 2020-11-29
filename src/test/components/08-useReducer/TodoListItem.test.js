import React from 'react';
import { demoTodos } from '../../fixtures/demoTodos';
const { shallow } = require("enzyme");
const { TodoListItem } = require("../../../components/08-useReducer/TodoListItem");


describe('Pruebas en el <TodolistItem />', () => {

    const handleDelete = jest.fn();
    const handleToogle = jest.fn();
    const index = 0;
    let wrapper;

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<TodoListItem 
            todo={demoTodos[0]}
            index={index}
            handleDelete={handleDelete}
            handleToogle={handleToogle}
        />)
    });

    test('Debe de mostrarse correctamente', () => {
        // snapshot
        expect(wrapper).toMatchSnapshot();
    });
    
    test('Debe de llamar a la función handleDelete', () => {
        // jest.fn()
        // toHaveBeenCalledWidth
        wrapper.find('button').simulate('click');
        expect( handleDelete ).toHaveBeenCalledWith( demoTodos[0].id );
    });

    test('Debe de llamar a la función handleToogle', () => {
        // jest.fn()
        // toHaveBeenCalledWidth
        wrapper.find('p').simulate('click');
        expect( handleToogle ).toHaveBeenCalledWith(demoTodos[0].id );
    });

    test('Debe mostrar el texto correctamente', () => {
        // contenido del parrafo
        const p = wrapper.find('p');
        expect(p.text().trim() ).toBe(`${index + 1}. ${demoTodos[0].desc}`)
    });


    test('Debe tener la clase complete si el TODO.done = true', () => {

        const todo = demoTodos[0];

        const wrapper = shallow(<TodoListItem 
            todo={todo}
            index={index}
            handleDelete={handleDelete}
            handleToogle={handleToogle}
        />);

        expect(wrapper.find('p').hasClass('complete') ).toBe(false);
    });
});