import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { UserContext } from '../../App';
import UserBooking from '../UserBooking/UserBooking';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHdd, faPlus } from '@fortawesome/free-solid-svg-icons'
import brandImg from '../../images/logos/Logo.png'
import Review from '../Review/Review';

const UserDashbaord = () => {
    const [placedOrders, setPlacedOrders] = useState([])
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [preloader, setPreloader] = useState(true)
    const [isBookingList, setIsBookingList] = useState(true)
    const [isReview, setIsReview] = useState(false)

    const handleBookingList = () => {
        setIsBookingList(true);
        setIsReview(false);
    }

    const handleReview = () => {
        setIsBookingList(false);
        setIsReview(true);
    }

    return (
        <div className='dashboard-container'>
            <div className='row px-md-5 pt-3 mt-3'>
                <div className="col-md-2 d-flex flex-column">
                    <div>
                        <Link to='/home'>
                            <img style={{ height: '50px' }} src={brandImg} alt="brand-img" />
                        </Link>
                    </div>

                    <div>
                        <div className='mt-5'>
                            <NavLink to='/dashboard/bookingList' activeClassName='nav-active' onClick={handleBookingList} className='text-decoration-none text-success ml-3 mb-4'><FontAwesomeIcon className="mr-1" icon={faHdd} /> My Rent</NavLink>
                        </div>
                        <div className='mt-2'>
                            <NavLink to='/dashboard/review' activeClassName='nav-active' onClick={handleReview} className='text-decoration-none text-success ml-3 mb-4'><FontAwesomeIcon className="mr-1" icon={faPlus} />Add Review</NavLink>
                        </div> 
                    </div>
                </div>

                <div className="col-md-9">
                    <div className='d-flex justify-content-between align-items-center'>
                        <div className='mt-md-2 mt-4'>
                            <h4>{isBookingList && 'My Rent'}
                                {isReview && 'Review'}
                            </h4>
                        </div>
                        <div className='d-flex align-items-center mt-md-1 mt-4'>
                            <div className='mr-2'>
                                <img style={{ height: '43px', borderRadius: '50%' }} src={loggedInUser.image} alt="" />
                            </div>
                            <div>
                                <h6 className='mb-0'>{loggedInUser.name}</h6>
                            </div>
                        </div>
                    </div>

                    {/* conditional div render */}
                    <div className="mt-4" style={{ backgroundColor: '#F4F7FC' }}>
                        {isBookingList && <UserBooking />}
                        {isReview && <Review />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserDashbaord;