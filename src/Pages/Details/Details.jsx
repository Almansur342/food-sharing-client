import { useLoaderData } from "react-router-dom";

const Details = () => {
  const loadedFood = useLoaderData();
  console.log(loadedFood);
  const{food_image,food_name,food_quantity,pickup_location,donator,expired_date,additional_notes,_id,status} = loadedFood || {}

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
               <button className="px-1 lg:px-5 font-semibold text-xs lg:text-base text-white bg-[#ffb606] rounded-sm py-2">Request</button>
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