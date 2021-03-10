import React from 'react';
import Agence from '../components/Agence.component';
import { render } from '@testing-library/react';

// tester le container App
describe("<App />", () => {
  it("Renders <Agence /> component correctly", () => {
    const { getByText } = render(<Agence />);
    expect(getByText(/Liste des agences/i)).toBeInTheDocument();
  });
});