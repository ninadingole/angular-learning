
describe('First test', () => {
  let todoItem: Cypress.Chainable<JQuery<HTMLElement>>;
  beforeEach(() => {
    cy.visit('/');
    cy.get('#todoInput').type('Make Tea');
    cy.get('button').click();
    cy.get('.todo-list').find('app-todo-item').should('have.length', 4);
    todoItem = cy.get('.todo-list').find('.todo-item').last();
  });

  it('should be able to add a new todo', () => {
    todoItem.should('have.text', 'Make Tea');
  });

  it('should mark todo complete', () => {
    todoItem.should('have.text', 'Make Tea');
    todoItem.click();
    todoItem.should('have.class', 'completed');
  });

  it('should delete a todo', () => {
    cy.get('.delete-todo').last().click();
    cy.get('.delete-todo').should('have.length', 3);
  });
});
