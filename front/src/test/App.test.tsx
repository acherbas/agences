import React from 'react';
import App from '../App';
import { render } from "@testing-library/react";

// tester le container App
describe("<App />", () => {
  it("Renders <App /> correctly", () => {
    const { getByText } = render(<App />);
    expect(getByText(/Liste des agences/i)).toBeInTheDocument();
  });
});