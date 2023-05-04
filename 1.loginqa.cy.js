describe('1.1 Позитивный тест кейс на авторизацию', function () {

    it('Правильный логин и пароль', function () {
       cy.visit('https://login.qa.studio/');
       cy.get('#mail').type('german@dolnikov.ru');
       cy.get('#pass').type('iLoveqastudio1');
       cy.get('#loginButton').click();
       cy.contains('Авторизация прошла успешно').should('be.visible');
       cy.get('#exitMessageButton > .exitIcon').should('be.visible');

       })
})

describe('1.2 Логика восстановления пароля', function () {

    it('Забыл пароль, ввести Email', function () {
       cy.visit('https://login.qa.studio/');
       cy.get('#forgotEmailButton').click();
       cy.get('#mailForgot').type('german@dolnikov.ru');
       cy.get('#restoreEmailButton').click();
       cy.contains('Успешно отправили пароль на e-mail').should('be.visible');
       cy.get('#exitMessageButton > .exitIcon').should('be.visible');

       })
})

describe('1.3 Негативный тест-кейс авторизация', function () {

    it('Правильный логин, неправильный пароль', function () {
       cy.visit('https://login.qa.studio/');
       cy.get('#mail').type('german@dolnikov.ru');
       cy.get('#pass').type('iLoveqastudio2');
       cy.get('#loginButton').click();
       cy.contains('Такого логина или пароля нет').should('be.visible');
       cy.get('#exitMessageButton > .exitIcon').should('be.visible');

    })

})

describe('1.4 Негативный тест-кейс авторизация ', function () {

    it('Неравильный логин, правильный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikovv.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.contains('Такого логина или пароля нет').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');

    })
})

describe('1.5 Негативный тест-кейс валидации', function () {

    it('Логин без @, правильный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('germandolnikovv.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.contains('Нужно исправить проблему валидации').should('be.visible');
    })
})

describe('1.6 Строчные буквы в логине', function () {

    it('Логин с заглавными буквами', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('GerMan@Dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.contains('Авторизация прошла успешно').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');

    })
})