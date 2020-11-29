import { shallow } from 'enzyme';
import React from 'react';
import { TodoList } from '../../../components/08-useReducer/TodoList';
import { demoTodos } from '../../fixtures/demoTodos';

describe('Pruebas en el TodList', () => {

    const handleDelete = jest.fn();
    const handleToogle = jest.fn();

    const wrapper = shallow(
        <TodoList
            todos={demoTodos}
            handleDelet={handleDelete}
            handleToogle={handleToogle}
        />
    )

    test('Debe de mostrarse corectamente', () => {

        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de tener dos <TodoListItem />', () => {

        expect(wrapper.find('TodoListItem').length ).toBe( demoTodos.length );

        
    });
    test('la propiedad handleToogle debe ser una funcion', () => {

        expect( wrapper.find('TodoListItem').at(0).prop('handleToogle') ).toEqual( expect.any(Function) );
    });
})