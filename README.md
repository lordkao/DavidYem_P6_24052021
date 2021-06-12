# DavidYem_P6_24052021
Bonjour et Bienvenue sur ce projet de création d'une API côté Backend pour l'application "Piquante" de So Pekocko.

Vous trouverez ici le code de l'API qui vous permettra de tester les différentes fonctionnalités de CRUD mis en place dans le cadre de ce projet.
L'utilisateur pourra créer un compte,se connecter,voir toutes les sauces créées par d'autres utilisateurs ainsi que les liker ou disliker,il pourra également créer sa/ses propres sauces,les modifier et les supprimer.

Pour faire fonctionner l'API, vous devait avoir une database sur mongoDb Atlas et aurez besoin d'installer:

-Node.js en version 14.16.1 ainsi que npm qui devrait s'installer automatiquement lorsque vous télécharger Node.js.(https://nodejs.org/en/download/releases/)<== lien Node.js

-Cloner le repository sur votre machine.(https://github.com/lordkao/DavidYem_6_24052021.git)<== lien pour cloner le repository

-les dépendances enregistrées dans le fichier 'package.json' en exécutant la commande 'npm install' dans votre terminal.

-il vous faudra également créer un fichier '.env' dans le dossier racine du projet afin d'y stocker les données sensibles.
Vous devez définir ces 5 variables d'envirronement(en remplaçant leurs valeurs par celles qui vous correspondent):
MONGO_USER= user mongodb à renseigner, 
MONGO_PASSWORD= mot de passe de votre user mongodb à renseigner, 
TOKEN_LOGIN='renseigner ici une phrase secrète pour le chiffrage du token', 
KEY_CRYPTOJS='renseigner une chaine de 32 caractères', 
IV_CRYPTOJS='renseigner une chaine de 32 caractères'

Enfin pour lancer l'API il vous faudra exécuter soit 'npm start' soit 'node server'.Cela devrait lancer le serveur de l'API en local sur le port 3000.



Pour faire fonctionner l'application 'Piquante' vous aurez besoin du Frontend:

Lien du Frontend: https://github.com/OpenClassrooms-Student-Center/dwj-projet6.git
Suivez les instructions présentes dans le 'readme' du repository Frontend.

Exécuter la commande 'ng serve' lancera le serveur du Frontend sur http://localhost:4200/, vous pourrez ensuite tester l'application.
