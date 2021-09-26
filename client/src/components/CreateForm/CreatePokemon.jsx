import React, {useState, useEffect} from "react";
import './createPokemon.css';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import { getTypes } from "../../redux/actions";

function CreatePokemon() {
    const dispatch = useDispatch();
    const [typeSelected, setTypeSelected] = useState([]);
    const typesPokemons = useSelector(state => state.types);

    useEffect( () => {
        dispatch(getTypes());
    },[])

    let types = '';
    let filtered = [];
    if (typesPokemons){
        const handled = e => {
            if (e.target.checked) {
            setTypeSelected([...typeSelected,e.target.value])}
            else{
                filtered = typeSelected.filter(el => el !== e.target.value)
                setTypeSelected(filtered)
            }
                }
        types = typesPokemons.map((elem) => <label><input type="checkbox" onChange={handled} className="ckbox" value={elem} /> {elem}</label>)
    }

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
                typesPokemon: typeSelected
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
            <div className='typesContainer'>
                <div className='divTypesTitle'>
                    <h3>Types</h3>
                </div>
                <div className='divAllTypes'>
                    {types}
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