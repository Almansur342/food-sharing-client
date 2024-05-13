import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2'
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from "../../Firebase/AuthProvider";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";


const Update = () => {
  const loadedFood = useLoaderData();
  const{food_image,food_name,food_quantity,pickup_location,donator,expired_date,additional_notes,_id} = loadedFood || {}
  const [startDate, setStartDate] = useState(new Date(expired_date) || new Date());
  const navigate = useNavigate()
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
  });
  const { user } = useContext(AuthContext);
  // console.log(user);
  const { register, handleSubmit, formState: { errors }, } = useForm();

  const onSubmit =async (data) => {
    const { food_image, food_name, pickup_location, additional_notes, food_quantity, food_status,} = data;
    // console.log(user?.email, selectedSubcategory,image,itemName,description,price,rating,customization,time,stockStatus);
    const expired_date = new Date(startDate).toLocaleDateString();
    const info = {
      food_image,
      food_name,
      pickup_location,
      additional_notes,
      food_quantity,
      food_status,
      expired_date,
      donator:{
        image: user?.photoURL,
        name: user?.displayName,
        email: user?.email
      }
    }
    console.log(info);
    try {
      const {data} = await axios.put(`${import.meta.env.VITE_API_URL}/update/${_id}`, info)
      console.log(data)
      if (data.modifiedCount > 0) {
        Toast.fire({
          icon: 'success',
          title: 'Food updated successfully',
        })
      }
      navigate('/myFood')
    } catch (err) {
      console.log(err)
    }
  }

  

  return (
    <form onSubmit={handleSubmit(onSubmit)} className=" space-y-3  rounded py-10 px-16 bg-[#f8f5ef] mt-6 max-w-4xl mx-auto my-10">
      <h1 className="text-3xl text-center font-semibold text-[#34373f] ">Update Your Info</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold text-base">Food Image:</span>
            </label>
            <input type="text" defaultValue={food_image} placeholder="Image" name="food_image" className="input input-bordered"
              {...register("food_image", { required: true })}
            />
            {errors.image && <span className="text-red-500">This field is required</span>}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold text-base">Food Name:</span>
            </label>
            <input type="text" defaultValue={food_name} placeholder="Food name" name="food_name" className="input input-bordered"
              {...register("food_name", { required: true })}
            />
            {errors.itemName && <span className="text-red-500">This field is required</span>}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold text-base">Pickup Location:</span>
            </label>
            <input type="text" defaultValue={pickup_location} placeholder="Pickup Location" name="pickup_location" className="input input-bordered"
              {...register("pickup_location", { required: true })}
            />
            {errors.location && <span className="text-red-500">This field is required</span>}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold text-base">Food Quantity:</span>
            </label>
            <input type="number" defaultValue={food_quantity} placeholder="Food Quantity" name="food_quantity" className="input input-bordered"
              {...register("food_quantity", { required: true })}
            />
            {errors.quantity && <span className="text-red-500">This field is required</span>}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold text-base">Food Status:</span>
            </label>
            <input type="text"
            defaultValue="available"
            placeholder="Food Status" name="food_status" className="input input-bordered"
              {...register("food_status", { required: true })}
            />
            {errors.status && <span className="text-red-500">This field is required</span>}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold text-base">  Expired Date:</span>
            </label>
            <DatePicker
            className="border p-2 rounded-md"
            selected={startDate}  onChange={(date) => setStartDate(date)} />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold text-base">Additional notes:</span>
            </label>
            <input type="text" defaultValue={additional_notes} placeholder=" Additional notes" name="additional_notes" className="input input-bordered"
              {...register("additional_notes", { required: true })}
            />
            {errors.additional_notes && <span className="text-red-500">This field is required</span>}
          </div>
          <div className="form-control relative">
            <label className="label">
              <span className="label-text font-semibold text-base">Donar Name:</span>
            </label>
            <input
              type="text"
              value={user?.displayName}
              className="input input-bordered appearance-none focus:outline-none"
            />
            {errors.password && <span className="text-red-500">This field is required</span>}
          </div>

          <div className="form-control relative">
            <label className="label">
              <span className="label-text font-semibold text-base">Donar Email:</span>
            </label>
            <input
              type="email"
              value={user?.email}
              className="input input-bordered  appearance-none focus:outline-none"
            />
            {errors.email && <span className="text-red-500">This field is required</span>}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold text-base">Donar Image:</span>
            </label>
            <input type="text"
              value={user?.photoURL}
              placeholder="Image" name="image" className="input input-bordered appearance-none focus:outline-none"
              {...register("image",)}
            />
            {errors.image && <span className="text-red-500">This field is required</span>}
          </div>
      </div>
      <div className="form-control">
        <button className="btn mt-6 bg-[#ffb606] text-white text-base lg:text-lg mb-3 uppercase">Update</button>
      </div>
    </form>
  );
};

export default Update;