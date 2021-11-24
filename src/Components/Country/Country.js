import React from "react";
import "./Country.css";

const Country = (props) => {
  return (
    <div className="country">
      <h2>Country name:{props.name}</h2>
      <h3>Country capital:{props.capital}</h3>
      <img src={props.flag} alt="" />
    </div>
  );
};

export default Country;
