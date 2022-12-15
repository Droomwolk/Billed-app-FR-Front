/**
 * @jest-environment jsdom
 */

import { screen } from "@testing-library/dom";
import ErrorPage from "../views/ErrorPage.js";

//  Étant donné que je suis connecté à l'application (en tant qu'employé ou administrateur RH), j'ai besoin d'un accès à l'application
describe("Given I am connected on app (as an Employee or an HR admin)", () => {
  // Lorsque ErrorPage est appelé sans erreur dans sa signature
  describe("When ErrorPage is called without and error in its signature", () => {
    // Ensuite, il devrait rendre ErrorPage sans message d'erreur
    test("Then, it should render ErrorPage with no error message", () => {
      const html = ErrorPage();
      document.body.innerHTML = html;
      expect(screen.getAllByText("Erreur")).toBeTruthy();
      expect(screen.getByTestId("error-message").innerHTML.trim().length).toBe(
        0
      );
    });
  });
  // Lorsque ErrorPage est appelé avec un message d'erreur dans sa signature
  describe("When ErrorPage is called with error message in its signature", () => {
    // Ensuite, il doit rendre ErrorPage avec son message d'erreur
    test("Then, it should render ErrorPage with its error message", () => {
      const error = "Erreur de connexion internet";
      const html = ErrorPage(error);
      document.body.innerHTML = html;
      expect(screen.getAllByText(error)).toBeTruthy();
    });
  });
});
