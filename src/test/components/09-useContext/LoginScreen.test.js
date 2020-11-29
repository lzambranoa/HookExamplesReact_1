import React from 'react';
import { shallow } from 'enzyme';
import { LoginScreen } from '../../../components/09-useContext/LoginScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';



describe('Pruebas en <LoginScreen />', () => {

    const setUser = jest.fn()

    //wrapper  // mount
    const wrapper = shallow(
        <UserContext.Provider value={{
            setUser
        }}>
            <LoginScreen />
        </UserContext.Provider>
    )

    test('debe de mostrarse correctamente', () => {
        //snapshot
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de ejecutar el setUser con el argumento esperado', () => {

        // esta linea debe cambiarse el shallow por mount para poder acceder
        // las prop del button
        wrapper.find('button').prop('onClick')();

        expect( setUser ).toHaveBeenCalledWith({
            id: 123,
            name: "Leonardo",
        })
    });

});