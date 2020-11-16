import React from 'react';
import Header from '../components/Header/Header';
import HomeBanner from '../components/HomeBanner/HomeBanner';
import HouseList from '../components/HouseList/HouseList';

const Home = () => {

    document.title = 'Apartment Hunt - Homepage';
    
    return (
        <>
          <Header />  
          <HomeBanner />
          <HouseList />
        </>
    );
};

export default Home;