describe('Transferencias', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.fazerLoginComCredenciaisValidas()
    })
    
    it('Deve transferir quando informo dados e valor validos', () => {
        //Act
        cy.realizarTransferencias('João da Silva', 'Maria Oliveira', '11')
        //Assert
        cy.verificarMensagemNoToast('Transferência realizada!')
    })

    it('Deve apresentar erro quando tentar transferir mais que 5 mil sem o token', () => {
        //Act
        cy.realizarTransferencias('João da Silva', 'Maria Oliveira', '5000.01')
        //Assert
        cy.verificarMensagemNoToast('Autenticação necessária para transferências acima de R$5.000,00.')
    })
})