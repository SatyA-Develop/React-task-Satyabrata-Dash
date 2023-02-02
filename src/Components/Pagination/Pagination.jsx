import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import ReactPaginate from "react-paginate";
import './Pagination.css'
import {IoIosArrowBack,IoIosArrowForward} from 'react-icons/io'

const Pagination = ({
  pages,
  setCurrentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= pages; i++) {
    pageNumbers.push(i);
  }

  const [currentButton, setCurrentButton] = useState(1);
  const [arrOfCurrButtons, setArrOfCurrButtons] = useState([]);

  useEffect(() => {
    let tempNumberOfPages = [...arrOfCurrButtons];

    if (pageNumbers.length < 6) {
      tempNumberOfPages = pageNumbers;
    }

    setArrOfCurrButtons(tempNumberOfPages);
    setCurrentPage(currentButton);
  }, [currentButton]);

  return (
    <div className="pagination-container">
      <a href="#" onClick={()=>setCurrentButton(prev => prev <=1 ? prev : prev-1)} className={`${currentButton === 1 ? 'disabled': ''}`}><IoIosArrowBack/></a>
      {arrOfCurrButtons.map((item, index) => {
        return (
          <a
            href="#"
            key={index}
            className={`${currentButton === item ? "active" : ""}`}
            onClick={() => setCurrentButton(item)}
          >
            {item}
          </a>
        );
      })}
      <a href="#" onClick={()=>setCurrentButton(prev => prev >= pageNumbers.length ? prev : prev+1)} className={`${currentButton === pageNumbers.length ? 'disabled': ''}`}><IoIosArrowForward/></a>
    </div>
  );
};

export default Pagination;
