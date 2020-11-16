import React from 'react';
import Header from '../components/Header/Header';
import HomeBanner from '../components/HomeBanner/HomeBanner';
import HouseList from '../components/HouseList/HouseList';
import Service from '../components/Service/Service';

const Home = () => {

    document.title = 'Apartment Hunt - Homepage';
    
    return (
        <>
          <Header />  
          <HomeBanner />
          <HouseList />
          <Service />
        </>
    );
};

export default Home;