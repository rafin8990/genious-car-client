import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Address from '../Address/Address';
import PopularProduct from '../PopularProduct/PopularProduct';
import Services from '../Services/Services';
import Slider from '../Slider/Slider';
import TeamMember from '../TeamMember/TeamMember';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <AboutUs></AboutUs>
            <Services></Services>
            <Address></Address>
            <PopularProduct></PopularProduct>
            <TeamMember></TeamMember>
        </div>
    );
};

export default Home;