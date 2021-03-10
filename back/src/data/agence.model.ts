import Agence from '../types/agence.interface'

// Chaque donnée "agence" doit comporter:
//  son nom, 
//  nom de son responsable, 
//  son activité ( Electrique, climatisation ou plomberie).
const agences: Agence[] = [
    { "id": "1", "nom": "Agence AAA", "responsable": "Alain Dupond", "activite": "Electrique" },
    { "id": "2", "nom": "Agence BBB", "responsable": "Jean Christophe", "activite": "Climatisation" },
    { "id": "3", "nom": "Agence CCC", "responsable": "Daniel Pardo", "activite": "Plomberie" },
    { "id": "4", "nom": "Agence DDD", "responsable": "Renald Pageot", "activite": "Climatisation" },
    { "id": "5", "nom": "Agence EEE", "responsable": "Pierre Sargon", "activite": "Plomberie" },
];

export default agences;