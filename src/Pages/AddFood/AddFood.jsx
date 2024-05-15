import {  useState } from "react";
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import useAuth from "../../hooks/useAuth";


const AddFood = () => {
  const [startDate, setStartDate] = useState(new Date());
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
  const { user } = useAuth();
  // console.log(user);
  const { register, handleSubmit, formState: { errors }, } = useForm();

  const onSubmit =async (data) => {
    const { food_image, food_name, pickup_location, additional_notes, food_quantity, food_status, } = data;
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
      const {data} = await axios.post(`${import.meta.env.VITE_API_URL}/addFood`, info)
      console.log(data)
      if (data.insertedId) {
        Toast.fire({
          icon: 'success',
          title: 'Product added successfully',
        })
      }
      navigate('/available')
    } catch (err) {
      console.log(err)
    }
  }
  

  return (
    <form onSubmit={handleSubmit(onSubmit)} className=" space-y-3  rounded py-10 lg:px-16 bg-[#f8f5ef] mt-6">
      <h1 className="text-xl lg:text-3xl text-center font-semibold text-[#34373f] ">Contribute to Our Food Drive</h1>
      <p className="text-base lg:text-xl font-medium text-center">Join hands in ending hunger, one meal at a time. <br /> Donate your surplus food today.</p>
      <div className="flex flex-col lg:flex-row justify-between gap-10">
        <div className="w-full lg:w-3/5">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold text-base">Food Image:</span>
            </label>
            <input type="text" placeholder="Image" name="food_image" className="input input-bordered"
              {...register("food_image", { required: true })}
            />
            {errors.image && <span className="text-red-500">This field is required</span>}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold text-base">Food Name:</span>
            </label>
            <input type="text" placeholder="Food name" name="food_name" className="input input-bordered"
              {...register("food_name", { required: true })}
            />
            {errors.itemName && <span className="text-red-500">This field is required</span>}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold text-base">Pickup Location:</span>
            </label>
            <input type="text" placeholder="Pickup Location" name="pickup_location" className="input input-bordered"
              {...register("pickup_location", { required: true })}
            />
            {errors.location && <span className="text-red-500">This field is required</span>}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold text-base">Food Quantity:</span>
            </label>
            <input type="number" placeholder="Food Quantity" name="food_quantity" className="input input-bordered"
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
            selected={startDate} onChange={(date) => setStartDate(date)} />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold text-base">Additional notes:</span>
            </label>
            <input type="text" placeholder=" Additional notes" name="additional_notes" className="input input-bordered"
              {...register("additional_notes", { required: true })}
            />
            {errors.additional_notes && <span className="text-red-500">This field is required</span>}
          </div>
        </div>

        <div className="w-full lg:w-2/5 shadow-2xl mt-10 bg-white h-96 px-4 py-10">
          <h1 className="text-center text-2xl font-semibold">Donar Information</h1>
          <p className="border-b-2 mx-auto border-b-[#ffb606] w-24 mt-4"></p>
          <div className="form-control relative">
            <label className="label">
              <span className="label-text font-semibold text-base">Name:</span>
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
              <span className="label-text font-semibold text-base">Email:</span>
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
              <span className="label-text font-semibold text-base">Image:</span>
            </label>
            <input type="text"
              value={user?.photoURL}
              placeholder="Image" name="image" className="input input-bordered appearance-none focus:outline-none"
              {...register("image", { required: true })}
            />
            {errors.image && <span className="text-red-500">This field is required</span>}
          </div>
        </div>
      </div>


      <div className="form-control">
        <button className="btn mt-6 bg-[#ffb606] text-white text-base lg:text-lg mb-3 uppercase">Add</button>
      </div>
    </form>
  );
};

export default AddFood;