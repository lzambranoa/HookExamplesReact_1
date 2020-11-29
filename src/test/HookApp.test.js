import React from 'react';

import { HookApp } from '../HookApp';
import { shallow } from 'enzyme';


describe('Pruebas de <HookApp />', () => {

    test('Debe mostrar correctamente el componente', () => {


        const wrapper = shallow( <HookApp />);
        expect( wrapper ).toMatchSnapshot();
    })
})