# Todo-list avec NodeJS-Express Postgresql and vue.

Grâce à ces tutos.
https://scotch.io/tutorials/getting-started-with-node-express-and-postgres-using-sequelize
https://blog.jscrambler.com/build-a-task-management-app-using-vue-js-and-a-node-js-backend/
https://github.com/HachemiH/todo-vue-post-to-postgres

## Initialisation du projet.

mkdir postgres-express-node-todolist
`git init` qui initialise le versionning

Créatio de 2 dossiers pour séparer le front du back.

```
cd postgres-express-node-todolist
mkdir back-end front-end
```

## Initialisation du back.

### installation de node.js dans le dossier back.

```
cd back-end
npm init -y
```

le fichier package.json est alors créé.

### Installation d'Express

```
touch .gitignore
code .gitignore
```

fichier qui permet de ne pas intégrer les fichiers node_modules dans les commits.

Dans le fichier copier :
`node_modules/` qui sera alors ignoré par git.

puis `npm i -S express body-parser`
**i** pour **install**
**-S** - pour **--Save** cad sauvegarder express et body-parser dans les dépendances de package.json.
**body-parser** pour analyser et utiliser les paramètres du frontend dans le backend.

### Initialisation d'Express et middleware Morgan & body-parser.

touch app.js

dans le fichier app.js

Création de la dépendance à l'api express

```
const express = require("express");
const logger = require("morgan");
const bodyParser = require('body-parser');
```

Mise en action des modules express à l'appel de l'url.

```
const app = express();
const port = 4000;

// Log requests to the console.
app.use(logger('dev'));

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Setup a default catch-all route that sends back a welcome message in JSON format.
app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to the beginning of nothingness.',
}));

app.listen(port);
```

**Morgan** est un autre middleware d'enregistreur de requêtes HTTP pour Node.js, comme journal de bord automatisé.

### Lancer le serveur à chaque changement avec Nodemon.

créer un dossier **bin** et dans celui-ci un fichier **www.js**

dans app.js supprimer `const port = 4000;` et `app.listen(port);` qui seront maintenant dans bin.
dans app.js ajouter l'export `module.exports = app;`

dans le fichier www.js ajouter le code :

```
// This will be our application entry. We'll setup our server here.
const http = require("http");
const app = require("./app"); // The express app we just created

const port = parseInt(process.env.PORT, 10) || 4000;
app.set("port", port);

const server = http.createServer(app);
server.listen(port);
```

Puis installer Nodemon `npm i -D nodemon`
et

dans package.json

```
"scripts": {
    "start:dev": "nodemon ./bin/www",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```

et exécuter avec la commande `npm run start:dev`.

## Sequelize.

Node.js **Object Relational Mapping** pour notre base de donnée _postgreSQL_.

Installer **Sequelize** `npm install -g sequelize-cli`.
Créer un fichier `.sequelizerc`

dans le fichier, indiquer les chemins

```
const path = require('path');

module.exports = {
  "config": path.resolve('./config', 'config.json'),
  "models-path": path.resolve('./models'),
  "seeders-path": path.resolve('./seeders'),
  "migrations-path": path.resolve('./migrations')
};
```

Le fichier **config.json** contiendra les paramètres de configuration d'application,
le dossier **migrations** pour les migrations de notre application,
le dossier **models** pour les modèles d'application,
le dossier **seeders** pour généralement des données de départ.

puis exécuter sequelize `npm install --save sequelize pg pg-hstore` et `sequelize init`.
Les dossiers et fichier sont alors créés.
