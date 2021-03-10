import express, { Express } from 'express';
import * as bodyParser from "body-parser";
import routes from './routes/agence.routes';
const cors = require('cors');

// créer un objet de type Express.
const app: Express = express();

//définir le port
const PORT: string | number = process.env.PORT || 4000

// parse des requêtes de type application/json
app.use(cors());

// parse des requêtes de type application/json
app.use(bodyParser.json());

// parse des requêtes de type application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// définir les routes
app.use(routes)

// démarrer le serveur
app.listen(PORT, () =>
    console.log(`Serveur démarré sur le port http://localhost:${PORT}`)
)