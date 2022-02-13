/// <reference types="cypress" />

describe("End to end flow", () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit("http://localhost:3000");
  });

  const TOTAL_QUESTIONS = 3;

  it("checks the list of themes", () => {
    cy.get(`[data-testid="cardsContainer"]`)
      .find(`[data-testid="themeCard"]`)
      .should("have.length", 6);
  });

  it("test the whole flow with 100% of mistakes", () => {
    cy.get("button").should("not.exist");

    cy.get(`[data-testid="cardsContainer"]`)
      .find(`[data-testid="themeCard"]`)
      .click({ multiple: true });

    cy.get("button").should("have.text", "Start!").click();

    for (let i = 0; i < TOTAL_QUESTIONS; i++) {
      cy.get(`[data-testid="questionStatement"]`);
      cy.get(`[data-testid="selectBox"]`);

      cy.get(`[data-testid="questionSubmit"]`)
        .should("have.text", "Submit")
        .click();

      cy.get(`[data-testid="questionContinue"]`)
        .should("have.text", "Continue")
        .click();
    }

    cy.get("h2").should("have.text", `Your score was 0/${TOTAL_QUESTIONS}`);
  });
});
