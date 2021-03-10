import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import axios, { AxiosResponse } from 'axios';

jest.mock('axios');

// Our mocked response
const axiosResponse: AxiosResponse = {
  data: [
    { "id": "1", "nom": "Agence AAA", "responsable": "Alain Dupond", "activite": "Electrique" },
    { "id": "2", "nom": "Agence BBB", "responsable": "Jean Daniel", "activite": "Electrique" }
  ],
  status: 200,
  statusText: 'OK',
  config: {},
  headers: {},
};

// axios mocked
export default {
  // Typescript requires a 'default'
  default: {
    get: jest.fn().mockImplementation(() => Promise.resolve(axiosResponse)),
  },
  get: jest.fn(() => Promise.resolve(axiosResponse)),
};

//tester si
test("display agences results", async () => {
  //get data
  axios.get();
  //tester si appelé
  expect(axios.get).toHaveBeenCalled();
});


// it("returns agences list", async () => {
//   //Arrange
//   const axiosResponse: AxiosResponse = {
//     data: [
//         { "id": "1", "nom": "Agence AAA", "responsable": "Alain Dupond", "activite": "Electrique" },
//         { "id": "2", "nom": "Agence BBB", "responsable": "Jean Daniel", "activite": "Electrique" }
//     ],
//     status: 200,
//     statusText: "OK",
//     config: {},
//     headers: {}
//   };

//   //Mocking axios function rather than a method
//   mocked(axios).mockResolvedValue(axiosResponse); 
  
//   //Act
//   const result = await axiosResponse

//   //Assert
//   expect(result).toBe([
//     { "id": "1", "nom": "Agence AAA", "responsable": "Alain Dupond", "activite": "Electrique" },
//     { "id": "2", "nom": "Agence BBB", "responsable": "Jean Daniel", "activite": "Electrique" }
//     ])
// });