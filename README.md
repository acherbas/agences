# Gestion des agences

Notre projet est constitué d’une application web pour récupérer une liste d'agences sous forme de combbox. Le choix est persisté coté front (application web React) via localstorage. Chaque agence comporte son nom, le nom de son responsable, et son activité ( Electrique, climatisation ou plomberie).

Cette application est composée de deux parties à savoir
- d'une API backend en mode Rest (back): Ce microservice node fourni une route /agences qui renvoie la liste des agences.
- d'une application web (front) : cette application permet d'afficher la liste des agnces. Si l'utilisateur sélectionne une agence, son choix est persisté via localstorage. Quand l'utilisateur affiche l'application, l'agence sauvegardée auparavant est sélectionné dans le combobox.
