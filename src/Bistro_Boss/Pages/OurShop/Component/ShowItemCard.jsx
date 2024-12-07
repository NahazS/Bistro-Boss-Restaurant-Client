import React, { useEffect, useState } from 'react';
import FoodCard from '../../../AllCard/FoodCard';


const ShowItemCard = ({category}) => {
    const [showFood, setShowFood] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPage, setTotalPage] = useState(1)
    const limit = 8
    const fetchData = async (page = 1) => {
        const res = await fetch(`http://localhost:3000/foodMenu?category=${category}&page=${page}&limit=${limit}`);
        const data = await res.json();
        setShowFood(data.data);
        setCurrentPage(data.currentPage);
        setTotalPage(data.totalPage);
    };
    useEffect(()=> {
        window.scrollTo(100, 500);
        fetchData(currentPage)
    },[currentPage])

    const handlePageChange = (page) => {
        if(page >= 1 && page <= totalPage)
        {
            setCurrentPage(page)
        }
    }
    return (
        <div className='max-w-[990px] px-5 xl:px-0 mx-auto'>
            <div className='mt-[30px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] mx-auto'>
                {
                    showFood.map(food => <FoodCard key={food._id} food={food}></FoodCard>)
                }
            </div>
            <div className="flex justify-center mt-5 gap-2">
                <button className="btn" disabled={currentPage === 1} onClick={() => handlePageChange(currentPage - 1)}>Previous</button>
                {[...Array(totalPage)].map((_, index) => (
                    <button key={index} className={`btn ${currentPage === index + 1 ? 'btn-primary' : ''}`} onClick={() => handlePageChange(index + 1)}>
                        {index + 1}
                    </button>
                ))}
                <button className="btn" disabled={currentPage === totalPage} onClick={() => handlePageChange(currentPage + 1)}>Next</button>
            </div>
        </div>
    );
};

export default ShowItemCard;