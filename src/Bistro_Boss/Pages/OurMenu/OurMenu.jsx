import React, { useEffect, useState } from 'react';
import Banner from './Component/Banner';
import TodaysOffer from './Component/TodaysOffer';
import DessertsSection from './Component/DessertsSection';
import PizzaSection from './Component/PizzaSection';
import SaladSection from './Component/SaladSection';
import SoupSection from './Component/SoupSection';
import axios from 'axios';

const OurMenu = () => {
    const [todaysOffer, setTodaysOffer] = useState([])
    const [desserts, setDesserts] = useState([])
    const [pizzas, setPizzas] = useState([])
    const [salads, setSalads] = useState([])
    const [soups, setSoups] = useState([])
    useEffect(() => {
        const fetchData = async () => {
        const [offerRes, dessertRes, pizzaRes, saladRes, soupRes] = await Promise.all([
            axios.get('http://localhost:3000/foodMenu?category=offered'),
            axios.get('http://localhost:3000/foodMenu?category=dessert&limit=6'),
            axios.get('http://localhost:3000/foodMenu?category=pizza&limit=9'),
            axios.get('http://localhost:3000/foodMenu?category=salad&limit=8'),
            axios.get('http://localhost:3000/foodMenu?category=soup&limit=6'),
        ]);
  
        setTodaysOffer(offerRes.data);
        setDesserts(dessertRes.data);
        setPizzas(pizzaRes.data);
        setSalads(saladRes.data);
        setSoups(soupRes.data);
        }
        fetchData();
    },[])
    return (
        <div>
            <Banner></Banner>
            <TodaysOffer todaysOffer={todaysOffer}></TodaysOffer>
            <DessertsSection desserts={desserts}></DessertsSection>
            <PizzaSection pizzas={pizzas}></PizzaSection>
            <SaladSection salads={salads}></SaladSection>
            <SoupSection soups={soups}></SoupSection>
        </div>
    );
};

export default OurMenu;