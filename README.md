# MEANStack_ContactsList
A very simple RESTful project demonstrating MEAN architecture with CRUD operations.
This is a simple one page app that lists contacts and also allows you to Create, Edit & delete contacts.

N.B. The 'node_modules' folder was not uploaded to GitHub. Instead just run 'npm install'.

---

Built with VS CODE

---

### MongoDB

You can install and configure MongoDB using the links provided below.

I named the database 'contactdb', (you will need to change this in server.js if you decide to go with something else).

To insert data into the db from 'cmd', just type in ...

    db.contactdb.insert(
    [
      {
        name: 'Tom',
        email: 'tom@gmail.com,
        number: '111-1111-111'
      },
      {
        name: 'mary',
        email: 'mary@gmail.com,
        number: '222-2222-222'    
      },
      {
        name: 'Jane',
        email: 'jane@gmail.com,
        number: '333-3333-333'    
      }
    ])

---

###Techs & Plugins
|Tech|
|----|
|MongoDB|
|Express|
|AngularJS|
|NodeJS|

---

###Resources
|Title|Author|Publisher / Website|
|-----|------|---------|
|[Install MongoDB Community Edition on Windows](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/)| | MongoDB |
|[Configuration File Options](https://docs.mongodb.com/manual/reference/configuration-options/)| | MongoDB |
|[MEAN Stack RESTful API Tutorial (1/5)](https://www.youtube.com/watch?v=kHV7gOHvNdk)| Learn Coding Tutorials | YouTube |
|[Express API](http://expressjs.com/en/api.html)| | ExpressJS.com |
|[Node.js Applications with VS Code](https://code.visualstudio.com/docs/runtimes/nodejs)| | Visual Studio Code |
