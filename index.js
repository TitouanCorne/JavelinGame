const path = require('path')
const lancer = require('./back/lancer');
const express = require('express')
const app = express()

const hostname = '127.0.0.1';
const port = 3000;

app.use("/static", express.static(path.join(__dirname, '/static')))

app.get('/', (req, res) => {
    res.redirect(301, '/static/index.html')
})

//RECUPERER LES RESULTATS DES DICES
app.get(encodeURI('/remainingDices'), (req, res) => {
    console.log(req.query)
    remainingDices = req.query["valeur"]
    res_dices = lancer.res_dices(remainingDices)
    res.json({
        remainingDices: remainingDices,
        res_dices: res_dices,
    })
})



app.use(function (req, res) {
    console.log("et c'est le 404 : " + req.url);

    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/html');

    res.end("");

})

app.listen(port, hostname);
console.log(`Server running at http://${hostname}:${port}/`);
