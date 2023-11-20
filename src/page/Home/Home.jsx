import React from 'react';
import Banner from '../../components/Banner/Banner';
import DisplayService from '../../components/DisplayService/DisplayService';
import Blogs from '../../components/Blogs/Blogs';
import Choose from '../../components/Choose/Choose';
import Services from '../../components/Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <DisplayService></DisplayService>
            <Blogs></Blogs>
            <Choose></Choose>
            <Services></Services>
        </div>
    );
};

export default Home;