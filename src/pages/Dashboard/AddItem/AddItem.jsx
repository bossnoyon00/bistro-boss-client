import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAxiosJs from "../../../hooks/useAxiosJs";
import Swal from "sweetalert2";


const image_hosting_token = import.meta.env.VITE_Image_Upload_token;
const AddItem = () => {
    const [axiosSecure] = useAxiosJs();
    const { register, handleSubmit, reset } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`
    const onSubmit = data => {
        const formData = new FormData()
        formData.append('image', data.image[0])

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                console.log(imgResponse);
                if (imgResponse.success) {
                    const imgUrl = imgResponse.data.display_url;
                    const { name, price, category, recipe } = data;
                    const newItem = { name, price: parseFloat(price), category, recipe, image: imgUrl }
                    console.log(newItem);
                    axiosSecure.post('/menu', newItem)
                        .then(data => {
                            console.log('after posting new menu item', data.data);
                            if (data.data.insertedId) {
                                reset();
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: 'Item Added Successfully',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                            }
                        })
                }
            })
    };

    console.log(image_hosting_token);
    return (
        <div className="w-full px-10">
            <SectionTitle subHeading={"What's new"} heading={"Add an item"}></SectionTitle>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text font-semibold">Recipe Name</span>
                    </label>
                    <input  {...register("name", { required: true, maxLength: 120 })} type="text" placeholder="Recipe Name" className="input input-bordered w-full " />
                </div>
                <div className="flex gap-5 my-4">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Category*</span>
                        </label>
                        <select defaultValue='Pick One' {...register('category', { required: true })} className="select select-bordered">
                            <option disabled>Pick one</option>
                            <option>Pizza</option>
                            <option>Soup</option>
                            <option>Salad</option>
                            <option>Drinks</option>
                            <option>Deshi</option>
                            <option>Desserts</option>
                        </select>
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-semibold">Price</span>
                        </label>
                        <input {...register('price', { required: true })} type="number" placeholder="Type here" className="input input-bordered w-full " />
                    </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Recipe Details</span>
                    </label>
                    <textarea {...register('recipe', { required: true })} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                </div>

                <div className="form-control w-full my-4dash">
                    <label className="label">
                        <span className="label-text">Item Image*</span>
                    </label>
                    <input  {...register('image', { required: true })} type="file" className="file-input file-input-bordered w-full " />
                </div>
                <input className="btn btn-sm mt-4" type="submit" value="Add Item" />
            </form>
        </div>
    );
};

export default AddItem;