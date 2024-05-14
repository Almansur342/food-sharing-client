import {useEffect, useState } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";

const MyRequestedFood = () => {
  const { user } = useAuth();
  const [foods, setFoods] = useState([])
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios(`${import.meta.env.VITE_API_URL}/requestedFood/${user?.email}`)
      setFoods(data)
    }
    getData()
  }, [user?.email])

  
  console.log(foods);
  return (
    <div className='flex flex-col mt-6 container px-4 mx-auto my-10'>
    <div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
      <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
        <div className='overflow-hidden border border-gray-200  md:rounded-lg'>
          <table className='min-w-full divide-y divide-gray-200'>
            <thead className='bg-gray-50'>
              <tr>
                <th
                  scope='col'
                  className='py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500'
                >
                  <div className='flex items-center gap-x-3'>
                    <span>Food name</span>
                  </div>
                </th>

                <th
                  scope='col'
                  className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                >
                  <span>Expire Date</span>
                </th>

                <th
                  scope='col'
                  className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                >
                  <button className='flex items-center gap-x-2'>
                    <span>Request Date</span>
                  </button>
                </th>

                <th
                  scope='col'
                  className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                >
                  Donator
                </th>
                <th
                  scope='col'
                  className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                >
                  Pickup Location

                </th>

              </tr>
            </thead>
            <tbody className='bg-white divide-y divide-gray-200 '>
             {
              foods.map(food=> <tr key={food._id}>
                <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                  {food.food_name}
                </td>

                <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                  {food.expired_date}
                </td>

                <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                 {food.request_date}
                </td>
                <td className='px-4 py-4 text-sm whitespace-nowrap'>
                  <div className='flex items-center gap-x-2'>
                    <p
                      className='px-3 py-1 rounded-full text-blue-500 bg-blue-100/60
                         text-xs'
                    >
                     {food.donator.name}
                    </p>
                  </div>
                </td>
                <td
                  title=''
                  className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'
                >
                  {food.pickup_location}
                </td>
              </tr>)
             }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  );
};

export default MyRequestedFood;