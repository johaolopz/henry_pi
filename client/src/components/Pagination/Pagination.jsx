import React from "react";
import { LeftArrow, RightArrow } from "./ArrowsSvg";
import './pagination.css';
import { orderByAsc, orderByDesc, orderByMaxForce, orderByMinForce } from "../../redux/actions";
import { useDispatch, useSelector } from 'react-redux';

const Pagination = ({ onLeftClick, onRightClick, page, totalPages }) => {
  const pokemons2 = useSelector(state => state.pokemons);
  const dispatch = useDispatch();

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
              console.log('DENTRO DEL SELECT',page)
              }}>
            <option value="Ascendent" selected>A - Z (asc)</option>
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
          <select name="selectFilterBy">
            <option value="Name" selected>Name</option>
            <option value="Type" selected>Type</option>
            <option value="Other">Other</option>
          </select>
        </div>
    </div>
  );
};

export default Pagination;