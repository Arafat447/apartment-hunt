import React from 'react';
import './Service.scss';
import apartment from '../../images/logos/apartment.png'
import affordable from '../../images/logos/affordable.png'
import smilyMan from '../../images/logos/smilyMan.png'
const Service = () => {
    return (
        <div className='container mb-5 pb-5'>
            <div className='service-header-text d-flex align-items-center flex-column px-3'>
                <p className='text-color mb-2'>Service</p>
                <h2
                    style={{ lineHeight: '45px' }}
                    className='text-color text-center font-weight-bold mb-5 pb-4'>
                    We're an agency tailored to all <br />
                    clients' needs that always delivers
                </h2>
            </div>

            <div className='service-task row'>
                <div className="col-md-4 d-flex justify-content-center align-items-center flex-column px-3">
                    <div className="service-img">
                        <img
                            className="mb-4"
                            height='90px'
                            src={apartment}
                            alt="apartment-logo" />
                    </div>
                    <div className="service-Name text-color">
                        <h5 className='font-weight-bold mb-3'>Wide Range of properties</h5>
                    </div>
                    <div className="service-Description p-custom text-center">
                        With a robust selection of popular <br />
                        properties on hand, as well as <br />
                        leading properties from experts.
                    </div>
                </div>
                <div className="col-md-4 d-flex justify-content-center align-items-center flex-column px-3">
                    <div className="service-img">
                        <img
                            className="mb-4"
                            height='90px'
                            src={affordable}
                            alt="apartment-logo" />
                    </div>
                    <div className="service-Name text-color">
                        <h5 className='font-weight-bold mb-3'>Financing Made Easy</h5>
                    </div>
                    <div className="service-Description p-custom text-center">
                        Our stress-free finance department <br />
                        that can find financial solutions to <br />
                        save you money.
                    </div>
                </div>
                <div className="col-md-4 d-flex justify-content-center align-items-center flex-column px-3">
                    <div className="service-img">
                        <img
                            className="mb-4"
                            height='90px'
                            src={smilyMan}
                            alt="apartment-logo" />
                    </div>
                    <div className="service-Name text-color">
                        <h5 className='font-weight-bold mb-3'>Trusted by Thousands</h5>
                    </div>
                    <div className="service-Description p-custom text-center">
                        10 new offers every day. 350 offers <br />
                        on site, trusted by a community of <br />
                        thousands of users.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;