import React from 'react';
import Header from '../components/Header/Header';
import HomeBanner from '../components/HomeBanner/HomeBanner';

const Home = () => {

    document.title = 'Apartment Hunt - Homepage';
    
    return (
        <>
          <Header />  
          <HomeBanner />
        </>
    );
};

export default Home;