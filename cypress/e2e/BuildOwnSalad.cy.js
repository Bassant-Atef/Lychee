// <reference types="cypress"/>
describe('Bulid your own salad', () => {

    it('Visit a Link', () => {

      cy.visit("https://www.lycheeegypt.com/salad/");
      cy.get('[id="shipping_method_delivery"]').check({force: true});
      cy.contains('Choose Area').click();
      cy.get('[class="popup__window"]').should('be.visible');
      cy.get('[value="Maadi"]').check({force : true});
      cy.wait(200);
      cy.get('[id="billing_city"]').select('El Maadi');
      cy.get('[class="btn js-popup-closer choose-btn"]').click({force: true , multiple: true });
      cy.get('[class="salad-cart-total-next-btn CanGoNext CanGoNext2"]').click({force: true , multiple: true });
      cy.get('[class="salad-cart-total-next-btn CanGoNext CanGoNext2"]').click({force: true , multiple:true});
      cy.get('[class="salad-cart-total-next-btn CanGoNext CanGoNext2"]').click({force: true , multiple:true});
      cy.get('[class="salad-cart-total-next-btn CanGoNext CanGoNext2"]').click({force: true , multiple:true});
      cy.get('[class="salad-cart-total-next-btn CanGoNext CanGoNext2"]').click({force: true , multiple:true});
      cy.get('[class="salad-cart-total-next-btn CanGoNext CanGoNext2"]').click({force: true , multiple:true});
      cy.get('[class="salad-cart-total-next-btn CanGoNext CanGoNext2"]').click({force: true , multiple:true});
      cy.get('[class="salad-cart-total-next-btn CanGoNext CanGoNext2"]').click({force: true , multiple:true});
      cy.get('[class="salad-cart-total-next-btn CanGoNext CanGoNext2 show-review"]').click({force: true , multiple:true});
      cy.get('[class=" express_checkout  btn add_salad_to_cart"]').click({force: true , multiple:true});
  
    });
  });
  
      
    

