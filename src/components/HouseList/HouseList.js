import React, { useEffect, useState } from 'react';
import House from '../House/House';
import Preloader from '../Preloader/Preloader';

const HouseList = () => {
    const [houses, setHouses] = useState([])
    const [preloader, setPreloader] = useState(true)

    useEffect(() => {
        fetch('https://apartment-hunt-scic.herokuapp.com/houses')
        .then(res => res.json())
        .then(data => {
            setHouses(data)
            setPreloader(false)
        });
    }, [])

    return (
        <div className='container mb-5 pb-3'>
            <div className='house-gallery-intro d-flex align-items-center flex-column'>
                <p>House Rent</p>
                <h3 className='mb-5 text-center font-weight-bold'>
                    Discover the latest Rent <br/>
                    available today.
                </h3>
            </div>

            <div className='row'>
            {
                preloader && <Preloader />
            }
            {
                houses.map(house => <House house={house} key={house._id}/>)
            }
            </div>
        </div>
    );
};

export default HouseList;