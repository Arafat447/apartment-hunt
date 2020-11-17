import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';
import swal from 'sweetalert';
import { UserContext } from '../../App';
import './BookingForm.scss'

const BookingForm = () => {
    const { register, handleSubmit, errors } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    let history = useHistory();

    const onSubmit = data => {
        console.log(data);
        if (loggedInUser.isSignedIn) {
            fetch('https://apartment-hunt-scic.herokuapp.com/addBookings', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ ...data, status: 'pending' })
            })
                .then(res => res.json())
                .then(data => {
                    if (data) {
                        swal('Good Job', 'Your Ordered Placed!', 'success');
                        history.push('/dashboard');
                    }
                    else {
                        swal('Error', 'Something Went Wrong', 'error');
                    }
                })
        } else {
            history.push('/login')
        }
    };

    return (
        <div className='bg-custom px-4 pt-5 pb-4 rounded'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <input name="name" ref={register({ required: true })} type="text" className="form-control p-4" placeholder="Full Name" />
                    {errors.name && <span>This field is required</span>}
                </div>
                <div className="form-group">
                    <input name="phone" ref={register({ required: true })} type="text" className="form-control p-4" placeholder="Phone No." />
                    {errors.phone && <span>This field is required</span>}
                </div>
                <div className="form-group">
                    <input name="email" ref={register({ required: true })} type="text" className="form-control p-4" placeholder="Email Address" />
                    {errors.email && <span>This field is required</span>}
                </div>
                <div className="form-group">
                    <textarea name="message" ref={register({ required: true })} type="text" className="form-control p-4" rows='4' placeholder="Message" />
                    {errors.message && <span>This field is required</span>}
                </div>

                <input className='btn btn-block btn-custom text-white' type="submit" value="Request Booking" />
            </form>

        </div>
    );
};

export default BookingForm;