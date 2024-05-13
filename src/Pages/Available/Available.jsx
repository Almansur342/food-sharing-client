import { useLoaderData } from "react-router-dom";
import AllFood from "../../components/AllFood/AllFood";

const Available = () => {
  const allFoods = useLoaderData();
  console.log(allFoods);
  return (
    <div className="container px-4 my-16 mx-auto">
      <h1 className="text-3xl text-center font-semibold mb-4"><span className="">Explore</span> <span className="text-[#ffb606]"> Available Food</span></h1>
    <p className="text-center mt-2 text-lg font-medium">Explore our assortment of donated food items, ranging from fresh produce to pantry staples. Find what you need to create delicious meals or simply replenish your supplies.</p>
    <p className="border-b-2 mx-auto border-b-[#ffb606] w-24 mt-4 mb-16"></p>
      <div className="grid grid-cols-3 gap-5">
      {
        allFoods.filter(fo=> fo.food_status === "available")
        .map(food => <AllFood
           key={food._id}
           food={food}
           ></AllFood>)
      }
    </div>
    </div>
    
  );
};

export default Available;