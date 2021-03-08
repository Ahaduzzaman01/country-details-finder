import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const CountryDetails = () => {
    const {countryName} = useParams();

    const [countries, setCountries] = useState([]);

    useEffect(() => {
    const url = `https://restcountries.eu/rest/v2/name/${countryName}`;
      fetch(url)
      .then(res => res.json())
      .then(data => setCountries(data))
    }, [countryName])

    const targetedCountry = countries.find(country => country.name === countryName)
    console.log(targetedCountry)

    const {name, area, capital, flag, region, population} = targetedCountry || {};


    return (
            <div class="row-cols-1 row-cols-md-3 g-4 mt-2">
                <div class="m-auto shadow">
                    <div class="card h-100">
                        <img class="" src={flag} alt=""/>
                        <div class="card-body text-center">
                            <h3 class="card-title"><strong>Name: {name}</strong></h3>
                            <h4 class="card-text">Capital: {capital}</h4>
                            <h5 class="card-text">Region: {region}</h5>
                            <p class="card-text">Area: {area}</p>
                            <p class="card-text">Population: {population}</p>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default CountryDetails;