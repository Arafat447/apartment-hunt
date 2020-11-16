import React, { useEffect, useState } from 'react';
import House from '../House/House';

const HouseList = () => {
    const [houses, setHouses] = useState([])

    console.log(houses);

    useEffect(() => {
        fetch('https://apartment-hunt-scic.herokuapp.com/houses')
        .then(res => res.json())
        .then(data => setHouses(data));
    })

    return (
        <div className='container'>
            <div className='house-gallery-intro d-flex align-items-center flex-column'>
                <p>House Rent</p>
                <h3 className='mb-5 text-center font-weight-bold'>
                    Discover the latest Rent <br/>
                    available today.
                </h3>
            </div>

            <div className='row'>
            {
                houses.map(house => <House house={house} key={house._id}/>)
            }
            </div>
        </div>
    );
};

export default HouseList;