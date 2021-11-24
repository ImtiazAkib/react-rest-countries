import React, { useEffect, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://countriesnow.space/api/v0.1/countries/capital")
      .then((res) => res.json())
      .then((data) => setCountries(data.data));
  }, []);

  const [countryflags, setCountryflags] = useState([]);
  useEffect(() => {
    fetch("https://countriesnow.space/api/v0.1/countries/flag/images")
      .then((res) => res.json())
      .then((data) => setCountryflags(data.data));
  }, []);

  const [countrycodes, setCountrycodes] = useState([]);
  useEffect(() => {
    fetch("https://countriesnow.space/api/v0.1/countries/iso")
      .then((res) => res.json())
      .then((data) => setCountrycodes(data.data));
  }, []);

  return (
    <div>
      <h1>Hello from Countries</h1>
      <div className="countries">
        {countries.map((country) => (
          <Country name={country.name} capital={country.capital}></Country>
        ))}
        {countryflags.map((country) => (
          <Country flag={country.flag}></Country>
        ))}
        {countrycodes.map((codes) => {
          <Country key={codes.Iso3}></Country>;
        })}
      </div>
    </div>
  );
};

export default Countries;
