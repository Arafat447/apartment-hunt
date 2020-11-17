import React, { useContext, useState } from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
import brandImg from '../../images/logos/Logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHdd, faPlus, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { UserContext } from '../../App';
import BookingList from '../BookingList/BookingList';
import AddHouse from '../AddHouse/AddHouse';
import MakeAdmin from '../MakeAdmin/MakeAdmin';

const AdminDashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    let history = useHistory();
    const [isBookingList, setIsBookingList] = useState(true)
    const [isAddHouse, setIsAddHouse] = useState(false)
    const [isMakeAdmin, setIsMakeAdmin] = useState(false)


    const handleBookingList = () => {
        setIsBookingList(true);
        setIsAddHouse(false);
        setIsMakeAdmin(false);
    }

    const handleAddHouse = () => {
        setIsBookingList(false);
        setIsAddHouse(true);
        setIsMakeAdmin(false);
    }

    const handleAdmin = () => {
        setIsBookingList(false);
        setIsAddHouse(false);
        setIsMakeAdmin(true);
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

                    {/* admin portion */}
                    <div>
                        <div className='mt-5'>
                            <NavLink to='/dashboard/bookingList' activeClassName='nav-active' onClick={handleBookingList} className='text-decoration-none text-success ml-3 mb-4'><FontAwesomeIcon className="mr-1" icon={faHdd} /> Booking List</NavLink>
                        </div>
                        <div className='mt-2'>
                            <NavLink to='/dashboard/createHouse' activeClassName='nav-active' onClick={handleAddHouse} className='text-decoration-none text-success ml-3 mb-4'><FontAwesomeIcon className="mr-1" icon={faPlus} /> Add Rent House</NavLink>
                        </div>
                        <div onClick={handleAdmin} className='mt-2'>
                            <NavLink to='/dashboard/makeAdmin' activeClassName='nav-active' className='text-decoration-none text-success ml-3 mb-4'><FontAwesomeIcon className="mr-1" icon={faUserPlus} /> Make Admin</NavLink>
                        </div>
                    </div>
                </div>

                <div className="col-md-9">
                    <div className='d-flex justify-content-between align-items-center'>
                        <div className='mt-md-2 mt-4'>
                            <h4>{isBookingList && 'Booking List'}
                                {isAddHouse && 'Add Rent House'}
                                {isMakeAdmin && 'Make Admin'}
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
                        {isBookingList && <BookingList />}
                        {isAddHouse && <AddHouse />}
                        {isMakeAdmin && <MakeAdmin />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;