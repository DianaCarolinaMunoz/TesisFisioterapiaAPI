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
        'http://localhost:3001',
        'http://localhost:5001',
        'https://d2yaaz8bde1qj3.cloudfront.net/',
        'http://d2yaaz8bde1qj3.cloudfront.net/',	
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
const routeResults = require("./routes/results")(app);


mongo.conectar(app);

const port = 5001;
app.listen(port, () => { console.log(port) })
