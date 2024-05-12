import { useLoaderData } from "react-router-dom";
import Carousel from "../../components/Banner/Carousel";
import ExtraSectionOne from "../../components/ExtraSectionOne";
import ExtraSectionTwo from './../../components/ExtraSectionTwo';
import SixFood from './../../components/SixFood/SixFood';

const Home = () => {
  const sixFood = useLoaderData();
  // console.log(sixFood);
  return (
    <div>
     <Carousel></Carousel>
    <div className="container px-4 my-16 mx-auto ">
    <h1 className="text-3xl text-center font-semibold mb-4"><span className="">OUR</span> <span className="text-[#ffb606]">FEATURES</span></h1>
    <p className="text-center mt-2 text-lg font-medium">Share the Bounty connects food donors with those in need, offering food donation listings, a recipe aggregator, community engagement, and a focus on sustainability.</p>
    <p className="border-b-2 mx-auto border-b-[#ffb606] w-24 mt-4 mb-16"></p>
      <div className="grid grid-cols-3 gap-5">
      {
        sixFood.map(food=><SixFood
        key={food._id}
        food={food}
        ></SixFood>)
       }
      </div>
       
    </div>
     <ExtraSectionOne></ExtraSectionOne>
     <ExtraSectionTwo></ExtraSectionTwo>
    </div>
  );
};

export default Home;