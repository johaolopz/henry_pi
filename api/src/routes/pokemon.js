const { Router } = require("express");
const { v4: uuidv4 } = require('uuid');
const router = Router();
const { Pokemon } = require ("../db.js");
const axios = require('axios');
module.exports = router;

router.get('/', async (req, res) =>{
    //RUTAS
    const dbPokemons = await Pokemon.findAll();
    const resp = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=40&offset=0");
    const apiPokemons = await Promise.all(resp.data.results.map(async (elem)=>{
                          const resUrl = await axios.get(elem.url);
                          elem.id = await resUrl.data.id;
                          elem.img = await resUrl.data.sprites.other.dream_world.front_default;
                          elem.life = await resUrl.data.base_experience;
                          elem.force = await resUrl.data.base_experience;
                          elem.defense = await resUrl.data.base_experience;
                          elem.speed = await resUrl.data.base_experience;
                          elem.height = await resUrl.data.height;
                          elem.weight = await resUrl.data.weight;
                          elem.types = await resUrl.data.types.map(elem => elem.type.name);
                          elem.id = await resUrl.data.id;
                          return elem;
                        }));
    let allPokemons = dbPokemons.concat(apiPokemons);
    res.status(400).json(allPokemons);
});