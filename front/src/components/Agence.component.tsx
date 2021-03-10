import React from 'react';
import IAgence from '../models/agence.interface';
import './Agence.css';
import api from '../services/agence.api'

const defaultAgences: IAgence[] = [];
/**
 *
 *
 * @returns
 */
const App = () => {

  //tableau des données agences
  const [agences, setAgences]: [IAgence[], (agences: IAgence[]) => void] = React.useState(defaultAgences);
  //erreur lévé lors de l'appel de l'api
  const [error, setError]: [string, (error: string) => void] = React.useState('');
  //agence sélectionné
  const [selectValue, setSelectValue] = React.useState<string>(() => 
      localStorage.getItem("ag") ? 
      JSON.parse(localStorage.getItem("ag") as string).id //récupération de l'agence s'il existe dans localstorage
      : '0' 
  );

  React.useEffect(() => {
    //charger la liste des agnece depuis l'api
    api.all().then((response) => {
      setAgences(response);
    }).catch((ex) => {
        console.log(ex)
        setError('Une erreur est survenue lors de la connexion au backend');
    });
  });

  //mise à jour de l'agence sur la sélection d'un élément de la liste
  const handleChange = (val: string) => {
    //chercher l'agence concernée
    const agence = agences.find(ag => ag.id === val);
    // mise à jour de la sélection
    setSelectValue(val);
    //sauvegarde de l'agence dans localstorage
    localStorage.setItem('ag', JSON.stringify(agence));
  }

  return (
    <div>
      <h2>Liste des agences</h2>
      <div>
        <select 
        value={selectValue} 
        className="Agences" 
        onChange={(ev: React.ChangeEvent<HTMLSelectElement>,): void => handleChange(ev.target.value)}>
            <option value='0'>-</option>
          {agences.map((agence) => ( 
            <option key={agence.id} value={agence.id}>{agence.nom}</option>
          ))}
        </select>
      </div>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default App;