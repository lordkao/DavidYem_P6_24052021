const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const stuffRoutes = require('./routes/stuff')
const userRoutes = require('./routes/user')

const app = express()

/*Connection de l'api avec mongoDB.*/
mongoose.connect('mongodb+srv://Lordkao:DatabasemongoDB@serveur-test.zd6sr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));


app.use((req,res,next) => {/*Paramétrage du CORS laissant l'accès à tous les types requêtes.*/
    res.setHeader('Access-Control-Allow-Origin','*')
    res.setHeader('Access-Control-Allow-Headers','Origin, X-requested-with, Content, Accept, Content-Type, Authorization')
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,DELETE,PATCH,OPTIONS')
    next()
})
app.use(bodyParser())/*Analyse le corps de la requête.*/

app.use('/api/sauces',stuffRoutes)

app.use('/api/auth', userRoutes)


module.exports = app