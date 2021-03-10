import React from 'react';
import IAgence from '../models/agence.interface';
import './Agence.css';
import api from '../services/agence.api'

//l'ensemble des agences par défaut
const defaultAgences: IAgence[] = [];

/**
 * le composant Agence contenant le combobox des agences
 */
const Agence: React.FunctionComponent = () => {

  //tableau des données agences
  const [agences, setAgences]: [IAgence[], (agences: IAgence[]) => void] = React.useState(defaultAgences);
  //agence sélectionné
  const [selectValue, setSelectValue] = React.useState<string>(() => 
      localStorage.getItem("ag") ? 
      JSON.parse(localStorage.getItem("ag") as string).id //récupération de l'agence s'il existe dans localstorage
      : '0' 
  );

  //charger la liste des agnece depuis l'api
  const getAgences = React.useCallback(async () => {
     //appel du service api
    const response = await api.all();
    //mise à jour la liste des agences
    setAgences(response);
  },[])

  React.useEffect(() => {
    //récuérer la liste des agences
    getAgences()
  }, [getAgences])

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
    <div data-testid="agences-select">
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
    </div>
  );
};

export default Agence;