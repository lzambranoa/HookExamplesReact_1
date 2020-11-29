import React from 'react';
import { shallow, mount } from 'enzyme';
import { TodoApp } from '../../../components/08-useReducer/TodoApp';
import { demoTodos } from '../../fixtures/demoTodos';
import { act } from '@testing-library/react';

describe('Pruebas en el TodoApp', () => {

    const wrapper = shallow( <TodoApp />);

    // validar que el localStorage funciona
    Storage.prototype.setItem = jest.fn();

    test('Debe de mostrarse correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('Debe de agregar un TODO', () => {

        // El mount no esta pasando en esta prueba debido a la versión de React
        const wrapper = mount( <TodoApp /> );

        act(() => {
            wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[0]);
            wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[1]);
        });

        expect( wrapper.find('h1').text().trim() ).toBe('TodoApp (2)');
        expect( localStorage.setItem ).toHaveBeenCalledTimes(2);
    });

    test('Debe de eliminar un Todo', () => {

        wrapper.find('TodoAdd').prop('handleAddTodo')( demoTodos[0] );
        wrapper.find('TodoList').prop('handleDelete')( demoTodos[0].id );

        expect( wrapper.find('h1').text().trim() ).toBe('TodoApp (0)');
    })

});