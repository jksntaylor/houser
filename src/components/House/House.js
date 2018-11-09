import React from 'react';

export default function House (props) {
    const {id, name, address, city, state, zip, img, mortgage, rent} = props.houseData;
    return (
        <div>
            <h1>{name}</h1>
            <h2>{address}</h2>
            <h3>{city}</h3>
            <h3>{state}</h3>
            <h4>{zip}</h4>
            <img src={img} alt=''/>
            <h2>{mortgage}</h2>
            <h2>{rent}</h2>
            <button onClick={() => {props.deleteHouse(id)}}>Delete</button>
        </div>
    )
}