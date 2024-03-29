const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const connectDB = require('./DB/db');
const jwt = require('jsonwebtoken');


//import midlewares
const {ProtectRoute} = require('./middlewares/jwt')

// Importar os controladores
const { addUser,login,editUser} = require('./controller/User');
const {addclient,getfichas,getFicha,delclient, addficha,exficha} = require('./controller/Client')

// Configuração do Express
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//configuração cors
app.use(cors());


/*  Rotas De User          */
app.post('/signin', addUser);
app.post('/login',login)
app.put('/edituser/:id',ProtectRoute,editUser)

/*  Rotas De Client e Ficha        */
app.post('/AddClient',ProtectRoute,addclient)
app.get('/ficha',getfichas)
app.get('/ficha/:id',getFicha)
app.delete('/ficha/:id',ProtectRoute,delclient)
app.post('/ficha/:id',ProtectRoute,addficha)
app.get('/exercicios',exficha)





connectDB();


app.listen(4000, () => {
    console.log('iniciado server')
});

module.exports = app;





