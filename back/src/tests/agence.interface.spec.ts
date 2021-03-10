import IAgence from '../types/agence.interface';

it('has a name of "Agence AZERTY"', () => {
    const state: IAgence = { "id": "101", "nom": "Agence AZERTY", "responsable": "Alain Dupond", "activite": "Electrique" };
    expect(state.nom).toEqual('Agence AZERTY');
});

it('has an activity of "Electrique"', () => {
    const state: IAgence = { "id": "101", "nom": "Agence AZERTY", "responsable": "Alain Dupond", "activite": "Electrique" };
  expect(state.activite).toEqual('Electrique');
});