// ejercicio 9
// describe('test by yeison ochoa', () => {
//   it('passes', () => {
//     cy.visit('https://www.mercadolibre.com.co/')
//     cy.contains('Categorías')
//   })
// })

// ejercicio cypress
//9
// describe('test by yeison ochoa', () => {
//   it('deberia resolver la suma 10 + 20', () => {
//     cy.log(10 + 20)
//     cy.expect(10 + 20).to.equal(30)
//   })
// })

//10
// describe('test by yeison ochoa', () => {
//   it('deberia resolver la resta 10 - 20', () => {
//     cy.log(10 - 20)
//     cy.expect(10 - 20).to.equal(-10)
//   })
// })

//11
// describe('test by yeison ochoa', () => {
//   it('deberia resolver la division 10 / 20', () => {
//     cy.log(10 / 20)
//     cy.expect(10 / 20).to.equal(0.5)
//   })
// })

//12
// describe('test by yeison ochoa', () => {
//   it('deberia resolver la multiplicacion 10 * 20', () => {
//     cy.log(10 * 20)
//     cy.expect(10 * 20).to.equal(200)
//   })
// })

//13 uso de variables
// describe('test by yeison ochoa', () => {
//   it('deberia resolver la ecuacion x + 2 = 5', () => {
//     let x = 3;
//     cy.log(x + 2)
//     cy.expect(x+2).to.equal(5)
//   })
// })

// 14 operaciones con lista numericas
describe("test by yeison ochoa", () => {
    it("realizar operacion con listas numericas", () => {
        // lista de nuemeros
        const listaNumeros = [10, 5, 8, 12, 4];

        // calcular la suma de los numeros en la lista
        let suma = 0;
        for(let numero of listaNumeros) {
            suma += numero;
        }

        // calcular el producto de los numero de la lista
        let producto = 1;
        for(let numero of listaNumeros) {
            producto *= numero;
        }

        // calcular el promedio de los numero de la lista
        let promedio = suma / listaNumeros.length;

        // calcular el numero minimo y maximo de la lista de nuemros

        let minimo = Math.min(...listaNumeros);
        let maximo = Math.max(...listaNumeros);

        // mostrar los resultados en la consola de cypress
        cy.log(`lista de numeros: ${listaNumeros}`);
        cy.log(`Suma: ${suma}`);
        cy.log(`producto: ${producto}`);
        cy.log(`promedio: ${promedio}`);
        cy.log(`minimo: ${minimo}`);
        cy.log(`maximo: ${maximo}`);

        // verificar los resultados usando las acerciones de cypress
        cy.wrap(suma).should('eq',39);
        cy.wrap(producto).should('eq',19200);
        cy.wrap(promedio).should('eq',7.8);
        cy.wrap(minimo).should('eq',4);
        cy.wrap(maximo).should('eq',12);
    });
});