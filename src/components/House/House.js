import React from 'react';

export default function House (props) {
    const {id, name, address, city, state, zip, img, mortgage, rent} = props.houseData;
    return (
        <div className='house-container'>
            <img src={img} alt=''/>
            <div className='text-info'>
                <h6>Property Name: {name}</h6>
                <h6>Address: {address}</h6>
                <h6>City :{city}</h6>
                <h6>State: {state}</h6>
                <h6>Zip Code: {zip}</h6>
            </div>
            <div className='money-info'>
                <h6>Monthly Mortgage: {mortgage}</h6>
                <h6>Monthly Rent: {rent}</h6>
            </div>
            <div className='delete-button-container'>
                <button className='delete-button' onClick={() => {props.deleteHouse(id)}}>X</button>
            </div>
        </div>
    )
}