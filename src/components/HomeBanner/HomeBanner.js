import React from 'react';
import './HomeBanner.scss'

const HomeBanner = () => {
    return (
        <div className='homebanner-section mb-3'>
            <div class="layer d-flex align-items-center justify-content-center flex-column">
                <div>
                    <h1 className='text-white mb-4'>
                        FIND YOUR HOUSE RENT
                </h1>
                </div>
                <div className='row d-flex align-items-center'>
                    <div className='col-8'>
                        <input
                            style={{ width: '303px' }}
                            className='form-control mb-0'
                            type="text"
                            name="" />
                    </div>
                    <div className='col-4'>
                        <button className='btn btn-custom text-white ml-1 py-2 px-3'>Find Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;