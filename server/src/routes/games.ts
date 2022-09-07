import express from "express";
export const gamesRouter = express.Router();
import { Game } from "../models/games";

gamesRouter.use(express.json());
//index
gamesRouter.get('/', (_req, res) => {
    Game.find()
        .then( games => res.status(200).send(games))
        .catch( () => res.status(404).send({nogamesfound: "no games found"}));
});
//show
gamesRouter.get('/:id', (req, res) => {
    Game.findById(req?.params?.id)
        .then( game => res.status(200).send(game))
        .then ( () => res.status(404).send({ gamenotfound: `Game ${req?.params?.id} not found`}));
});
//create
gamesRouter.post('/', (req, res) => {
    // const newGame = new Game(req.body);
    const newGame = new Game({
        name: req.body.name,
        type: req.body.type,
        description: req?.body?.description,
        rating: req?.body?.rating,
        creator: req?.body?.creator,
        features: req.body.features,
        price: req.body.price,
        release_date: req?.body?.release_date,
        add_ons: req?.body?.add_ons,
        editions: req?.body?.editions,
        base_game: req?.body?.base_game
    });
    console.log(newGame);
    newGame.save()
        .then(game => res.json(game))
        .catch(err => res.status(500).send(err)); // gives better messages with mongoose
        // .catch( () => res.status(500).send({failedToCreate: "Failed to create game"}));
});
//update
gamesRouter.put('/:id', (req, res) => {
    const updatedGame = {
        name: req.body.name,
        type: req.body.type,
        description: req?.body?.description,
        rating: req?.body?.rating,
        creator: req?.body?.creator,
        features: req.body.features,
        price: req.body.price,
        release_date: req?.body?.release_date,
        add_ons: req?.body?.add_ons,
        editions: req?.body?.editions,
        base_game: req?.body?.base_game
    };

    Game.findByIdAndUpdate(
        req?.params?.id,
        updatedGame
    )
    .then(game => res.status(201).send(game))
    .catch( err => res.status(500).send(err));
    // .catch( () => res.status(500).send({failedToUpdate: "Failed to update game"}));
});
//destroy
gamesRouter.delete("/:id", (req, res) => {
    Game.findByIdAndDelete(req?.params?.id)
        .then(game => res.status(202).send(game))
        .catch(err => res.status(500).send(err.message));
});