import { motion } from 'framer-motion';

const SixFood = ({food}) => {
  const{food_image,food_name,food_quantity,pickup_location,donator,expired_date,additional_notes} = food || {}
  return (
    <motion.div
    whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 300 }}
    className="card rounded border-2  flex flex-col">
      <div className="flex items-center px-3 space-x-3 mb-4 mt-3">
			<img src={donator.image} alt="" className="object-cover object-center w-10 h-10 rounded-full shadow-sm" />
			<div>
				<h2 className="font-semibold leading-none">{donator.name}</h2>
			</div>
		</div>
  <figure><img
  className="h-60 w-full" src={food_image} alt="Shoes" /></figure>
  <div className="px-3 py-4 space-y-2 bg-gray-50">
    <h2 className="text-xl font-semibold hover:text-[#ffb606]">{food_name}</h2>
    <p className="text-[#676767] h-12">{additional_notes}</p>
    <p className="border-b-2 mx-auto border-b-[#ffb606]  my-4"></p>
    <div className="flex flex-wrap justify-between pt-3 space-x-2">
						<span>{expired_date}</span>
						<span>{food_quantity}</span>
					</div>
          <p className="">Pickup Location: {pickup_location}</p>
    <div className="flex-1">
      <button className="px-2 lg:px-5 font-semibold text-xs lg:text-base text-white bg-[#ffb606] rounded py-2 my-3">Buy Now</button>
    </div>
  </div>
</motion.div>
  );
};

export default SixFood;