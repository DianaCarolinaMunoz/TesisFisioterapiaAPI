const express = require("express");
const bodyParser = require("body-parser");
const mongo = require("./db/connectionMongo");
const cors = require('express-cors');
const cookieParser = require('cookie-parser');


const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(cors({
    allowedOrigins: [
        'http://localhost:3000',
    ],
    headers: [
        'X-HTTP-Method-Override', 'Content-Type', 'Accept','X-Access-Token','*'
      ]
    }
 ));


 app.use(cookieParser());
 
const routeUsers = require("./routes/users")(app);
const routeCultivos = require("./routes/cultivos")(app);
const routeRecomendaciones = require("./routes/recomendaciones")(app);
const routeNovedades = require("./routes/novedades")(app);
const routeEjercicios = require("./routes/ejercicios")(app);


mongo.conectar(app);