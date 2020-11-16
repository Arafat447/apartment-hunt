import React from 'react';
import './BookingForm.scss'

const BookingForm = () => {
    return (
        <div className='bg-custom px-4 pt-5 pb-4 rounded'>
            <form>
                <input className='form-control p-4' placeholder='Full Name' type="text" name="name" />
                <input className='form-control p-4' placeholder='Phone No.' type="text" name="phone" />
                <input className='form-control p-4' placeholder='Email Address' type="text" name="email" />
                <textarea className='form-control p-4' rows='4' placeholder='Message' type="text" name="message" />
                <button className='btn btn-block btn-custom text-white'>Request Booking</button>
            </form>
        </div>
    );
};

export default BookingForm;