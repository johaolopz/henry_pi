import React from "react";
import { LeftArrow, RightArrow } from "./ArrowsSvg";
import './pagination.css';
import { orderByAsc, orderByDesc, orderByMaxForce, orderByMinForce, filterByCreated, filterBy, filterByAll } from "../../redux/actions";
import { useDispatch, useSelector } from 'react-redux';

const Pagination = ({ onLeftClick, onRightClick, page, totalPages }) => {
  const pokemons2 = useSelector(state => state.pokemons);
  const dispatch = useDispatch();
  const typesArray = useSelector(state => state.types)

  let typesList = '';
  if (typesArray !== undefined){
    typesList = typesArray.map((elem) => <option value={elem}>{elem}</option>)
  }

  return (
    <div className='pageContainer'>
        <div className='divOrderBy'>
          <label>Order by:</label>
          <select name="selectOrderBy"
            onChange={(e) => {
              if (e.target.value === 'Ascendent')
              {
                dispatch(orderByAsc(pokemons2))
                onLeftClick(true);
              }
              if (e.target.value === 'Descendent')
              {
                dispatch(orderByDesc(pokemons2))
                onLeftClick(true);
              }
              if (e.target.value === 'MaxForce')
              {
                dispatch(orderByMaxForce(pokemons2))
                onLeftClick(true);
              }
              if (e.target.value === 'MinForce')
              {
                dispatch(orderByMinForce(pokemons2))
                onLeftClick(true);
              }
              }}>
            <option value="Ascendent">A - Z (asc)</option>
            <option value="Descendent" selected>Z - A (desc)</option>
            <option value="MaxForce">Max_force</option>
            <option value="MinForce">Min_force</option>
          </select>
        </div>
        <div className="pagination">
        <button className="pagination-btn" onClick={onLeftClick}>
            <div className="icon">
            <LeftArrow />
            </div>
        </button>
        <div className='pages'>
            {page} de {totalPages}
        </div>
        <button className="pagination-btn" onClick={onRightClick}>
            <div className="icon">
            <RightArrow />
            </div>
        </button>
        </div>
        <div className='divFilterBy'>
          <label>Filter by:</label>
          <select name="selectFilterBy"
          onChange={(e) => {
              if (e.target.value === 'CreatedPokemons')
              {
                dispatch(filterByCreated());
              }
              if (e.target.value === 'AllPokemons')
              {
                dispatch(filterByAll());
              }
              if (e.target.value !== 'CreatedPokemons' && e.target.value !== 'AllPokemons')
              {
                dispatch(filterBy(e.target.value,));
              }
              }}>
            <option value="AllPokemons">All Pokemons</option>
            <option value="CreatedPokemons" selected>Created by us</option>
            {typesList}
          </select>
        </div>
    </div>
  );
};

export default Pagination;