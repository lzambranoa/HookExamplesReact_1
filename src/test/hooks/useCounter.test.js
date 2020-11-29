const { renderHook, act } = require("@testing-library/react-hooks");
const { useCounter } = require("../../hooks/useCounter")


describe('Pruebas de useCounter', () => {
    test('debe retornar valores por defecto', () => {

        const { result } = renderHook( () => useCounter() );

        expect(result.current.counter).toBe(10);
        expect(typeof result.current.increment).toBe('function');
        expect(typeof result.current.decrement).toBe('function');
        expect(typeof result.current.reset).toBe('function');
    });

    test('debe tener el counter en 100', () => {

        const { result } = renderHook( () => useCounter(100) );

        expect(result.current.counter).toBe(100);
    });

    test('debe incrementar en 1 el counter', () => {

        const { result } = renderHook( () => useCounter(100) );
        const { increment } = result.current;

        act( () => {
            increment();
        });

        const { counter } = result.current;
        expect( counter ).toBe(101);
    });
    test('debe decrementar en 1 el counter', () => {

        const { result } = renderHook( () => useCounter(100) );
        const { decrement } = result.current;

        act( () => {
            decrement();
        });

        const { counter } = result.current;
        expect( counter ).toBe(99);
    });
    test('debe resetar el counter a su valor por defecto', () => {

        const { result } = renderHook( () => useCounter(100) );
        const { increment, reset } = result.current;

        act( () => {
            increment();
            reset();
        });

        const { counter } = result.current;
        expect( counter ).toBe(100);
    });
})