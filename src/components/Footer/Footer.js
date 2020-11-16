import React from 'react';
import './Footer.scss'
import location from '../../images/logos/location.png'
import { Link } from 'react-router-dom';
import fbIcon from '../../images/logos/fb-footer.png'
import youtubeIcon from '../../images/logos/youtube.png'
import linkedInIcon from '../../images/logos/linkedin.png'
import instagramIcon from '../../images/logos/instagram.png'

const Footer = () => {
    return (
        <div className='bg-footer'>
            <div className='footer container py-5'>
                <div className="row">
                    <div className="col-md-4">
                        <p className='text-white'>
                            <img
                                height='20px'
                                className='mr-2'
                                src={location}
                                alt="" />
                        H#340 (4th Floor), Road #24, <br />
                        New DOHS, Mohakhali, Dhaka, Bangladesh <br />
                        Phone: 018XXXXXXXX <br />
                        E-mail: info@company.com <br />
                        </p>
                    </div>
                    <div className="col-md-2 d-flex flex-column">
                        <h5 className='text-white mb-4'>Company</h5>
                        <Link className='text-white mb-2'>About</Link>
                        <Link className='text-white mb-2'>Site Map</Link>
                        <Link className='text-white mb-2'>Support Center</Link>
                        <Link className='text-white mb-2'>Terms Conditions</Link>
                        <Link className='text-white mb-2'>Submit Listing</Link>
                    </div>
                    <div className="col-md-2 d-flex flex-column">
                        <h5 className='text-white mb-4'>Quick Links</h5>
                        <Link className='text-white mb-2'>Quick Links</Link>
                        <Link className='text-white mb-2'>Rentals</Link>
                        <Link className='text-white mb-2'>Sales</Link>
                        <Link className='text-white mb-2'>Contact</Link>
                        <Link className='text-white mb-2'>Terms Conditions</Link>
                        <Link className='text-white mb-2'>Our blog</Link>
                    </div>
                    <div className="col-md-3 d-flex flex-column">
                        <h5 className='text-white mb-4'>About Us</h5>
                        <p className='mb-3 text-white mb-4 pb-2'>
                            We are the top real estate <br />
                        agency in Sydney, with agents <br />
                        available to answer any <br />
                        question 24/7.
                        </p>
                        <div className="d-flex flex-row">
                            <Link>
                                <img
                                    height='25px'
                                    className='mr-3'
                                    src={fbIcon}
                                    alt="fb-icon" />
                            </Link>
                            <Link>
                                <img
                                    height='25px'
                                    className='mr-3'
                                    src={instagramIcon}
                                    alt="instagram-icon" />
                            </Link>
                            <Link>
                                <img
                                    height='25px'
                                    className='mr-3'
                                    src={linkedInIcon}
                                    alt="linkedIn-icon" />
                            </Link>
                            <Link>
                                <img
                                    height='25px'
                                    className='mr-3'
                                    src={youtubeIcon}
                                    alt="youtube-icon" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Footer;