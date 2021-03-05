describe('Read write file demo', function(){
    beforeEach(function(){
        cy.fixture('example.json').as('data')
    })


it('read file ', function(){
cy.fixture('example.json').its('name').should('eq','cypress')
cy.log(this.data.name)
cy.log(this.data.email)

})

it('Read file using ReadFFile cmd', function(){

    cy.readFile('./cypress/fixtures/example.json').its('name').should('eq','cypress')
})

it('Write file demo', function(){
    cy.writeFile('sample.txt', 'Hello i am learning cypress')
    cy.writeFile('sample.txt', '\n learn cypress',{flag: 'a+'})
})
})