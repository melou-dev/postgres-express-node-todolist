# Todo-list avec NodeJS-Express Postgresql and vue.

Grâce à ces tutos.
https://scotch.io/tutorials/getting-started-with-node-express-and-postgres-using-sequelize
https://scotch.io/tutorials/build-a-to-do-app-with-vue-js-2
https://blog.jscrambler.com/build-a-task-management-app-using-vue-js-and-a-node-js-backend/
https://github.com/HachemiH/todo-vue-post-to-postgres

Merci jmuturi, LaminEvra et Hachemi my coach.

## Initialisation du projet.

mkdir postgres-express-node-todolist
`git init` qui initialise le versionning

Création de 2 dossiers pour séparer le front du back.

```
cd postgres-express-node-todolist
mkdir back-end front-end
```

## Initialisation du back.

```
cd postgres-express-node-todolist
mkdir back-end
```

### installation de node.js dans le dossier back.

```
cd back-end
npm init -y
```

le fichier package.json est alors créé.

### Installation d'Express

puis `npm i -S express body-parser`
**i** pour **install**
**-S** - pour **--Save** cad sauvegarder express et body-parser dans les dépendances de package.json.
**body-parser** pour analyser et utiliser les paramètres du frontend dans le backend.

## Initialisation du front

https://medium.com/@kozyreva.hanna/vue-project-with-vue-cli3-eslint-prettier-in-vs-code-1e59d686eb93

S'assurer qu'on a installé Vue CLI3

Sinon
```
# delete old vue-cli
npm uninstall vue-cli -g
# install vue-cli3
npm install -g @vue/cli
```

Créer dossier front en utilisant le modèle vue "webpack"
`vue create front-end`

puis choisir
> Manually select feature
> Babel - Lint/Formatter - Router
> ESLint + prettier
> Lint on save
> in Package.json
> No pour sauvegarder cette configuration

configurer puis
`cd front-end`
`npm run server`

Lancer l'application sur le navigateur.
"  App running at:
  - Local:   http://localhost:8080/ 
  - Network: http://10.59.94.97:8080/
"
ouvrir un autre terminal.

## .gitignore

Dans le projet au même niveau que le dossier front-end et back

```

touch .gitignore
code .gitignore

```

fichier qui permet de ne pas intégrer les fichiers node_modules dans les commits.

Dans le fichier ajouter, vérifier la liste suivante :

```

node_modules/

.DS_Store
/dist/
npm-debug.log*
yarn-debug.log*
yarn-error.log\*
/test/unit/coverage/
package-lock.json

# Editor directories and files

.idea
.vscode
_.suo
_.ntvs\*
_.njsproj
_.sln

```

`node_modules/` qui sera alors ignoré par git.

