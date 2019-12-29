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

### Initialisation d'Express

touch app.js

dans le fichier app.js

Création de la dépendance à l'api express

```
const express = require("express");
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
