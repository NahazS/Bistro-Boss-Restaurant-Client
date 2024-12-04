import React, { useEffect, useState } from 'react';
import Banner from './Component/Banner';
import OrderOnline from './Component/OrderOnline';
import AboutUs from './Component/AboutUs';
import OurMenuHome from './Component/OurMenuHome';
import ContactUsHome from './Component/ContactUsHome';
import ChefRecommend from './Component/ChefRecommend';
import FromOurMenu from './Component/FromOurMenu';
import ReviewSection from './Component/ReviewSection';

const Home = () => {
    const [food, setFood] = useState([])
    useEffect(() => {
        fetch('/fakeData.json')
        .then(res => res.json())
        .then(data => setFood(data))
    },[])
    const showMenu = food.slice(0,6)
    const chefFood = food.slice(7,10)
    return (
        <div>
            <div className='h-[500px] md:h-[800px]'><Banner></Banner></div>
            <OrderOnline></OrderOnline>
            <AboutUs></AboutUs>
            <OurMenuHome menu={showMenu}></OurMenuHome>
            <ContactUsHome></ContactUsHome>
            <ChefRecommend chefFood={chefFood}></ChefRecommend>
            <FromOurMenu></FromOurMenu>
            <ReviewSection></ReviewSection>
        </div>
    );
};

export default Home;