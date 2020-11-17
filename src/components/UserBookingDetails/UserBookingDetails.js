import React from 'react';

const UserBookingDetails = ({ placedOrder }) => {
    console.log(placedOrder);
    return (
        <>
            <tbody>
                <tr className='bg-white text-center'>
                    <th scope="row">{placedOrder.house}</th>
                    <td>{placedOrder.price}</td>
                    <td>
                        <button className='btn btn-custom text-white'>View Details</button>
                    </td>
                </tr>
            </tbody>
        </>
    );
};

export default UserBookingDetails;