import React, { useEffect, useState } from 'react';
import Banner from './Component/Banner';
import TodaysOffer from './Component/TodaysOffer';
import DessertsSection from './Component/DessertsSection';
import PizzaSection from './Component/PizzaSection';
import SaladSection from './Component/SaladSection';
import SoupSection from './Component/SoupSection';

const OurMenu = () => {
    const [foods, setFoods] = useState([])
    useEffect(() => {
        fetch('/fakeData.json')
        .then(res => res.json())
        .then(data => setFoods(data))
    },[])
    // offer Food
    const todaysOffer = foods.filter(food => food.category === "offered")
    // Dessert Food
    const AllDesserts = foods.filter(food => food.category === "dessert")
    const desserts = AllDesserts.slice(0,6)
    // Pizza
    const AllPizzas = foods.filter(food => food.category === "pizza")
    const pizzas = AllPizzas.slice(0,9)
    // Salads
    const AllSalads = foods.filter(food => food.category === "salad")
    const salads = AllSalads.slice(0,8)
    // Soups
    const AllSoups = foods.filter(food => food.category === "soup")
    const soups = AllSalads.slice(0,6)
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