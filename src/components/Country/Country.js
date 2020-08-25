import React from 'react';
import './Country.css';

const Country = (props) => {
    const {name, flag, capital, region, population, area } = props.country;
    const handleAddCountry = props.handleAddCountry;
    return (
        <div className='countryStyle'>
            <h4>This is: {name}</h4>
            <img id="imgStyle" src={flag} alt=""/>
            <h6>Capital: {capital}</h6>
            <p>Area: {area}</p>
            <p>Population: {population}</p>
            <p><small>Region: {region}</small></p>
            <button onClick={() =>handleAddCountry(props.country)}>Add Country</button>

        </div>
    );
};

export default Country;