/**
 * @jest-environment jsdom
 */

import { screen } from "@testing-library/dom";
import LoadingPage from "../views/LoadingPage.js";

// Étant donné que je suis connecté à l'application (en tant qu'employé ou administrateur RH), j'ai besoin d'un accès à l'application
describe("Given I am connected on app (as an Employee or an HR admin)", () => {
  describe("When LoadingPage is called", () => {
    // Ensuite, il devrait rendre Loading
    test("Then, it should render Loading...", () => {
      const html = LoadingPage();
      document.body.innerHTML = html;
      expect(screen.getAllByText("Loading...")).toBeTruthy();
    });
  });
});
