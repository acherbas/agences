import { Response, Request } from 'express'
import agences from '../data/agence.model'

module.exports = {

    /**
     * Renvoie la liste des agences
     * @param req 
     * @param res 
     */
    getAgences:  async (req: Request, res: Response): Promise<void> => {
        res.status(200).json(agences)
    }

}
