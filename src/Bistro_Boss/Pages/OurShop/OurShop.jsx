import React, { useEffect, useState } from 'react';
import SectionCard from '../../AllCard/SectionCard';
import { NavLink, Outlet } from 'react-router-dom';
import {Tabs, TabList, Tab, PanelList, Panel} from 'react-tabtab';
import ShowItemCard from './Component/ShowItemCard';
const OurShop = () => {
    const section = {image: 'https://i.ibb.co.com/JHmcwhb/banner2.jpg', title: "OUR SHOP", description: "Would you like to try a dish?"}
    const [AllFood, setAllFood] = useState([])
    const [selectedTab, setSelectedTab] = useState(1)
    console.log(selectedTab)
    useEffect
    return (
        <div>
            <div className='w-screen h-[600px]'><SectionCard section={section}></SectionCard></div>
            <div className='flex items-center  place-items-center justify-center max-w-screen'>
                <div role="tablist" className="tabs tabs-bordered">
                    <input type="radio" name="my_tabs_1" role="tab" onInput={() => setSelectedTab(1)} className={`tab ${selectedTab === 1 && 'tab-active'}`} aria-label="SALAD" />
                    <div role="tabpanel" className="tab-content p-10"><ShowItemCard category={"salad"}></ShowItemCard></div>

                    <input type="radio" name="my_tabs_1" role="tab" onInput={() => setSelectedTab(2)} className={`tab ${selectedTab === 2 && 'tab-active'}`} aria-label="PIZZA" />
                    <div role="tabpanel" className="tab-content p-10"><ShowItemCard category={"pizza"}></ShowItemCard></div>

                    <input type="radio" name="my_tabs_1" role="tab" onInput={() => setSelectedTab(3)} className={`tab ${selectedTab === 3 && 'tab-active'}`} aria-label="SOUPS" />
                    <div role="tabpanel" className="tab-content p-10"><ShowItemCard category={"soup"}></ShowItemCard></div>
                    <input type="radio" name="my_tabs_1" role="tab" onInput={() => setSelectedTab(4)} className={`tab ${selectedTab === 4 && 'tab-active'}`} aria-label="DESSERTS" />
                    <div role="tabpanel" className="tab-content p-10"><ShowItemCard category={"dessert"}></ShowItemCard></div>
                    <input type="radio" name="my_tabs_1" role="tab" onInput={() => setSelectedTab(5)} className={`tab ${selectedTab === 5 && 'tab-active'}`} aria-label="DRINKS" />
                    <div role="tabpanel" className="tab-content p-10"><ShowItemCard category={"drinks"}></ShowItemCard></div>
                </div>
            </div>
            
        </div>
    );
};

export default OurShop;