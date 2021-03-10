jest.mock('../models/agence.interface.ts');

// tester l'interface Agence
describe('Agence', (): void => {
  it('Should return a mocked agence))', (): void => {
    const agence = {
        id: 'Mocked id',
        nom: 'Mocked nom',
        responsable: 'Mocked responsable',
        activite: 'Mocked activite',
     }
    expect(agence.id).toEqual('Mocked id');
    expect(agence.nom).toEqual('Mocked nom');
  });
});