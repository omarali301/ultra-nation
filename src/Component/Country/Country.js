import React from 'react';

const Country = (props) => {
    const {name,population,region,flag} = props.country
    const flagStyle = {
        height :" 100px"
    }
   const addCountryClick = props.addCountryClick;
    return (
        <div>
            <h4>This is a : {name}</h4>
            <p>Population : {population}</p>
            <p><small>Region : {region}</small></p>
            <img style={flagStyle} src={flag} alt=""/><br/>
            <button onClick={() => addCountryClick(props.country)}>add country</button>
        </div>
    );
};

export default Country;