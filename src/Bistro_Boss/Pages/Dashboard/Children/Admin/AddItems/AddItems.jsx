import React from 'react';
import SectionTitle from '../../../../../AllCommonDiv/SectionTitle';
import ItemForm from '../../../../../AllCard/ItemForm';
import axios from 'axios';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../../../Hooks/useAxiosSecure';

const AddItems = () => {
    const axiosSecure = useAxiosSecure()
    const image_host_api = import.meta.env.VITE_IMAGE_HOST
    const onSubmit = async (data) => {
        const image = {image: data.photo[0]}
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
            const menuRes = await axiosSecure.post('/foodMenu', menuItem);
            if(menuRes.data.insertedId){
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
            <SectionTitle title={"ADD AN ITEM"} subTitle={"What's new?"}></SectionTitle>
            <ItemForm formName={"Add Item"} onSubmit={onSubmit}></ItemForm>
        </div>
    );
};

export default AddItems;