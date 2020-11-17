import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import Preloader from '../Preloader/Preloader';
import UserBookingDetails from '../UserBookingDetails/UserBookingDetails';

const UserBooking = () => {
    const [placedOrders, setPlacedOrders] = useState([])
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [preloader, setPreloader] = useState(true);

    useEffect(() => {
        fetch('https://apartment-hunt-scic.herokuapp.com/bookings?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => {
                setPlacedOrders(data);
                console.log(data);
                setPreloader(false);
            })
    }, [loggedInUser.email])

    return (
        <div className='row d-flex justify-content-center'>

            {
                preloader && <Preloader />
            }

            <table class='table table-white my-4 mx-2 col-md-10'>
                <thead className='thead-dark rounded'>
                    <tr className='text-center'>
                        <th scope="col">House Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                {/* pass data to placed order list components */}
                {
                    placedOrders.map(placedOrder => <UserBookingDetails placedOrder={placedOrder} key={placedOrder._id} />)
                }
            </table>

        </div >
    );
};

export default UserBooking;