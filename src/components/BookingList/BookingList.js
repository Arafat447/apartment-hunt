import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import PlacedOrderList from '../PlacedOrderList/PlacedOrderList';
import Preloader from '../Preloader/Preloader';

const BookingList = () => {
    const [placedOrders, setPlacedOrders] = useState([])
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [preloader, setPreloader] = useState(true);

    useEffect(() => {
        fetch('https://apartment-hunt-scic.herokuapp.com/bookings?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => {
                setPlacedOrders(data)
                setPreloader(false);
            })
    }, [loggedInUser.email])


    return (
        <div className='row'>

            {
                preloader && <Preloader />
            }

            {/* admin portion */}
            <table class='table table-white my-4 mx-2'>
                <thead className='thead-dark'>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email ID</th>
                        <th scope="col">Phone No</th>
                        <th scope="col">Message</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>
                {/* pass data to placed order list components */}
                {
                    placedOrders.map(placedOrder => <PlacedOrderList placedOrder={placedOrder} key={placedOrder._id} />)
                }
            </table>

        </div >
    );
};

export default BookingList;