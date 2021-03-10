
import axios, { AxiosResponse } from "axios";
import api from '../services/agence.api';
import { mocked } from 'ts-jest/utils';

jest.mock("axios"); //This is needed to allow jest to modify axios at runtime

it("returns agences", async () => {
  //Arrange
  const axiosResponse: AxiosResponse = {
    data: [
        { "id": "1", "nom": "Agence AAA", "responsable": "Alain Dupond", "activite": "Electrique" },
        { "id": "2", "nom": "Agence BBB", "responsable": "Jean Daniel", "activite": "Electrique" }
    ],
    status: 200,
    statusText: "OK",
    config: {},
    headers: {}
  };

  //Mocking axios function rather than a method
  mocked(axios).mockResolvedValue(axiosResponse); 
  
  //Act
  const result = await axiosResponse

  //Assert
  expect(result).toBe([
    { "id": "1", "nom": "Agence AAA", "responsable": "Alain Dupond", "activite": "Electrique" },
    { "id": "2", "nom": "Agence BBB", "responsable": "Jean Daniel", "activite": "Electrique" }
    ])
});