## LE BACK-------------------------------------------------------------------------------------

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
app.get('\*', (req, res) => res.status(200).send({
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

et exécuter avec la commande `npm run start:dev`. comme dans le script de package.json.

## Sequelize.

Appelé **sequelize** nous l'installons en tant que Node.js **Object Relational Mapping** (ORM) pour notre base de donnée _postgreSQL_.

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

## La base de données

### Création de la base de données.

Dans le terminal :

```

pgcli
\l

```

```

CREATE USER todolistchristmas;
\du

```

```

CREATE DATABASE todolchristmas;
\l

```

```

ALTER DATABASE todolistchristmas OWNER TO todolistchristmas;

ALTER USER todolistchristmas WITH PASSWORD 'lavieestbelle';
\q

```

```

pgcli -U todolistchristmas;
\conninfo

```

### Création d'une table.

dans le terminal dans la base de données **todolistchristmas** :

```

CREATE TABLE Items (
id bigserial not null primary key,
item varchar(200));

```

`select * from "items";`
la table items apparaît en colonne id et item.

### Création d'une donnée.

`INSERT INTO Items(item) VALUES('bonjour');`

`select * from "items";`
la table items sous Id, la valeur 1 s'est créé, sous item la valeur bonjour.

### ajouter des colonnes.

```

ALTER TABLE items ADD COLUMN "createdAt" timestamp;
You're about to run a destructive command.
Do you want to proceed? (y/n): y
Your call!
ALTER TABLE
Time: 0.008s

```

```

ALTER TABLE items ADD COLUMN "updatedAt" timestamp;
You're about to run a destructive command.
Do you want to proceed? (y/n): y
Your call!
ALTER TABLE
Time: 0.004s

```

`select * from "items";`
la table items sous Id, la valeur 1 s'est créé, sous item la valeur bonjour.

## Mettre à jour les informations de ma base de données dans config.json.

```

{
"development": {
"username": "todolistchristmas",
"password": "lavieestbelle",
"database": "todolistchristmas",
"host": "127.0.0.1",
"dialect": "postgres",
"operatorsAliases": false
},
"test": {
"username": "todolistchristmas",
"password": "lavieestbelle",
"database": "todolistchristmas",
"host": "127.0.0.1",
"dialect": "postgres",
"operatorsAliases": false
},
"production": {
"username": "todolistchristmas",
"password": "lavieestbelle",
"database": "todolistchristmas",
"host": "127.0.0.1",
"dialect": "postgres",
"operatorsAliases": false
}
}

```

## Mettre à jour app.js et vérifier la connexion.

dans app.js

`const Sequelize = require("sequelize");`

puis pour contrôler la connexion avec la base de donnée.

```

const db = new Sequelize(
"todolistchristmas",
"todolistchristmas",
"lavieestbelle",
{
host: "localhost",
dialect: "postgres"
}
);

db.authenticate()
.then(() => {
console.log("Connection has been established successfully.");
})
.catch(err => {
console.error("Unable to connect to the database:", err);
});

```

## Générer des modèles et leur migration vers la base de données.

Les modèles représentent la base de données. Dans "Todo" il peux y avoir plusieurs "TodoItems", à l'inverse, un "TodoItem" est rattaché à un seul "Todo".
On appelle cette relation One-to-Many.

![uml-todolist](./images/uml-todolist.png)

dans le terminal

`sequelize model:create --name Todo --attributes title:string`

dans les dossiers **models** et **migrations** des fichiers "todo.js" et "20200103083401-create-todo.js" sont alors créés.

puis

`sequelize model:create --name TodoItem --attributes content:string,complete:boolean`

dans les dossiers **models** et **migrations** des fichiers "todoitem.js" et "20200103084953-create-todo-item.js" sont alors créés.

par convention, nous modifions les nom des fichers en mettant la 1ère lettre en majuscule dans model "Todo.js" et "TodoItem.js".

puis dans todo.js
on associe la Todo à ses "TodoItems" en codant :

dans la fonction `const Todo = sequelize.define("Todo", {}`
pour indiquer qu'une valeur dans "title" est obligatoire

```

title: {
type: DataTypes.STRING,
allowNull: false,
},
});

```

`allowNull: false` à rajouter aussi dans la migration.

et dans la fonction `Todo.associate = function(models) {`

```

Todo.hasMany(models.TodoItem, {
foreignKey: "todoId",
as: "todoItems"
});
};

return Todo;

```

puis dans todoitem.js

dans la fonction `const TodoItem = sequelize.define("TodoItem", {}`
pour indiquer qu'une valeur dans "content" est obligatoire et "complete" aura une valeur par défault.

```

content: {
type: DataTypes.STRING,
allowNull: false,
},
complete: {
type: DataTypes.BOOLEAN,
defaultValue: false,
},
});

```

`allowNull : false` et `defaultValue: false` à rajouter aussi dans la migration.

et dans la fonction `TodoItem.associate = function(models) {}`

```

TodoItem.belongsTo(models.Todo, {
foreignKey: 'todoId',
onDelete: 'CASCADE',
});
};

return TodoItem;

```

dans la migration de TodoItem, ajouter aussi la relation car sequelize n'a pas crée de todoId.

```

todoId: {
type: Sequelize.INTEGER,
onDelete: 'CASCADE',
references: {
model: 'Todos',
key: 'id',
as: 'todoId',
},

```

## Créer des controleurs **"controllers"** et route **"routing"**.

Ils vont servir à créer, éditer, actualiser et supprimer les todos et items.

### Créer pour la todo.

créer un dossier :
`mkdir controllers`
créer dans "controllers" un fichier **todos.js** indiquer la route handler Express vers le modèle correspondant.

```

const Todo = require('../models').Todo;

module.exports = {
create(req, res) { // route handler
return Todo
.create({
title: req.body.title,
})
.then(todo => res.status(201).send(todo))
.catch(error => res.status(400).send(error));
},
};

```

Dans "controllers" créer un fichier **index.js** pour gérer tous les exports tous les exports

```

const todos = require("./todos");

module.exports = {
todos
};

```

Créer un dossier :
`mkdir routes` et et son fichier index.js puis dans celui-ci coder les routes **app.get** et **app.post** :

```

const todosController = require("../controllers").todos;

module.exports = app => {
app.get("/api", (req, res) =>
res.status(200).send({
message: "Welcome to the Todos API!"
})
);

app.post("/api/todos", todosController.create);
};

```

dans app.js, il faudra aussi indiquer ces routes avec un "require" juste avant la fonction.

```

// Require our routes into the application.
require("./routes")(app);
// Setup a default catch-all route that sends back a welcome message in JSON format.
app.get("\*", (req, res) =>
res.status(200).send({
message: "Welcome to the beginning of nothingness."
})
);

module.exports = app;

```

### Lister pour la todo.

Dans controllers/todos.js, ajouter la méthode **list**.

```

list(req, res) {
return Todo
.findAll()
.then(todos => res.status(200).send(todos))
.catch(error => res.status(400).send(error));
},

```

et la route correspondante dans routes/index.js
`app.get('/api/todos', todosController.list);`

### Créer controleurs et routes pour les **items**.

Créer un fichier **todoItems.js** dans controllers.

```

const TodoItem = require('../models').TodoItem;

module.exports = {
create(req, res) {
return TodoItem
.create({
content: req.body.content,
todoId: req.params.todoId,
})
.then(todoItem => res.status(201).send(todoItem))
.catch(error => res.status(400).send(error));
},
};

```

sans oublier de l'enregistrer dans controllers/index.js

```

const todoItems = require('./todoitems');

module.exports = {
todos,
todoItems,
};

```

et de créer sa route

`const todoItemsController = require("../controllers").todoItems;`

`app.post("/api/todos/:todoId/items", todoItemsController.create);`

Contrôler la création d'items sur postman.

![postman printscreen for post items](./images/post-items-postman.png)

### lister les items.

Dans controllers/todos.js, ajouter la méthode **list** pour lister les items.

`const TodoItem = require("../models").TodoItem;`

```

list(req, res) {
return Todo
.findAll({
include: [{
model: TodoItem,
as: 'todoItems',
}],
})
.then(todos => res.status(200).send(todos))
.catch(error => res.status(400).send(error));
},

```

puis regarder dans Postman **get** "localhost:4000/api/todos/"

### Récupérer une todo.

Sans controllers/todos.js, ajouter la méthode **retrieve**

```

retrieve(req, res) {
return Todo
.findByPk(req.params.todoId, {
include: [{
model: TodoItem,
as: 'todoItems',
}],
})
.then(todo => {
if (!todo) {
return res.status(404).send({
message: 'Todo Not Found',
});
}
return res.status(200).send(todo);
})
.catch(error => res.status(400).send(error));
},

```

sans oublier la route dans routes/index.js
`app.get('/api/todos/:todoId', todosController.retrieve);`

Puis regarder dans Postman **get** "localhost:4000/api/todos/1"

### Mettre à jour la todo.

dans controllers/todos.js ajouter la methode **update**

```

update(req, res) {
return Todo
.findById(req.params.todoId, {
include: [{
model: TodoItem,
as: 'todoItems',
}],
})
.then(todo => {
if (!todo) {
return res.status(404).send({
message: 'Todo Not Found',
});
}
return todo
.update({
title: req.body.title || todo.title,
})
.then(() => res.status(200).send(todo)) // Send back the updated todo.
.catch((error) => res.status(400).send(error));
})
.catch((error) => res.status(400).send(error));
},

```

sans oublier la route dans routes/index.js
`app.put("/api/todos/:todoId", todosController.update);`

Puis tester dans postman

![Postman put todo update](./images/Postman-update-todo.png)

### Supprimer une todo.

dans controllers/todos.js ajouter la méthode **destroy**

```

destroy(req, res) {
return Todo.findByPk(req.params.todoId)
.then(todo => {
if (!todo) {
return res.status(400).send({
message: "Todo Not Found"
});
}
return todo
.destroy()
.then(() =>
res.status(200).send({ message: "Todo deleted successfully." })
)
.catch(error => res.status(400).send(error));
})
.catch(error => res.status(400).send(error));
}

```

sans oublier la route `app.delete("/api/todos/:todoId", todosController.destroy);`

Vérifier dans Postman **Delete** "localhost:4000/api/todos/4".
La todo 4 est supprimé et le message "Todo deleted successfully." apparaît.

### modifier et supprimer un item.

dans controller/todoItems.js

```

update(req, res) {
return TodoItem.findOne({
where: {
id: req.params.todoItemId,
todoId: req.params.todoId
}
})
.then(todoItem => {
if (!todoItem) {
return res.status(404).send({
message: "TodoItem Not Found"
});
}

        return todoItem
          .update({
            content: req.body.content || todoItem.content,
            complete: req.body.complete || todoItem.complete
          })
          .then(updatedTodoItem => res.status(200).send(updatedTodoItem))
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));

},
destroy(req, res) {
return TodoItem.findOne({
where: {
id: req.params.todoItemId,
todoId: req.params.todoId
}
})
.then(todoItem => {
if (!todoItem) {
return res.status(404).send({
message: "TodoItem Not Found"
});
}

        return todoItem
          .destroy()
          .then(() => res.status(204).send())
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));

}

```

sans oublier les routes ordonnées, les route des todos puis les routes des items.

```

app.post("/api/todos", todosController.create);
app.get("/api/todos", todosController.list);
app.get("/api/todos/:todoId", todosController.retrieve);
app.put("/api/todos/:todoId", todosController.update);
app.delete("/api/todos/:todoId", todosController.destroy);

app.post("/api/todos/:todoId/items", todoItemsController.create);
app.put("/api/todos/:todoId/items/:todoItemId", todoItemsController.update);
app.delete(
"/api/todos/:todoId/items/:todoItemId",
todoItemsController.destroy
);

// For any other request method on todo items, we're going to return "Method Not Allowed"
app.all("/api/todos/:todoId/items", (req, res) =>
res.status(405).send({
message: "Method Not Allowed"
})
);
};

```

## LE FRONT------------------------------------------------------------------------------------

### Nettoyage du boilerplate et création du composant TodoList.

supprimer **src/components/Hello.vue** et créer src/components/TodoList.vue.

puis coder en 3 partie :

```
<template>
  <div>
    <ul>
      <li>Todo A</li>
      <li>Todo B</li>
      <li>Todo C</li>
    </ul>
  </div>
</template>

<script type="text/javascript">
export default {};
</script>
<style></style>
```

Nettoyer les codes qui ne sert pas dans les autres fichier aussi.


### Cabler le composant.

Dans router/index.js, il faut indique la route pour connecter à la view.

```
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

```

Dans views/Home.vue, il faut cabler avec le composant en 3 étape : un import, un export, une balise.
```
<template>
  <div class="home">
    <TodoList msg="Welcome to Your Vue.js todo-list" />
  </div>
</template>

<script>
// @ is an alias to /src
import TodoList from "@/components/TodoList.vue";

export default {
  name: "home",
  components: {
    TodoList
  }
};
</script>
```

### Créer le composant TodoImputText.vue.

