const {somaConjunto,Numprimo,fibonacci,mdc,contador,ordenar} = require('./calculos.js');

describe('Teste somaConjunto', () => {
    it('Esperado que some um array', () => {
        const array = [5,5,5]; 
        const soma = somaConjunto(array); 

       expect(soma).toBe(15); 
    }); 
    it('Esperado que não seja número', () => {
        const stringArray = ['5,5,5'];
        const soma = somaConjunto(stringArray); 

        expect(soma).not.toBeInstanceOf(Number); 
    });
});
describe('Teste Numprimo', () => {
    it('Esperado que resultado seja uma string', () => {
        const resultado = 'Não é primo ou é primo'; 
        const verificaResultado = Numprimo(resultado);
        
        expect(verificaResultado).not.toBeInstanceOf(Number); 
    });
});
describe('Teste fibonacci', () =>{
    it('Esperado que base seja número', () => {
        const base = 5;
        const verificaBase = fibonacci(base); 

        expect(verificaBase).not.toBeInstanceOf(String); 
    });
    it('Esperado que resultado seja um array', () => {
        const resultado = [1,2,3,4,5,6];
        const verificaResultado = fibonacci(resultado);

        expect.arrayContaining(verificaResultado);
    });
});
describe('Teste mdc', () => {
    it('Esperado que retorne o mdc entre a e b', () => {
        const a = 10; 
        const b = 15; 
        const resultado = mdc(a,b); 

        expect(resultado).toBe(5); 
    });
    it('Esperado que a e b sejam números', () => {
        const a = 10; 
        const b = 15; 
        const resultado = mdc(a,b);
        
        expect(resultado).not.toBeInstanceOf(String); 
    });
});
describe('Teste contador', () => {
    it('Esperado que conte números inteiros de num', () =>{
        const num = 10.7; 
        const count = contador(num); 

        expect(count).toBe(9); 
    });
    it('Esperado que num seja um número', () => {
        const num = 10;
        const verificaNum = contador(num); 

        expect(verificaNum).not.toBeInstanceOf(String); 
    });
});
describe('Teste ordenar', () => {
    it('Esperado que retorne um array', () => {
        const array = [1,2,3,4,5,6];
        const verificaArray = ordenar(array);

        expect.arrayContaining(verificaArray);
    });
}); 
