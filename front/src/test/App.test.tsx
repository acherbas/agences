import React from 'react';
import App from '../App';
import { render } from '@testing-library/react';

describe("<App />", () => {
  it("Renders <App /> component correctly", () => {
    const { getByText } = render(<App />);
    expect(getByText(/Gestion des agences/i)).toBeInTheDocument();
  });
});