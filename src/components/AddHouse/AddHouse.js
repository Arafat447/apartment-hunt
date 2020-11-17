import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
import uploadIcon from '../../images/logos/upload.png'
import './AddHouse.scss'

const AddHouse = () => {
        const { register, handleSubmit, errors } = useForm();
    const [file, setFile] = useState(null);

    const onSubmit = data => {
        const formData = new FormData();
        formData.append('file', file)
        formData.append('title', data.title)
        formData.append('price', data.price)
        formData.append('location', data.location)
        formData.append('bedrooms', data.bedrooms)
        formData.append('bathrooms', data.bathrooms)

        fetch('https://apartment-hunt-scic.herokuapp.com/addHouse', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if(data){
                    swal('Good Job', 'New service created successfully!', 'success');
                }
            })
            .catch(error => {
                swal('Bad Request', 'Something went wrong', 'error');
            })
    };

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    return (
        <div className='row p-md-5 p-5'>

            <form onSubmit={handleSubmit(onSubmit)} className='row d-flex'>

                <div className='col-md-6 mb-3'>
                    <label for='name'>Service Title</label>
                    <input className='form-control mb-1' type="text" placeholder="Enter title" name="title" ref={register({ required: true, maxLength: 80 })} />
                    <p className='text-danger mb-0'>{errors.taskName && '* This field is required'}</p>
                </div>

                <div className='col-md-6 mb-3'>
                    <label for='name'>Price</label>
                    <input className='form-control mb-1' type="text" placeholder="Price" name="price" ref={register({ required: true, maxLength: 80 })} />
                    <p className='text-danger mb-0'>{errors.taskName && '* This field is required'}</p>
                </div>

                <div className='col-md-6 mb-3'>
                    <label for='name'>Location</label>
                    <input className='form-control mb-1' type="text" placeholder="Enter Location" name="location" ref={register({ required: true, maxLength: 80 })} />
                    <p className='text-danger mb-0'>{errors.taskName && '* This field is required'}</p>
                </div>

                <div className='col-md-6 mb-3'>
                    <label for='name'>No of Bedroom</label>
                    <input className='form-control mb-1' type="text" placeholder="Enter no of bedrooms" name="bedrooms" ref={register({ required: true, maxLength: 80 })} />
                    <p className='text-danger mb-0'>{errors.taskName && '* This field is required'}</p>
                </div>

                <div className='col-md-6 mb-3'>
                    <label for='name'>No of Bathrooms</label>
                    <input className='form-control mb-1' type="text" placeholder="Enter no of bathrooms" name="bathrooms" ref={register({ required: true, maxLength: 80 })} />
                    <p className='text-danger mb-0'>{errors.taskName && '* This field is required'}</p>
                </div>

                <div className='col-md-3' style={{ marginTop: '30px' }}>
                    <div className="button-wrapper">
                        <span className="label">
                            <img height='20px' src={uploadIcon} alt="upload-icon" /> Thumbnail
                        </span>
                        <input type="file" onChange={handleFileChange} name="upload" id="upload" class="upload-box" placeholder="Upload File" ref={register({ required: true })} />
                        <p className='text-danger mb-0'>{errors.upload && '* This field is required'}</p>
                    </div>
                </div>

                <div className='position-relative mt-5 pt-5 d-flex'>
                    <input className='btn btn-success btn-block px-5 mt-3 ml-5' type="submit" />
                </div>
            </form>
        </div>
    );
};

export default AddHouse;