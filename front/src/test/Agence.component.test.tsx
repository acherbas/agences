import React from 'react';
import Agence from '../components/Agence.component';
import { render } from "@testing-library/react";

// tester le container App
describe("<Agence />", () => {
  it("Renders <Agence /> component correctly", () => {
    const { getByText } = render(<Agence />);
    expect(getByText(/Liste des agences/i)).toBeInTheDocument();
  });
});


// describe("<Agence />", () => {
//   test("should display a blank Agence component", async () => {
//     const { findByTestId } = render(<Agence />);
//     const agenceCompoent = await findByTestId("agences-select");
//     const value = localStorage.getItem("ag") ? JSON.parse(localStorage.getItem("ag") as string).id : '0'
//     expect(agenceCompoent).toHaveFormValues({
//       value
//     });
//   });
// });