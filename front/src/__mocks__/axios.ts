export default {
    get: jest.fn().mockImplementation((url) => {
      switch (url) {
        case "https://localhost:4000/agences":
          return Promise.resolve({ data: [
            { "id": "1", "nom": "Agence AAA", "responsable": "Alain Dupond", "activite": "Electrique" },
            { "id": "2", "nom": "Agence BBB", "responsable": "Jean Christophe", "activite": "Climatisation" }
          ] });
        default:
          throw new Error(`UNMATCHED URL: ${url}`);
      }
    }),
  };