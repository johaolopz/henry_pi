import React from "react";
import { LeftArrow, RightArrow } from "./ArrowsSvg";
import './pagination.css'

const Pagination = ({ onLeftClick, onRightClick, page, totalPages }) => {
  return (
    <div className='pageContainer'>
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
    </div>
  );
};

export default Pagination;