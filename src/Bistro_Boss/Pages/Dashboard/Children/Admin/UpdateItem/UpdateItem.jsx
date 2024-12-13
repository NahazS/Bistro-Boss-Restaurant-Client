import React from 'react';
import useAxiosSecure from '../../../../../Hooks/useAxiosSecure';
import axios from 'axios';
import SectionTitle from '../../../../../AllCommonDiv/SectionTitle';
import ItemForm from '../../../../../AllCard/ItemForm';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateItem = () => {
    const item = useLoaderData()
    const axiosSecure = useAxiosSecure()
    const image_host_api = import.meta.env.VITE_IMAGE_HOST
    const onSubmit = async (data) => {
        const image = {image: data.photo[0]}
        console.log(image)
        if(data.photo[0])
        {
            const res = await axios.post(`${image_host_api}`,image, {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            })
            if(res.data.success)
            {
                const menuItem = {
                    name: data.name,
                    category: data.category,
                    price: parseFloat(data.price),
                    recipe: data.recipe,
                    image: res.data.data.display_url
                }
                const menuRes = await axiosSecure.patch(`/foodMenu/${item._id}`, menuItem);
                if(menuRes.data.modifiedCount > 0){
                    // show success popup
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${data.name} is added to the menu.`,
                        showConfirmButton: false,
                        timer: 1500
                      });
                }
            }
        } else{
            const menuItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
            }
            const menuRes = await axiosSecure.patch(`/foodMenu/${item._id}`, menuItem);
            if(menuRes.data.modifiedCount > 0){
                // show success popup
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is added to the menu.`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        }
    }
    return (
        <div className='flex flex-col items-center w-full px-5 xl:px-0'>
            <SectionTitle title={"UPDATE ITEM"} subTitle={"What's new?"}></SectionTitle>
            <ItemForm formName={"Update Recipe"} onSubmit={onSubmit} item={item}></ItemForm>
        </div>
    );
};

export default UpdateItem;