import React, { useContext, useEffect, useState } from 'react';
import { SelectedHouseContext } from '../../App';
import BookingForm from '../../components/BookingForm/BookingForm';
import Header from '../../components/Header/Header';
import HomeBanner2 from '../../components/HomeBanner2/HomeBanner2';
import './HouseDetails.scss'

const HouseDetails = () => {

    const [selectedHouse, setSelectedHouse] = useContext(SelectedHouseContext)
    const [houseDetails, setHouseDetails] = useState([])
    const [imageData, setImageData] = useState([])
    const [priceDesc, setPriceDesc] = useState([])
    const [propertyDesc, setPropertyDesc] = useState([])

    const { image } = houseDetails;
    const { rentMonth, service, security, release } = priceDesc;
    const { addressArea, size, floor, category, facilies, additinal } = propertyDesc;
    const { one, two, three, four } = imageData;

    useEffect(() => {
        fetch(`https://apartment-hunt-scic.herokuapp.com/house/${selectedHouse.name}`)
            .then(res => res.json())
            .then(data => {
                setHouseDetails(data[0])
                setImageData(data[0].details.images);
                setPriceDesc(data[0].details.price);
                setPropertyDesc(data[0].details.property);
            })
    }, [])

    return (
        <>
            <Header />
            <HomeBanner2 />
            <div className='container'>
                <div className='row'>
                    <div className='col-md-7'>
                        <div className='apartment-image'>
                            <img
                                height='300px'
                                width='100%'
                                src={image}
                                alt='apartment-img' />
                            <div className='apartment-image-little d-flex justify-content-between mt-3 mb-3'>
                                <img
                                    height='100px'
                                    src={one} alt="" />
                                <img
                                    height='100px'
                                    src={two} alt="" />
                                <img
                                    height='100px'
                                    src={three} alt="" />
                                <img
                                    height='100px'
                                    src={four} alt="" />
                            </div>
                        </div>

                        <div className="mt-5 house-description">
                            <div className='d-flex justify-content-between mb-4'>
                                <h3 className='font-weight-bold'>
                                    {selectedHouse.name}
                                </h3>
                                <h3 className='font-weight-bold'>
                                    ${selectedHouse.price}
                                </h3>
                            </div>

                            <div className='room-description mb-5'>
                                <p>{addressArea}</p>
                            </div>

                            <div className='price-details'>
                                <h5 className='font-weight-bold'>Price Details-</h5>
                                <p>Rent/Month: {rentMonth}(negotiable)</p>
                                <p>Service Charge: {service}/= Tk per month, subject to change</p>
                                <p>Security Deposit: {security}</p>
                                <p>Flat Release Policy: {release}</p>
                            </div>

                            <div className='property-details mt-5'>
                                <h5 className='font-weight-bold'>Property Details-</h5>
                                <p>Address {'&'} Area: {addressArea}</p>
                                <p>Flat Size: {size}</p>
                                <p>Floor: {floor}</p>
                                <p>Room Category: {category}</p>
                                <p>Facilities: {facilies}</p>
                                <p>Additional Facilities: {additinal}</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <BookingForm />
                    </div>
                </div>
            </div>
        </>
    );
};

export default HouseDetails;