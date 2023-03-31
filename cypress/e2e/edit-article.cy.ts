it('Edit article', () => {
  cy.visit('/login');
  let articleTitle = "TestEdited";
  cy.url().should('include', '/login');
  cy.get('.form.nickname input').clear().type('admin');
  cy.get('.form.password input').clear().type('admincool');
  cy.get('.content .enter').click();
  cy.url().should('not.include', 'login');
  cy.url().should('include', '/');
  cy.get('poly-card:nth-child(2) article > a').click();
  cy.get('a.more').click();
  cy.url().should('include', '/upload');
  cy.get('.form div:first-child .select .block:nth-child(1)').click();
  cy.get('.form div:nth-child(2) .select .block:nth-child(1)').click();
  cy.get('.name-input').clear().type(articleTitle);
  let preview = (Math.random() + 1).toString(36).substring(7);
  let text = (Math.random() + 1).toString(36).substring(7);
  let firstTag = (Math.random() + 1).toString(36).substring(7);
  let secondTag = (Math.random() + 1).toString(36).substring(7);
  let tags = firstTag + "," + secondTag;
  cy.get('.preview-input').clear().type(preview);
  cy.get('.text-input').clear().type(text);
  cy.get('.tags-input').clear().type(tags);
  cy.get('.content > button').click();
  cy.url().should('not.include', '/upload');
});