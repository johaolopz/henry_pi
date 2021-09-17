import React, { useState } from "react";

export default function SearchBar({onSearch}) {
  const [namePokemon, setpokemon] = useState("");
  return (
      
      <form className='formSearching' onSubmit={(e) => {
        e.preventDefault();
        onSearch(namePokemon);
        setpokemon('');
      }}>
        <div className='divSearching'>
          <input
            type="text"
            className="inputSearch"
            placeholder="Enter pokemon name..."
            value={namePokemon}
            onChange={e => setpokemon((e.target.value).toLowerCase())}
          />
            <input className="botonSearch" type="submit" value="Search" />
        </div>
      </form>
  );
}