// <reference types="cypress"/>
describe('Open website and making an order', () => {
    it('Visit a Link', () => {
      cy.visit("https://www.lycheeegypt.com/shop/");
  
      cy.get('.add_to_cart_button').first().click();
      cy.get('[type="submit"]').should('be.visible').click({ multiple: true, force: true });
      cy.visit("https://www.lycheeegypt.com/checkout/?lang=en");
      cy.get('#billing_first_name').should('be.visible').type('Mitch');
      cy.get('#billing_last_name').should('be.visible').type('Design Test');
      cy.get('#billing_email').should('be.visible').type('mitchdesignstest@gmail.com');
      cy.get('#billing_phone').should('be.visible').type('01111121314');
  
      const cities = [
        'Gouna',
        'Maadi',
        //'Zamalek/Giza',
        'New Cairo / El Rehab',
        'Nasr City / Masr El Gdeda',
        'October'
      ]; // Add more cities as needed
  
      const areas = [
        ['El Gouna'], // Areas for Gouna
        ['El Maadi', 'Zahraa El Maadi'], // Areas for Maadi
       // ['Giza', 'West El Balad', 'Dokki', 'El Manial'], // Areas for Zamalek / Giza
        ['1st Settlement', '3rd Settlement', '5th Settlement', 'El Rehab City'], // Areas for New Cairo / El Rehab
        ['Masr El Gdeda', 'Nasr City', 'Zahraa Madinet Nasr', 'Ard El Golf'], // Areas for Nasr City / Masr El Gdeda
        ['6th of October', 'Elsheikh Zayed'], // Areas for October
      ];
  
      const cityIndex = Math.floor(Math.random() * cities.length);
      const selectedCity = cities[cityIndex];
  
      const selectedAreas = areas[cityIndex];
      const areaIndex = Math.floor(Math.random() * selectedAreas.length);
      const selectedArea = selectedAreas[areaIndex];
      cy.wait(1000);
      //cy.get('[name="billing_state"]').select(selectedCity);
      cy.wait(2000);
      cy.get('[name="billing_state"]').select(selectedCity);
      cy.get('[name="billing_city"]').select(selectedArea, { force: true });
      cy.get('[name="billing_city"]').should('have.value', selectedArea);
      //cy.get('[name="billing_city"]').select(selectedArea);
      //cy.get('[name="billing_city"]').click().select(selectedArea);
      cy.get('[name="billing_address_1"]').type('Testing');
      cy.get('[name="billing_building"]').type('1');
      cy.get('[name="billing_address_2"]').type('1')
      cy.get('[id="payment_method_cod"]').check({force:true});
      cy.get('[id="terms"]').check({force:true});
      cy.get('[id="place_order"]').click();
    });
  });
  
      
    

