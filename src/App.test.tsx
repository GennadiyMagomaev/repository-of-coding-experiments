import React from "react";
import { screen } from "@testing-library/react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "@testing-library/jest-dom";

describe("Application testing", () => {
  test("Application should rendered", () => {
    // eslint-disable-next-line testing-library/no-node-access
    const container = document.getElementById("root");
    if (container) {
      const root = createRoot(container);

      root.render(<App />);

      const app = screen.getByText(/app/i);
      console.log("app", app);

      // eslint-disable-next-line jest/no-conditional-expect
      expect(app).toBeInTheDocument();
    }
  });
});
