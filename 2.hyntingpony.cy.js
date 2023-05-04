describe('Автотест для Hynting Pony', function () {

    it('Оформление заказа', function () {
       cy.visit('https://huntingpony.com/');
       cy.get('[data-index="4"] > .header__collections-controls > .header__collections-link').click();
       cy.get('[data-product-id="340983579"] > .product-preview__content > .product-preview__area-photo > .product-preview__photo > .img-ratio > .img-ratio__inner > a > :nth-child(1) > .product-preview__img-1').click();
       cy.get('.add-cart-counter__btn-label').click();
       cy.get('[data-add-cart-counter-plus=""]').click({force: true})
       cy.get('.header__cart').click();
       cy.get('.cart-controls > .button').click();
       
       })
})