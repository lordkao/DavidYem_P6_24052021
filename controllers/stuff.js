const Thing = require('../models/thing')

exports.createThing = (req,res,next) => {/*Création de sauce.*/
    delete req.body._id
    const thing = new Thing({/*Créer une nouvelle instance de notre modèle Thing en enregistrant les élements du corps de la requête.*/
        ...req.body
    })
    thing.save()/*Enregistre le notre objet dans la base de données.*/
    .then( () => res.status(201).json({ message: 'Objet enregistré !'}))
    .catch( error => res.status(400).json({ error }))
}

exports.getOneThing = (req,res,next) => { /*Obtenir une sauce par son id.*/
    Thing.findOne({ _id: req.params.id})
    .then( thing => res.status(200).json(thing))
    .catch( error => res.status(404).json({ error }))
}

exports.modifyThing = (req,res,next) => {/*Modification d'une sauce.*/
Thing.updateOne({ _id: req.params.id},{...req.body, _id: req.params.id})
.then( () => res.status(200).json({ message: 'Objet modifié !'}))
.catch( error => res.status(400).json({ error }))
}

exports.deleteThing = (req,res,next) => {/*Suppression de sauce.*/
    Thing.deleteOne({ _id: req.params.id })
    .then( () => res.status(200).json({ message: 'Objet supprimé !'}))
    .catch( error => res.status(400).json({ error }))
}

exports.getAllThings = (req,res,next) => {/*Obtenir toutes les sauces.*/
    Thing.find()
    .then( things => res.status(200).json(things))
    .catch( error => res.status(400).json({ error }))
}