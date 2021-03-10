import { Router } from 'express'
const agenceController = require('../controllers/agence.controller');

// créer un router
const router: Router = Router()

//renvoie la liste des agences
router.get('/agences', agenceController.getAgences)

export default router