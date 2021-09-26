import React, { useState } from "react";
import './createPokemon.css';
import axios from 'axios';

function CreatePokemon() {
    
    const handleSubmit = e => {
        e.preventDefault();
        axios.post('http://localhost:3001/pokemons', { 
                name: document.querySelector('input[name=name]').value,
                life: document.querySelector('input[name=life]').value,
                force: document.querySelector('input[name=force]').value,
                defense: document.querySelector('input[name=defense]').value,
                speed: document.querySelector('input[name=speed]').value,
                height: document.querySelector('input[name=height]').value,
                weight: document.querySelector('input[name=weight]').value,
                typesPokemon: [document.querySelector('input[name=typesPokemon1]').value,
                               document.querySelector('input[name=typesPokemon2]').value,
                               document.querySelector('input[name=typesPokemon3]').value]
        })
        .then( body => {
        alert('POKEMON WAS CREATED');
        console.log(body);
        });
    }


return (
    <div className='cPokeContainer'>
        <form className='formCreate' onSubmit={handleSubmit}>    
            <div className='divName'>        
                <label className='nameInput' htmlFor="nombre">Name:</label>
                <input
                    type="text"
                    name="name"
                    autocomplete="off"
                />
            </div>
            <div className='divLife'>        
                <label className='nameInput' htmlFor="nombre">Life:</label>
                <input
                    type="text"
                    name="life"
                    autocomplete="off"
                />
            </div>
            <div className='divForce'>        
                <label className='nameInput' htmlFor="nombre">Force:</label>
                <input
                    type="text"
                    name="force"
                    autocomplete="off"
                />
            </div>
            <div className='divDefense'>        
                <label className='nameInput' htmlFor="nombre">Defense:</label>
                <input
                    type="text"
                    name="defense"
                    autocomplete="off"
                />
            </div>
            <div className='divSpeed'>        
                <label className='nameInput' htmlFor="nombre">Speed:</label>
                <input
                    type="text"
                    name="speed"
                    autocomplete="off"
                />
            </div>
            <div className='divHeight'>        
                <label className='nameInput' htmlFor="nombre">Height:</label>
                <input
                    type="text"
                    name="height"
                    autocomplete="off"
                />
            </div>
            <div className='divWeight'>        
                <label className='nameInput' htmlFor="nombre">Weight:</label>
                <input
                    type="text"
                    name="weight"
                    autocomplete="off"
                />
            </div>
            <div className='divAllTypes'>
                <div className='divTypesPokemon1'>        
                    <label className='nameInput' htmlFor="nombre">Type1:</label>
                    <input
                        type="text"
                        name="typesPokemon1"
                        autocomplete="off"
                    />
                </div>
                <div className='divTypesPokemon2'>        
                    <label className='nameInput' htmlFor="nombre">Type2:</label>
                    <input
                        type="text"
                        name="typesPokemon2"
                        autocomplete="off"
                    />
                </div>
                <div className='divTypesPokemon3'>        
                    <label className='nameInput' htmlFor="nombre">Type3:</label>
                    <input
                        type="text"
                        name="typesPokemon3"
                        autocomplete="off"
                    />
                </div>
            </div>
            <div className='divSubmit'>
                <input type="submit" value="Create" />        
            </div>
        </form>
    </div>
);
}

export default CreatePokemon;