#### How to install

You need Docker and preferably Docker compose;

Open root of the project in the terminal and run
`docker-compose up -d`
Application runs on port 3000 so you need to have it open or edit docker-compose.yml. After succesful build application is ready at
https://localhost:3000

**This url is important because it is whitelisted in the Auth0 app**

#### How to use
On the homepage you have the navbar at the top and link to the listings in the body of the document. You can either login by pressing "log-in" button at the top right corner, or you will be automaticaly redirected if you reach authorized page.