import React from 'react';
import { mount } from 'enzyme';
import { AppRouter } from '../../../components/09-useContext/AppRouter';
import { UserContext } from '../../../components/09-useContext/UserContext';


describe('Pruebas en <AppRouter />', () => {
    
    const user = {
        id: 1,
        name: 'Fernando'
    }

    // para que el mount compile debera trabajar desde el React 16
    const wrapper = mount( 
        <UserContext.Provider value={{
            user
        }}>
            <AppRouter /> 
        </UserContext.Provider>
    );


    test('debe de mostrarse correctamente', () => {

        expect( wrapper ).toMatchSnapshot();
        
    })
    

})

