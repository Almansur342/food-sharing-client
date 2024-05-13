import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Firebase/AuthProvider";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";


const Details = () => {
  const loadedFood = useLoaderData();
  // console.log(loadedFood);
  const { food_image, food_name, food_quantity, pickup_location, donator, expired_date, additional_notes, status } = loadedFood || {}

  const { user } = useContext(AuthContext);
  // const requestor = user?.email;
  const { register, handleSubmit, formState: { errors }, } = useForm();
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

  const onSubmit = async (data) => {
    const { food_image, food_name, pickup_location, additional_notes, food_quantity, food_status,requestor } = data;
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
      requestor,
      donator: {
        image: donator?.image,
        name: donator?.name,
        email: donator?.email
      }
    }

    try {
      const {data} = await axios.post(`${import.meta.env.VITE_API_URL}/request`, info)
      console.log(data)
      Toast.fire({
        icon: 'success',
        title: 'Food updated successfully',
      })
      navigate('/myFood')  
    
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div className="container mx-auto px-4 my-10 flex justify-between gap-6">
      <div className="w-3/5 bg-[#f8f5ef] rounded p-5">
        <section className="">
          <div className="gap-8 flex flex-col md:flex-row  lg:flex-row ">
            <div className=" bg-[#f7f4ef] h-40 w-96 lg:mt-3">
              <img src={food_image} alt="" className="object-cover rounded" />
            </div>
            <div className="flex flex-col  rounded-sm lg:max-w-xl xl:max-w-xl lg:text-left">
              <h1 className="text-lg lg:text-2xl text-[#131313] font-bold mb-3">{food_name}</h1>
              <hr className="my-4" />
              <h1 className="text-base font-bold text-[#131313B3]"><span className="text-lg text-[#131313]"> <span className="text-[#ffb606]">Addition Notes</span>: </span>{additional_notes}</h1>
              <hr className="my-4" />
              <div className="flex items-center gap-10 mb-6">
                <div>
                  <h1 className="text-[#131313B3] text-base"><span className="text-[#ffb606]">Food Quantity</span>: {food_quantity}</h1>
                  <h1 className="text-[#131313B3] text-base"><span className="text-[#ffb606]">Food Status</span>: {status}</h1>
                  <h1 className="text-[#131313B3] text-base"><span className="text-[#ffb606]">Expired Data</span>: {expired_date}</h1>
                  <hr className="my-4" />



                  <div className="">
                    <button onClick={() => document.getElementById('my_modal_1').showModal()} className="px-1 lg:px-5 font-semibold text-xs lg:text-base text-white bg-[#ffb606] rounded-sm py-2">Request</button>

                    {/* modal */}
                    <dialog id="my_modal_1" className="modal">
                      <div className="">

                        <form onSubmit={handleSubmit(onSubmit)} className=" space-y-3  rounded py-5 px-6 bg-[#f8f5ef]">
                          <h1 className="text-2xl text-center font-semibold text-[#34373f] ">Request</h1>

                          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            <div className="form-control">
                              <label className="label">
                                <span className="label-text font-semibold text-base">Food Image:</span>
                              </label>
                              <input type="text" value={food_image} placeholder="Image" name="food_image" className="input input-bordered"
                                {...register("food_image", { required: true })}
                              />
                              {errors.image && <span className="text-red-500">This field is required</span>}
                            </div>
                            <div className="form-control">
                              <label className="label">
                                <span className="label-text font-semibold text-base">Food Name:</span>
                              </label>
                              <input type="text" value={food_name} placeholder="Food name" name="food_name" className="input input-bordered"
                                {...register("food_name", { required: true })}
                              />
                              {errors.itemName && <span className="text-red-500">This field is required</span>}
                            </div>
                            <div className="form-control">
                              <label className="label">
                                <span className="label-text font-semibold text-base">Pickup Location:</span>
                              </label>
                              <input type="text" value={pickup_location} placeholder="Pickup Location" name="pickup_location" className="input input-bordered"
                                {...register("pickup_location", { required: true })}
                              />
                              {errors.location && <span className="text-red-500">This field is required</span>}
                            </div>
                            <div className="form-control">
                              <label className="label">
                                <span className="label-text font-semibold text-base">Food Quantity:</span>
                              </label>
                              <input type="number" value={food_quantity} placeholder="Food Quantity" name="food_quantity" className="input input-bordered"
                                {...register("food_quantity", { required: true })}
                              />
                              {errors.quantity && <span className="text-red-500">This field is required</span>}
                            </div>
                            <div className="form-control">
                              <label className="label">
                                <span className="label-text font-semibold text-base">Food Status:</span>
                              </label>
                              <input type="text"
                                value="available"
                                placeholder="Food Status" name="food_status" className="input input-bordered"
                                {...register("food_status", { required: true })}
                              />
                              {errors.status && <span className="text-red-500">This field is required</span>}
                            </div>
                            <div className="form-control">
                              <label className="label">
                                <span className="label-text font-semibold text-base">Expired Date:</span>
                              </label>
                              <DatePicker
                                className="border p-2 rounded-md"
                                selected={startDate} 
                                // onChange={(date) => setStartDate(date)}
                                 />
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
                                value={donator?.name}
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
                                value={donator?.email}
                                className="input input-bordered  appearance-none focus:outline-none"
                              />
                              {errors.email && <span className="text-red-500">This field is required</span>}
                            </div>
                            <div className="form-control">
                              <label className="label">
                                <span className="label-text font-semibold text-base">Donar Image:</span>
                              </label>
                              <input type="text"
                                value={donator?.image}
                                placeholder="Image" name="image" className="input input-bordered appearance-none focus:outline-none"
                                {...register("image",)}
                              />
                              {errors.image && <span className="text-red-500">This field is required</span>}
                            </div>
                            <div className="form-control">
                              <label className="label">
                                <span className="label-text font-semibold text-base">requestor email:</span>
                              </label>
                              <input type="text"
                                value={user?.email}
                                placeholder="" name="requestor" className="input input-bordered appearance-none focus:outline-none"
                                {...register("requestor",)}
                              />
                              {errors.requestor && <span className="text-red-500">This field is required</span>}
                            </div>
                          </div>
                          <div className="form-control">
                          
                            <button className="btn mt-6 bg-[#ffb606] text-white text-base lg:text-lg mb-3 uppercase">Request</button>
                          </div>
                        </form>


                        <div className="modal-action">
                          <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                          </form>
                        </div>
                      </div>
                    </dialog>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="w-2/5 shadow-2xl p-6 ">
        <h1 className="text-center font-medium text-2xl mb-3
        ">Donar information</h1>
        <p className="border-b-2 mx-auto border-b-[#ffb606] w-24 mt-3 mb-4"></p>
        <p className="text-lg font-semibold"><span className="text-[#ffb606]">Donar Name</span>: {donator.name}</p>
        <p className="text-lg font-medium"> <span className="text-[#ffb606]">Pickup Location</span>: {pickup_location}</p>
      </div>
    </div>
  );
};

export default Details;