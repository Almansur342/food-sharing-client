import { Link } from "react-router-dom"

const Slide = ({image,text}) => {
  return (
    <div
      className='w-full  bg-center bg-cover h-[30rem]'
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className='flex items-center justify-center w-full h-full bg-gray-900/50'>
        <div className='text-center'>
          <h1 className='text-xl w-2/3 mx-auto font-semibold text-white lg:text-4xl'>
            {text}
          </h1>
          <br />
          <Link to='/available' className='w-full px-5 py-3 mt-4 text-base font-semibold text-white capitalize transition-colors duration-300 transform bg-[#ffb606] rounded-md lg:w-auto hover:bg-[#ffb606] focus:outline-none'>
            All Available Food
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Slide