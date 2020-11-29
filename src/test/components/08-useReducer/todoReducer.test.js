import { todoReducer } from "../../../components/08-useReducer/todoReducer";
import { demoTodos } from "../../fixtures/demoTodos";



describe('Pruebas en el todoReducer', () => {

   test('Debe de retorna el estado por defecto', () => {

    const state = todoReducer(demoTodos, {});

    expect( state ).toEqual( demoTodos );
   }); 

   test('Debe agregar un TODO', () => {

    const newTodo = {
        id: 3,
        desc: 'Comprar pan',
        done: false
    }

    const action = {
        type: 'add',
        payload: newTodo
    }

     const state = todoReducer(demoTodos, action);
    expect( state.length ).toBe(3);
    expect( state ).toEqual([...demoTodos, newTodo ]);
   }); 

   test('Debe de borrar un TODO', () => {
    // action.payload = ID del TODO
    
    const action = {
        type: 'delete',
        payload: 1
    }

    const state = todoReducer(demoTodos, action);
    expect( state ).toEqual([demoTodos[1]]);

   });

   test('Debe de hacer el TOOGLE del TODO', () => {
    // action.payload = true a false

    const action = {
        type: 'toogle',
        payload: 1
    }

    const state = todoReducer(demoTodos, action);

    expect( state[0].done ).toBe(true);
    expect( state[1] ).toEqual( demoTodos[1] );

   });
});