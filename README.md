# The Svested Interview Project
## Frontend: ReactJS | Backend: Node.js

### Technologies use:
- MySQL 
- Express
- Sequelize
- React-google-charts
- Docker (For Database)

## Installation

- Clone the repo
- Run ```yarn install (or npm install)```
- If using docker, run ```docker-compose up``` to start MySql database in docker container, if don't have go to ```src\server\config\config.json``` to config the database
- Type ```cd src/server``` and run ```npx sequelize db:migrate```
- Run ```npx sequelize db:seed:all``` to seed the data
- Run ```yarn dev (or npm run dev)``` to start developement environment

## Config 
- Client run on `http://localhost:3000`, server run on `http://localhost:8080`
- Database Config : ```src\server\config\config.json```

## Test
- Run ```yarn test or npm run test```
- Test folder locate at `src\server\test\index.test.js`
## Images
- Server
![image description](https://github.com/dim0147/Svested-Interview-Project/blob/master/images/sv1.png?raw=true)
![image description](https://github.com/dim0147/Svested-Interview-Project/blob/master/images/sv2.png?raw=true)
![image description](https://github.com/dim0147/Svested-Interview-Project/blob/master/images/sv3.png?raw=true)
![image description](https://github.com/dim0147/Svested-Interview-Project/blob/master/images/sv4.png?raw=true)
- Client
![image description](https://github.com/dim0147/Svested-Interview-Project/blob/master/images/c1.png?raw=true)