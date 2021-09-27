const { Router } = require("express");
const { v4: uuidv4 } = require('uuid');
const router = Router();
const { Pokemon, Type } = require ("../db.js");
const axios = require('axios');
module.exports = router;

router.get('/', async (req, res) =>{
    const {name} = req.query;
    if (name) {
              let message = 'A CORRECT NAME IS NECESSARY';
              let searchPokemon = await Pokemon.findOne({
                  where: { name: name },
                  include: { model: Type}
              });
              if (searchPokemon){
              searchPokemon.dataValues.typesPokemon = await Promise.all(searchPokemon.Types.map(async el => {return await el.name}))}
              console.log(searchPokemon)
              if (!searchPokemon && isNaN(name)) {
                try {
                  const resp = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
                  searchPokemon = {
                                    id : await resp.data.id,
                                    name: await resp.data.name,
                                    img : await resp.data.sprites.other.dream_world.front_default,
                                    typesPokemon : await resp.data.types.map(elem => elem.type.name)
                                  };
                    }
                catch{
                  message = "POKEMON DOESN'T EXIST";
                }}
              if (searchPokemon) {
                  res.status(200).json(searchPokemon);
              }
              else res.status(400).json({message: message})
    }
    else {
          const lim = 40;
          let dbTypesPoke = await Pokemon.findAll({
            include:{model:Type}
          });
          const dbPokemons = await Promise.all(dbTypesPoke.map(async (elem)=>{
            elem.dataValues.typesPokemon = await Promise.all(elem.Types.map(async el => {return await el.name}));
            return await elem;
          }));
          const resp = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${lim}&offset=0`);
          const apiPokemons = await Promise.all(resp.data.results.map(async (elem)=>{
                                const resUrl = await axios.get(elem.url);
                                elem.id = await resUrl.data.id;
                                elem.img = await resUrl.data.sprites.other.dream_world.front_default;
                                elem.typesPokemon = await resUrl.data.types.map(elem => elem.type.name);
                                return elem;
                              }));
          let allPokemons = dbPokemons.concat(apiPokemons);
          const count = allPokemons.length;
          const arrInit = allPokemons.slice(0,9)
          res.status(200).json({total: count, init: arrInit, results: allPokemons});
          }
});

router.get('/:idPokemon', async (req, res) =>{
  const {idPokemon} = req.params;
  let searchPokemon = {}
  if (idPokemon.length > 4) {
  searchPokemon = await Pokemon.findOne(
    {
      where: {
        id: idPokemon
      }
    }
  );
}
  else {
        const resp = await axios.get(`https://pokeapi.co/api/v2/pokemon/${idPokemon}`);
        searchPokemon = {
                          id : await resp.data.id,
                          name: await resp.data.name,
                          img : await resp.data.sprites.other.dream_world.front_default,
                          life : await resp.data.stats[0].base_stat,
                          force : await resp.data.stats[1].base_stat,
                          defense : await resp.data.stats[2].base_stat,
                          speed : await resp.data.stats[5].base_stat,
                          height : await resp.data.height,
                          weight : await resp.data.weight,
                          typesPokemon : await resp.data.types.map(elem => elem.type.name)
                        };
        }
  if (searchPokemon) {
    res.status(200).json(searchPokemon);}
  else {
    res.status(400).json({message: "ID don't exist"})}
});

router.post('/', async (req, res)=>{
  const {name, life, force, defense, speed, height, weight, typesPokemon}= req.body;
  try{
      const pokeCreate= await Pokemon.create({
          id: uuidv4(), 
          name,
          img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/52.png',
          life,
          force,
          defense,
          speed,
          height,
          weight
      },{ fields: ["id","name","img","life","force","defense","speed","height","weight"] });

      for(let i=0; i<typesPokemon.length; i++){
        let idType= await Type.findOne({where:{name: typesPokemon[i]}})
        await pokeCreate.addType(idType);
      }

      pokeCreate && res.status(200).json(pokeCreate);
      }
  catch(error){
      res.status(400).json({message:error});
  }
});