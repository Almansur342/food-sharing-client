import { useContext} from "react";
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from "../../Firebase/AuthProvider";

const AddFood = () => {
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
 
  const onSubmit = data => {
    const { image, item_name, short_description, price, rating, customization, processing_time, stock_status } = data;
    const email = user?.email
    // console.log(user?.email, selectedSubcategory,image,itemName,description,price,rating,customization,time,stockStatus);
    const info = {email,image,item_name, short_description, price, rating, customization, processing_time, stock_status}
    console.log(info);
    fetch('https://art-craft-server-orpin.vercel.app/addProduct',{
      method: 'POST',
      headers:{
        'content-type': 'application/json'
      },
      body:JSON.stringify(info)
    })
    .then(res => res.json())
    .then(data =>{
      console.log(data);
      if(data.insertedId){
        Toast.fire({
          icon: 'success',
          title: 'Product added successfully',
        })
      }
      navigate('/myArtCraft')
    })
  }
  

  
  return (
    <form onSubmit={handleSubmit(onSubmit)} className=" space-y-3  rounded py-10 px-16 bg-[#f8f5ef] mt-6">
      <h1 className="text-3xl text-center font-semibold text-[#34373f] ">Craft Your Collection</h1>
      <p className="text-xl font-medium text-center">Welcome to the Add Craft Item page, where creativity <br /> meets curation.</p>
      <div className="flex justify-between gap-10">
      <div className="w-3/5">
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold text-base">Food Image:</span>
          </label>
          <input type="text" placeholder="Image" name="image" className="input input-bordered"
            {...register("image", { required: true })}
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
          <input type="text" placeholder="short description" name="location" className="input input-bordered"
            {...register("location", { required: true })}
          />
          {errors.location && <span className="text-red-500">This field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold text-base">Food Quantity:</span>
          </label>
          <input type="number" placeholder="Food Quantity" name="quantity" className="input input-bordered"
            {...register("quantity", { required: true })}
          />
          {errors.quantity && <span className="text-red-500">This field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold text-base">Food Status:</span>
          </label>
          <input type="text" placeholder="Yes/No" name="status" className="input input-bordered"
            {...register("status", { required: true })}
          />
          {errors.status && <span className="text-red-500">This field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold text-base">  Expired Date:</span>
          </label>
          <input type="text" placeholder=" Expired Date" name="expired_date" className="input input-bordered"
            {...register("expired_date", { required: true })}
          />
          {errors.data && <span className="text-red-500">This field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold text-base">Additional notes:</span>
          </label>
          <input type="text" placeholder=" Expired Date" name="note" className="input input-bordered"
            {...register("data", { required: true })}
          />
          {errors.data && <span className="text-red-500">This field is required</span>}
        </div>
      </div>

      <div className="w-2/5 shadow-2xl mt-10 bg-white h-96 px-4 py-10">
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
            <span className="label-text font-semibold text-base">Food Image:</span>
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