const { renderHook, act } = require("@testing-library/react-hooks");
const { useForm } = require("../../hooks/useForm");


describe('Pruebas en useForm', () => {

    const initialForm = {
        name: 'Leonardo',
        email: 'leonardo@gmail.com'
    };

    test('Debe regresar un formulario por defecto', () => {
        const { result } = renderHook( () => useForm(initialForm) );
        const [values, handleInputChange, reset ] = result.current;

        expect(values).toEqual(initialForm);
        expect(typeof handleInputChange).toBe('function');
        expect(typeof reset).toBe('function');
    });

    test('Debe cambiar el valor del formulario (cambiar name)', () => {
        const { result } = renderHook( () => useForm(initialForm) );
        const [, handleInputChange ] = result.current;

        act(() => {
            handleInputChange({
                target: {
                    name: 'name',
                    value: 'Lizeth'
                }
            });
            
        });
        
        const [ values ] = result.current;
        expect( values ).toEqual({...initialForm, name: 'Lizeth'});

    });

    test('Debe de re-establecer el formulario con RESET', () => {
        const { result } = renderHook( () => useForm(initialForm) );
        const [, handleInputChange, reset ] = result.current;

        act(() => {
            handleInputChange({
                target: {
                    name: 'name',
                    value: 'Lizeth'
                }
            });
        reset();
        });
        
        const [ values ] = result.current;
        expect( values ).toEqual(initialForm);
        
});

});