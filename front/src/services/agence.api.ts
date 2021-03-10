import axios from 'axios';

/**
 * le point d'entrée des appels de l'API des agences
 *
 * @class Agences
 */
class Agences {
    
  /**
   * revoie la liste des agences depuis l'api
   */
  static all() {
    return axios.get('http://localhost:4000/agences', {
        headers: {
          'Content-Type': 'application/json',
        },
        timeout: 5000,
      }).then(resp => resp.data);
  }
}

export default Agences;