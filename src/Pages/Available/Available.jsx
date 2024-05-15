import { useEffect, useState } from "react";
import AllFood from "../../components/AllFood/AllFood";
import axios from "axios";
import { Helmet } from "react-helmet-async";

const Available = () => {
 const [foods,setFoods] = useState([]);
 const [sort, setSort] = useState('');
 const [search, setSearch] = useState('');
 const [twoColumn, setTwoColumn] = useState(false);

  // Handler to toggle the layout
  const changeLayout = () => {
    setTwoColumn(prevState => !prevState);
  };

 useEffect(()=>{
  const getData = async () => {
    const {data} = await axios(`${import.meta.env.VITE_API_URL}/allFood?sort=${sort}&search=${search}`)
    setFoods(data);
  }
  getData()
 },[sort,search])

 const handleReset = () =>{
  setSort('')
  setSearch('')
 }

 const handleSearch = (e) =>{
 e.preventDefault()
 const text = e.target.search.value;
 setSearch(text);
 }
  return (
    <div className="container px-4 my-16 mx-auto">
      <Helmet>
        <title>Be a Hand|Available Foods</title>
      </Helmet>
      <h1 className="text-xl lg:text-3xl text-center font-semibold mb-4"><span className="">Explore</span> <span className="text-[#ffb606]"> Available Food</span></h1>
    <p className="text-center mt-2 text-lg font-medium">Explore our assortment of donated food items, ranging from fresh produce to pantry staples. Find what you need to create delicious meals or simply replenish your supplies.</p>
    <p className="border-b-2 mx-auto border-b-[#ffb606] w-24 mt-4 mb-16"></p>
    <div className='flex flex-col mb-10 md:flex-row justify-center items-center gap-8 '>

          <form onSubmit={handleSearch}>
            <div className='flex p-1 overflow-hidden border rounded-lg    '>
              <input
                className='px-6 py-2 input-bordered font-bold'
                type='text'
                name='search'
                placeholder='Enter Food Name'
                aria-label='Enter Job Title'
              />

              <button className='px-2 lg:px-3 ml-1 lg:ml-2 font-semibold text-xs lg:text-base text-white bg-[#ffb606] rounded py-2'>
                Search
              </button>
            </div>
          </form>
          <div>
            <select
            onChange={e=> {
              setSort(e.target.value)
            }}
              value={sort}
              name='sort'
              id='sort'
              className='border-2 p-4 rounded-md '
            >
              <option value=''>Sort By Deadline</option>
              <option value='dsc'>Descending Order</option>
              <option value='asc'>Ascending Order</option>
            </select>
          </div>
          <button onClick={handleReset} className='px-2 lg:px-5 ml-1 lg:ml-2 font-semibold text-xs lg:text-base text-white bg-[#ffb606] rounded py-2'>Reset</button>
        </div>

            <div className="flex items-center justify-center">
            <button onClick={changeLayout} className="px-2 lg:px-7 mb-5 ml-1 lg:ml-2 font-semibold text-xs lg:text-base text-white bg-[#ffb606] rounded py-2">Layout</button>
            </div>
        
      <div className={`grid grid-cols-1 md:grid-cols-2 ${twoColumn ? 'lg:grid-cols-2' : 'lg:grid-cols-3'} gap-5`}>
      {
        foods.filter(fo=> fo.food_status === "available")
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