import React from "react";
import { links } from "../../assets/images-links";
import "./styles.css";

function Filter({ selectedFilter, setSelectedFilter }) {
  return (
    <div className="filter-div">
      {links.map((item, i) => (
        <div
          key={i}
          className={`links-box ${i === selectedFilter && "selected-box"}`}
          onClick={() => {
            setSelectedFilter(i);
            // console.log(i ,typeof i);
          }}
        >
          <img src={item.imgSrc} className="links-img" alt=""/>
          <p
            className={`links-label ${i === selectedFilter && "selected-label"}`}
          >
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Filter;
