import React, {useState} from "react";
import './createPokemon.css';
import axios from 'axios';
import { useSelector } from 'react-redux';

function CreatePokemon() {
    const [typeSelected, setTypeSelected] = useState([]);
    const typesPokemons = useSelector(state => state.types);

    // useEffect( () => {
    //     dispatch(getTypes());
    // },[])

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
        types = typesPokemons.map((elem) => <label><input type="checkbox" onChange={handled} disabled={typeSelected===[] ? true : false} className="ckbox" value={elem} /> {elem}</label>)
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
        setInput({
            name: '',
        life: '',
        force: '',
        defense: '',
        speed: '',
        height: '',
        weight: ''
        });
        });
    }


    //################ VALIDATIONS #############
    const [input, setInput] = useState({
        name: '',
        life: '',
        force: '',
        defense: '',
        speed: '',
        height: '',
        weight: ''
      });
      const [errors, setErrors] = useState({});
    
      const handleInputChange = function(e) {
        setInput({
          ...input,
          [e.target.name]: e.target.value
        });
        setErrors(validate({
          ...input,
          [e.target.name]: e.target.value
        }));
      }

    function validate(input) {
        let errors = {};
        if (!input.name) {
          errors.name = 'Name is required';
        }
      
        if (!input.life) {
          errors.life = 'Input is required';
        } else if (!/(?=.*[0-9])/.test(input.life)) {
          errors.life = 'Value is invalid';
        }

        if (!input.force) {
            errors.force = 'Input is required';
          } else if (!/(?=.*[0-9])/.test(input.force)) {
            errors.force = 'Value is invalid';
          } 

        if (!input.defense) {
        errors.defense = 'Input is required';
        } else if (!/(?=.*[0-9])/.test(input.defense)) {
        errors.defense = 'Value is invalid';
        }
        
        if (!input.speed) {
        errors.speed = 'Input is required';
        } else if (!/(?=.*[0-9])/.test(input.speed)) {
        errors.speed = 'Value is invalid';
        }

        if (!input.height) {
            errors.height = 'Input is required';
          } else if (!/(?=.*[0-9])/.test(input.height)) {
            errors.height = 'Value is invalid';
          }
        
        if (!input.weight) {
        errors.weight = 'Input is required';
        } else if (!/(?=.*[0-9])/.test(input.weight)) {
        errors.weight = 'Value is invalid';
        } 
      
        document.getElementsByClassName('submitForm').disabled=false;
      return errors;
      }


return (
    <div className='cPokeContainer'>
        <form className='formCreate' onSubmit={handleSubmit}>    
            <div className='divInputs'>
                <div className='divInputName'>        
                    <label className='nameInput' htmlFor="nombre">Name:</label>
                    <input
                        className='inputs'
                        type="text"
                        name="name"
                        value={input.name}
                        placeholder="Name..."
                        onChange={handleInputChange}
                        autocomplete="off"
                    />
                </div>
                {errors.name && (<div className='divErrors'><span></span><p className="danger">{errors.name}</p></div>)}
            </div>
            <div className='divInputs'>
                <div className='divInputLife'>      
                    <label className='nameInput' htmlFor="nombre">Life:</label>
                    <input
                        type="text"
                        name="life"
                        autocomplete="off"
                        className='inputs'
                        value={input.life}
                        placeholder="123"
                        onChange={handleInputChange}
                    />
                </div>
                {errors.life && (<div className='divErrors'><span></span><p className="danger">{errors.life}</p></div>)}
            </div>
            <div className='divInputs'>
                <div className='divInputForce'>        
                    <label className='nameInput' htmlFor="nombre">Force:</label>
                    <input
                        type="text"
                        name="force"
                        autocomplete="off"
                        className='inputs'
                        value={input.force}
                        placeholder="123"
                        onChange={handleInputChange}
                    />
                </div>
                {errors.force && (<div className='divErrors'><span></span><p className="danger">{errors.force}</p></div>)}
            </div>
            <div className='divInputs'>
                <div className='divInputDefense'>      
                    <label className='nameInput' htmlFor="nombre">Defense:</label>
                    <input
                        type="text"
                        name="defense"
                        autocomplete="off"
                        className='inputs'
                        value={input.defense}
                        placeholder="123"
                        onChange={handleInputChange}
                    />
                </div>
                {errors.defense && (<div className='divErrors'><span></span><p className="danger">{errors.defense}</p></div>)}
            </div>
            <div className='divInputs'>
                <div className='divInputSpeed'>      
                    <label className='nameInput' htmlFor="nombre">Speed:</label>
                    <input
                        type="text"
                        name="speed"
                        autocomplete="off"
                        className='inputs'
                        value={input.speed}
                        placeholder="123"
                        onChange={handleInputChange}
                    />
                </div>
                {errors.speed && (<div className='divErrors'><span></span><p className="danger">{errors.speed}</p></div>)}
            </div>
            <div className='divInputs'>  
                <div className='divInputHeight'>      
                    <label className='nameInput' htmlFor="nombre">Height:</label>
                    <input
                        type="text"
                        name="height"
                        autocomplete="off"
                        className='inputs'
                        value={input.height}
                        placeholder="123"
                        onChange={handleInputChange}
                    />
                </div>
                {errors.height && (<div className='divErrors'><span></span><p className="danger">{errors.height}</p></div>)}
            </div>
            <div className='divInputs'>
                <div className='divInputWeight'>    
                    <label className='nameInput' htmlFor="nombre">Weight:</label>
                    <input
                        type="text"
                        name="weight"
                        autocomplete="off"
                        className='inputs'
                        value={input.weight}
                        placeholder="123"
                        onChange={handleInputChange}
                    />
                </div>
                {errors.weight && (<div className='divErrors'><span></span><p className="danger">{errors.weight}</p></div>)}
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
                <input type="submit" className='submitForm' value="Create" />        
            </div>
        </form>
    </div>
);
}

export default CreatePokemon;