import { Link, useLoaderData } from "react-router-dom";
import Carousel from "../../components/Banner/Carousel";
import ExtraSectionOne from "../../components/ExtraSectionOne";
import ExtraSectionTwo from './../../components/ExtraSectionTwo';
import SixFood from './../../components/SixFood/SixFood';
import { Helmet } from "react-helmet-async";

const Home = () => {
  const sixFood = useLoaderData();
  // console.log(sixFood);
  return (
    <div>
      <Helmet>
        <title>Be a Hand</title>
      </Helmet>
      <Carousel></Carousel>
      <div className="container px-4 my-16 mx-auto ">
        <h1 className="text-xl lg:text-3xl text-center font-semibold mb-4"><span className="">OUR</span> <span className="text-[#ffb606]">FEATURES</span></h1>
        <p className="text-center mt-2 text-base lg:text-lg font-medium">Share the Bounty connects food donors with those in need, offering food donation listings, a recipe aggregator, community engagement, and a focus on sustainability.</p>
        <p className="border-b-2 mx-auto border-b-[#ffb606] w-24 mt-4 mb-16"></p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {
            sixFood.map(food => <SixFood
              key={food._id}
              food={food}
            ></SixFood>)
          }
        </div>
        <Link className="flex items-center justify-center mt-5" to='/available'>
          <button className="px-2 lg:px-5 ml-1 lg:ml-2 font-semibold text-xs lg:text-base text-white bg-[#ffb606] rounded py-2"> All Available Food</button>
        </Link>
      </div>
      <ExtraSectionOne></ExtraSectionOne>
      <ExtraSectionTwo></ExtraSectionTwo>
    </div>
  );
};

export default Home;